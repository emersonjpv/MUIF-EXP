/** @jsx jsx */
import {
  React, jsx, classNames, defaultMessages as jimuCoreMessages, type UseDataSource, type ImmutableArray,
  hooks, css, Immutable, type SubtypeSublayerDataSource, type FeatureDataRecord, type FeatureLayerDataSource,
  SupportedLayerServiceTypes
} from 'jimu-core'
import { defaultMessages as jimuUIMessages, Loading } from 'jimu-ui'
import type FeatureForm from 'esri/widgets/FeatureForm'
import FormTemplate from 'esri/form/FormTemplate'
import { type LayersConfig, LayerHonorModeType } from '../../config'
import defaultMessages from '../translations/default'
import { getDataSourceById, getDsPrivileges, getEditDataSource, getEditHiddenFields } from '../../utils'
import {
  applyAttributeUpdates, constructFormElements, type EditFeatures, flatMapArray,
  getDsAccessibleInfo, getIsAdvancedPermission, getDisplayField, updateDataSourceAfterEdit
} from './utils'
import EmptyPlaceholder from './empty-placeholder'
import FeatureFormConfirm from './feature-form-confirm'
import FeatureFormHeader from './feature-form-header'
import FeatureFormButtons from './feature-form-buttons'
import FeatureFormList from './feature-form-list'
import FeatureFormSelect from './feature-form-select'
import EditListDataSource from './edit-list-ds'
import type { CommonProps } from '../widget'
import useFeatureForm from './use-feature-form'

export interface ControlButton {
  label: string
  type: 'default' | 'primary' | 'secondary' | 'tertiary'
  clickHandler: () => void
  disabled?: boolean
}

interface FeatureFormComponentProps extends CommonProps {
  label: string
  useDataSources: ImmutableArray<UseDataSource>
}

export type FeatureFormStep = 'empty' | 'list' | 'form' | 'new'
export type FormPriviledges = 'full' | 'none' | 'normal'

export interface LayerInfo {
  id: string
  dataSource: FeatureLayerDataSource | SubtypeSublayerDataSource
  layer: __esri.FeatureLayer | __esri.SubtypeSublayer
  formTemplate: FormTemplate
  editable: boolean
  privilege: FormPriviledges
}

const getStyle = () => {
  return css`
    &.widget-edit {
      .jimu-loading {
        z-index: 1;
      }
      .edit-con {
        display: flex;
        flex-direction: column;
      }
      .attr-height {
        overflow-y: auto;
        height: calc(100% - 113px);
      }
      .esri-feature-form {
          background-color: unset;
      }
    }
  `
}

const FeatureFormComponent = (props: FeatureFormComponentProps) => {
  const { label: widgetLabel, config, canEditFeature, useDataSources } = props
  const { description, layersConfig, noDataMessage } = config

  const [activeId, setActiveId] = React.useState<string>(null)
  const [activeFeature, setActiveFeature] = React.useState<FeatureDataRecord['feature']>(null)
  const [editFeatures, setEditFeatures] = React.useState<EditFeatures>({})
  const [layersInfo, setLayersInfo] = React.useState<{ [dsId: string]: LayerInfo }>({})
  const [addLayersConfig, setAddLayersConfig] = React.useState<ImmutableArray<LayersConfig>>(Immutable([]))
  const [delConfirm, setDelConfirm] = React.useState(false)
  const [backConfirm, setBackConfirm] = React.useState(false)
  const [formChange, setFormChange] = React.useState(false)
  const [formSubmittable, setFormSubmittable] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const editContainer = React.useRef<HTMLDivElement>()

  const activeLayerInfo = React.useMemo(() => layersInfo[activeId], [activeId, layersInfo])

  const translate = hooks.useTranslation(defaultMessages, jimuCoreMessages, jimuUIMessages)

  React.useEffect(() => {
    const newEditFeatures = Object.assign({}, editFeatures)
    let editFeaturesChanged = false
    for (const dsId in editFeatures) {
      const layerConfig = layersConfig.find(l => l.id === dsId)
      if (!layerConfig) {
        delete newEditFeatures[dsId]
        editFeaturesChanged = true
      }
    }
    editFeaturesChanged && setEditFeatures(newEditFeatures)
  }, [editFeatures, layersConfig])

  const handleSubmit = React.useCallback(async (form: FeatureForm) => {
    const newFeature = form.feature
    if (!newFeature) return
    if (newFeature?.geometry) {
      newFeature.geometry = null
    }
    const updated = form.getValues()
    Object.keys(updated).forEach((name) => {
      newFeature.attributes[name] = updated[name]
    })
    const edits = {
      updateFeatures: [newFeature]
    }
    setLoading(true)
    await applyAttributeUpdates(activeLayerInfo, edits)
    updateDataSourceAfterEdit(activeLayerInfo.dataSource, edits)
    setFormChange(false)
    setLoading(false)
  }, [activeLayerInfo])

  const handleValueChange = React.useCallback((change: boolean, submittable: boolean) => {
    setFormChange(change)
    setFormSubmittable(submittable)
  }, [])

  const featureForm = useFeatureForm({
    activeId,
    activeFeature,
    activeLayer: activeLayerInfo?.layer,
    formTemplate: activeLayerInfo?.formTemplate,
    editContainer,
    onValueChange: handleValueChange
  })

  const formPrivilegesIsFull = activeLayerInfo?.privilege === 'full'
  const formPrivilegesIsNormal = activeLayerInfo?.privilege === 'normal'
  const formEditable = activeLayerInfo?.editable
  const activeConfig = layersConfig.find(item => item.id === activeId)
  const layerDefinition = activeLayerInfo?.dataSource?.getLayerDefinition?.()
  const {create, update, deletable} = getDsPrivileges(layerDefinition)
  const updateRecords = activeConfig?.updateRecords && update
  const deleteRecords = activeConfig?.deleteRecords && deletable
  const addRecords = activeConfig?.addRecords && create
  const isTableLayer = layerDefinition?.type === SupportedLayerServiceTypes.Table

  const controls: ControlButton[] = []
  const handleSave = React.useCallback(() => {
    const formViewModel = featureForm.current?.viewModel
    if (formViewModel?.submittable) {
      handleSubmit(featureForm.current)
    }
  }, [featureForm, handleSubmit])
  if (formPrivilegesIsFull || (formPrivilegesIsNormal && updateRecords)) {
    controls.push({
      label: translate('update'),
      type: 'primary',
      disabled: !(formChange && formSubmittable),
      clickHandler: handleSave
    })
  }
  const handleDeleteConfirm = React.useCallback(() => {
    setDelConfirm(true)
  }, [])
  const cancelDelete = React.useCallback(() => {
    setDelConfirm(false)
  }, [])
  const handleDelete = React.useCallback(async () => {
    const dataSource = activeLayerInfo?.dataSource
    const currentRecord = dataSource?.getSelectedRecords()?.[0] as FeatureDataRecord
    const delFeature = currentRecord?.feature
    if (delFeature) {
      const edits = {
        deleteFeatures: [delFeature] as __esri.Graphic[]
      }
      setLoading(true)
      await applyAttributeUpdates(activeLayerInfo, edits)
      updateDataSourceAfterEdit(activeLayerInfo.dataSource, edits)
      setFormChange(false)
      setLoading(false)
    }
    setDelConfirm(false)
  }, [activeLayerInfo])
  if (formPrivilegesIsFull || (formPrivilegesIsNormal && deleteRecords)) {
    controls.push({
      label: translate('delete'),
      type: 'default',
      clickHandler: handleDeleteConfirm
    })
  }

  const addControls: ControlButton[] = []
  const handleAdd = React.useCallback(async () => {
    const formViewModel = featureForm.current?.viewModel
    if (formViewModel?.submittable) {
      const addFeature = formViewModel?.feature
      if (addFeature) {
        const updated = featureForm.current.getValues()
        addFeature.attributes = updated
        const edits = {
          addFeatures: [addFeature]
        }
        setLoading(true)
        await applyAttributeUpdates(activeLayerInfo, edits)
        updateDataSourceAfterEdit(activeLayerInfo.dataSource, edits)
        setActiveId(null)
        setFormChange(false)
        setLoading(false)
      }
    }
  }, [activeLayerInfo, featureForm])
  if (isTableLayer && (formPrivilegesIsFull || (formPrivilegesIsNormal && addRecords))) {
    addControls.push({
      label: translate('add'),
      type: 'primary',
      disabled: false,
      clickHandler: handleAdd
    })
  }

  const handleBack = React.useCallback(() => {
    const flatEditFeatures = flatMapArray(editFeatures)
    if (flatEditFeatures.length === 1) {
      let needClearSelection = true
      const featureRecord = flatEditFeatures[0]
      const dataSource = featureRecord.dataSource
      const selectedRecordIds = dataSource.getSelectedRecordIds()
      if (selectedRecordIds.length > 1 || !selectedRecordIds.includes(featureRecord.getId())) {
        needClearSelection = false
      }
      if (dataSource && needClearSelection) {
        dataSource.clearSelection()
      }
    }
    setFormChange(false)
    setBackConfirm(false)
    setActiveId(null)
    setActiveFeature(null)
  }, [editFeatures])
  const handleBackConfirm = React.useCallback(() => {
    if (formChange) {
      setBackConfirm(true)
    } else {
      handleBack()
    }
  }, [formChange, handleBack])
  const cancelBack = React.useCallback(() => {
    setBackConfirm(false)
  }, [])

  const handleClickItem = React.useCallback((dsId: string, feature: FeatureDataRecord['feature']) => {
    setActiveId(dsId)
    setActiveFeature(feature)
  }, [])

  React.useEffect(() => {
    const newAddLayersConfig = layersConfig.filter(layerConfig => {
      const layerInfo = layersInfo[layerConfig.id]
      if (!layerInfo) return false
      const layerDefinition = layerInfo.dataSource.getLayerDefinition()
      const isTable = layerDefinition?.type === SupportedLayerServiceTypes.Table
      return layerInfo.editable && isTable && (
        layerInfo.privilege === 'full' ||
        (layerInfo.privilege === 'normal' && layerConfig.addRecords)
      )
    })
    setAddLayersConfig(newAddLayersConfig)
  }, [layersConfig, layersInfo])

  const handleNew = React.useCallback(() => {
    const firstId = addLayersConfig[0].id
    setActiveId(firstId)
    setActiveFeature(null)
  }, [addLayersConfig])

  const getLayerInfo = React.useCallback(async (dsId: string) => {
    try {
      const ds = getDataSourceById(dsId)
      const dataSource = getEditDataSource(ds)
      const layer = await dataSource.createJSAPILayerByDataSource() as __esri.FeatureLayer | __esri.SubtypeSublayer
      let formTemplate: FormTemplate
      const layerConfig = layersConfig.filter(l => l.id === dsId)[0]
      if (!layerConfig) return
      if (layerConfig.layerHonorMode === LayerHonorModeType.Webmap) {
        formTemplate = layer.formTemplate
      } else {
        const hiddenFields = getEditHiddenFields(dataSource.getLayerDefinition())
        const elements = constructFormElements(layerConfig.groupedFields.asMutable({ deep: true }), hiddenFields)
        formTemplate = new FormTemplate({ elements })
      }
      // New logic of API: The user with advanced permissions can modify the configuration regardless of the configuration
      const isAdvancedPermission = await getIsAdvancedPermission(dataSource)
      // full editing privileges
      const fullEditingPrivileges: boolean = (layer as any).userHasFullEditingPrivileges
      const layerEditingEnabled: boolean = layer.editingEnabled ?? true
      let privilege: 'full' | 'none' | 'normal'
      if (isAdvancedPermission || (fullEditingPrivileges && layerEditingEnabled)) {
        privilege = 'full'
      } else if (!layerEditingEnabled) {
        privilege = 'none'
      } else {
        privilege = 'normal'
      }
      // fetch to confirm whether it's a public source
      const accessible = await getDsAccessibleInfo(layer.url)
      const editable = accessible || canEditFeature
      const layerInfo = {
        id: layerConfig.id,
        dataSource,
        layer,
        formTemplate,
        editable,
        privilege
      }
      return layerInfo
    } catch (err) {
      console.error(err)
    }
  }, [canEditFeature, layersConfig])

  const handleDataSourceCreated = React.useCallback(async (dsId: string) => {
    const newLayerInfo = await getLayerInfo(dsId)
    setLayersInfo(old => {
      const newLayersInfo = {}
      for (const l of layersConfig) {
        if (l.id === dsId) {
          newLayersInfo[l.id] = newLayerInfo
        } else if (old[l.id]){
          newLayersInfo[l.id] = old[l.id]
        }
      }
      return newLayersInfo
    })
  }, [getLayerInfo, layersConfig])

  React.useEffect(() => {
    const updateLayersInfo = async () => {
      const newLayersInfo = {}
      for (const layerConfig of layersConfig) {
        const dsId = layerConfig.id
        const ds = getDataSourceById(dsId)
        if (!ds) continue
        newLayersInfo[layerConfig.id] = await getLayerInfo(layerConfig.id)
      }
      setLayersInfo(newLayersInfo)
    }
    updateLayersInfo()
  }, [layersConfig, getLayerInfo])

  const editFeatureRef = hooks.useLatest(editFeatures)
  const handleSelectionChange = React.useCallback(async (dataSourceIds: string[]) => {
    const newEditFeatures = Object.assign({}, editFeatureRef.current)
    for (const dataSourceId of dataSourceIds) {
      const dataSource = getDataSourceById(dataSourceId)
      if (!dataSource) return
      let editRecords = dataSource.getSelectedRecords() as FeatureDataRecord[]
      const fieldNames = Object.keys(dataSource.getSchema().fields || {})
      const idField = dataSource.getIdField()
      const displayField = getDisplayField(dataSource)
      if (editRecords.length > 0 && !editRecords[0].getFieldValue(displayField) && fieldNames.includes(displayField)) {
        try{
          const ids = editRecords.map(r => r.getId())
          const queryResult = await dataSource.query({ outFields: [idField, displayField], where: `${idField} in (${ids.join(',')})` })
          if (queryResult.records) {
            editRecords = queryResult.records as FeatureDataRecord[]
          }
        } catch (err) {
          console.error(err)
        }
      }
      newEditFeatures[dataSourceId] = editRecords
    }
    setEditFeatures(newEditFeatures)
    setFormChange(false)
    const flatEditFeatures = flatMapArray(newEditFeatures)
    if (flatEditFeatures.length === 1) {
      const [dsId, features] = Object.entries(newEditFeatures).find(([dsId, features]) => features.length > 0)
      setActiveId(dsId)
      setActiveFeature(features[0].feature)
    } else {
      setActiveId(null)
      setActiveFeature(null)
    }
  }, [editFeatureRef])

  const layersOrder = React.useMemo(() => layersConfig.map(l => l.id).asMutable(), [layersConfig])
  const flatEditFeatures = flatMapArray(editFeatures)
  const editCount = flatEditFeatures.length
  const hasValidLayer = layersConfig.length > 0
  const noLayerTips = translate('initAttEmptyMessage')
  const emptyTips = hasValidLayer ? (noDataMessage || translate('noRecordTips')) : noLayerTips

  let featureFormStep: FeatureFormStep
  if (activeId) {
    featureFormStep = activeFeature ? 'form' : 'new'
  } else {
    featureFormStep = editCount > 0 ? 'list' : 'empty'
  }

  return (
    <div className='jimu-widget widget-edit esri-widget' css={getStyle()}>
      {loading && <Loading />}
      <div className='edit-con surface-1 border-0 h-100'>
        <FeatureFormHeader
          widgetLabel={widgetLabel}
          description={description}
          hasTableLayerAdd={addLayersConfig.length > 0}
          featureFormStep={featureFormStep}
          activeLayerInfo={activeLayerInfo}
          activeFeature={activeFeature}
          editCount={editCount}
          onBack={handleBackConfirm}
          onNew={handleNew}
        />
        <div className={classNames('attr-height', {'d-none': featureFormStep !== 'form' && featureFormStep !== 'new'})} ref={editContainer}>
          {featureFormStep === 'new' &&
            <FeatureFormSelect
              addLayersConfig={addLayersConfig}
              activeId={activeId}
              onChange={setActiveId}
            />
          }
        </div>
        {featureFormStep === 'list' &&
          <FeatureFormList
            editFeatures={editFeatures}
            layersInfo={layersInfo}
            layersOrder={layersOrder}
            onClickItem={handleClickItem}
          />
        }
        {featureFormStep === 'empty' &&
          <EmptyPlaceholder emptyTips={emptyTips} />
        }
        {featureFormStep === 'form' && controls.length > 0 && formEditable &&
          <FeatureFormButtons buttons={controls} />
        }
        {featureFormStep === 'new' && addControls.length > 0 &&
          <FeatureFormButtons buttons={addControls} />
        }
      </div>
      {delConfirm && <FeatureFormConfirm
        title={translate('deleteRecord')}
        message={translate('deleteRecordTips')}
        confirmText={translate('delete')}
        cancelText={translate('keepRecord')}
        onConfirm={handleDelete}
        onCancel={cancelDelete}
      />}
      {backConfirm && <FeatureFormConfirm
        title={translate('selectionChangeConfirmTitle')}
        message={translate('selectionChangeConfirmTips')}
        confirmText={translate('discardConfirm')}
        cancelText={translate('discardCancel')}
        onConfirm={handleBack}
        onCancel={cancelBack}
      />}
      <EditListDataSource
        useDataSources={useDataSources}
        unsavedChange={formChange}
        onDataSourceCreated={handleDataSourceCreated}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  )
}

export default FeatureFormComponent
