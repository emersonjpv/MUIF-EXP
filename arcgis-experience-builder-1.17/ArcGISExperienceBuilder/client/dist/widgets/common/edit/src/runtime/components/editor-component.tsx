/** @jsx jsx */
import {
  React, jsx, Immutable, type IMUseDataSource, type DataSourceTypes, hooks, type ImmutableArray,
  type FeatureDataRecord, dataSourceUtils, WidgetState, ReactRedux, type IMState
} from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { WidgetPlaceholder } from 'jimu-ui'
import editPlaceholderIcon from '../assets/icons/placeholder-edit-geometry-empty.svg'
import * as reactiveUtils from 'esri/core/reactiveUtils'
import { getDataSourceById, supportedDsTypes } from '../../utils'
import {
  type EditFeatures, flatMapArray, flatMapArrayWithView, idsArrayEquals, queryFullFeatures,
} from './utils'
import EditListDataSource from './edit-list-ds'
import useEditor from './use-editor'
import type { CommonProps } from '../widget'

interface EditorComponentProps extends CommonProps {
  widgetId: string
  useMapWidgetIds: ImmutableArray<string>
}

const EditorComponent = (props: EditorComponentProps) => {
  const { widgetId, config, canEditFeature, useMapWidgetIds } = props
  const { mapViewsConfig } = config

  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)
  const [mapUseDataSources, setMapUseDataSources] = React.useState<IMUseDataSource[]>()
  const [editFeatures, setEditFeatures] = React.useState<EditFeatures>({})

  const editContainer = React.useRef<HTMLDivElement>(null)
  const editor = useEditor({
    config,
    jimuMapView,
    editContainer,
    canEditFeature
  })

  const updateAllUseDataSourcesFromView = React.useCallback(async (jimuMapView: JimuMapView) => {
    if (!jimuMapView || jimuMapView.isDestroyed()) return
    const viewConfig = mapViewsConfig?.[jimuMapView.id]
    const customizeLayers = viewConfig?.customizeLayers
    const customJimuLayerViewIds = viewConfig?.customJimuLayerViewIds
    const newMapUseDataSources = []
    const jimuLayerViews = jimuMapView.jimuLayerViews
    for (const layerViewId in jimuLayerViews) {
      const jimuLayerView = jimuLayerViews[layerViewId]
      const isLayerVisible = jimuLayerView.isLayerVisible()
      if (!isLayerVisible) continue
      if (customizeLayers && !customJimuLayerViewIds?.includes(layerViewId)) continue
      const layerDs = await jimuLayerView.getOrCreateLayerDataSource()
      if (!layerDs || !supportedDsTypes.includes(layerDs.type as DataSourceTypes)) continue
      const mainDs = layerDs.getMainDataSource()
      const rootDs = layerDs.getRootDataSource()
      const usedDs: IMUseDataSource = Immutable({
        dataSourceId: layerDs.id,
        mainDataSourceId: mainDs?.id,
        dataViewId: layerDs.dataViewId,
        rootDataSourceId: rootDs?.id
      })
      newMapUseDataSources.push(usedDs)
    }
    setMapUseDataSources(newMapUseDataSources)
  }, [mapViewsConfig])

  const handleActiveViewChange = React.useCallback(async (jimuMapView: JimuMapView) => {
    if (jimuMapView) {
      await jimuMapView.whenJimuMapViewLoaded()
      await jimuMapView.whenAllJimuLayerViewLoaded()
    }
    setJimuMapView(jimuMapView)
    updateAllUseDataSourcesFromView(jimuMapView)
  }, [updateAllUseDataSourcesFromView])

  React.useEffect(() => {
    if (!useMapWidgetIds || useMapWidgetIds.length === 0) {
      setJimuMapView(null)
    }
  }, [useMapWidgetIds])

  const handleSelectionChange = React.useCallback((dataSourceIds: string[]) => {
    const newEditFeatures = Object.assign({}, editFeatures)
    for (const dataSourceId of dataSourceIds) {
      const dataSource = getDataSourceById(dataSourceId)
      if (!dataSource) continue
      const selectedRecords = dataSource.getSelectedRecords() as FeatureDataRecord[]
      newEditFeatures[dataSourceId] = selectedRecords
    }
    setEditFeatures(newEditFeatures)
    const flatEditFeatures = flatMapArray(newEditFeatures)
    const editCount = flatEditFeatures.length
    if (editCount === 0 && editor?.activeWorkflow) {
      editor.cancelWorkflow()
    }
  }, [editFeatures, editor])

  const selectionFormEditor = React.useRef(false)
  const widgetsRuntimeInfo = ReactRedux.useSelector((state: IMState) => state.widgetsRuntimeInfo)
  const widgetState = widgetsRuntimeInfo[widgetId]?.state
  const startWorkflow = React.useCallback(async (features: EditFeatures) => {
    if (!editor || selectionFormEditor.current) return
    // The number of selected(the layers from the same map)
    const featureRecords = flatMapArrayWithView(features, jimuMapView)
    if ((widgetState === WidgetState.Closed || featureRecords.length === 0) && editor.activeWorkflow) {
      editor.cancelWorkflow()
      return
    }
    if (featureRecords.length === 1) {
      const fullFeatures = await queryFullFeatures(jimuMapView, features)
      const activeFeature = fullFeatures[0]
      editor.startUpdateWorkflowAtFeatureEdit(activeFeature)
    } else if (featureRecords.length > 1) {
      const fullFeatures = await queryFullFeatures(jimuMapView, features)
      editor.startUpdateWorkflowAtMultipleFeatureSelection(fullFeatures)
    }
  }, [editor, jimuMapView, widgetState])

  React.useEffect(() => {
    startWorkflow(editFeatures)
  }, [startWorkflow, editFeatures])

  const [formChange, setFormChange] = React.useState(false)
  const editFeaturesRef = hooks.useLatest(editFeatures)
  React.useEffect(() => {
    if (!editor) return
    const watchState = reactiveUtils.watch(() => editor.viewModel.state, (editState, oldEditState) => {
      if (editState === 'ready' && !(editor.viewModel as any).updating) {
        for (const dsId of Object.keys(editFeaturesRef.current)) {
          if (editFeaturesRef.current[dsId].length > 0) {
            const dataSource = getDataSourceById(dsId)
            dataSource.clearSelection()
          }
        }
      }
      if (['awaiting-update-feature-candidate', 'editing-attributes'].includes(editState)) {
        if ('candidates' in (editor.viewModel.activeWorkflow?.data || {})) {
          const selectedFeatures = (editor.viewModel.activeWorkflow.data as __esri.UpdateWorkflowData).candidates || []
          const layers: __esri.Layer[] = []
          const featuresMap: {[layerId: string]: __esri.Graphic[]} = {}
          for (const f of selectedFeatures) {
            if (!featuresMap[f.layer.id]) {
              featuresMap[f.layer.id] = []
              layers.push(f.layer as __esri.Layer)
            }
            featuresMap[f.layer.id].push(f)
          }
          selectionFormEditor.current = true
          for (const layer of layers) {
            const rootDs = jimuMapView.getMapDataSource()
            const dsId = dataSourceUtils.getDataSourceIdByJSAPILayer(rootDs, layer)
            const ds = getDataSourceById(dsId)
            if (ds) {
              const features = featuresMap[layer.id]
              const ids: string[] = []
              const records = []
              for (const feature of features) {
                const record = ds.buildRecord(feature)
                records.push(record)
                ids.push(record.getId())
              }
              const selectedIds = ds.getSelectedRecordIds()
              if (!idsArrayEquals(selectedIds, ids) && (selectedIds.length !== 0 || ids.length !== 0)) {
                ds.selectRecordsByIds(ids, records)
              }
            }
          }
          window.setTimeout(() => {
            selectionFormEditor.current = false
          }, 50)
        }
      }
    })
    const watchUpdating = reactiveUtils.watch(() => (editor.viewModel as any).updating, (updating) => {
      if (!updating &&
        ['editing-existing-feature'].includes(editor.viewModel.state) &&
        !editor.viewModel.featureFormViewModel &&
        editor.activeWorkflow
      ) {
        editor.activeWorkflow?.start?.()
      }
    })
    const watchHasPendingEdits = reactiveUtils.watch(() => (editor.activeWorkflow as any)?.hasPendingEdits, (hasPendingEdits) => {
      if (editor.viewModel.activeWorkflow?.type === 'create-features') {
        setFormChange(true)
      } else {
        setFormChange(!!hasPendingEdits)
      }
    })
    return () => {
      watchState.remove()
      watchUpdating.remove()
      watchHasPendingEdits.remove()
    }
  }, [editFeaturesRef, editor, jimuMapView])

  if (!useMapWidgetIds || useMapWidgetIds.length === 0) {
    return (
      <WidgetPlaceholder
        autoFlip
        iconSize='large'
        style={{ position: 'absolute', left: 0, top: 0 }}
        icon={editPlaceholderIcon}
        data-testid='editPlaceholder'
      />
    )
  }
  return (
    <div className='jimu-widget widget-edit esri-widget'>
      <div className='edit-con h-100' ref={editContainer}></div>
      <JimuMapViewComponent
        useMapWidgetId={useMapWidgetIds?.[0]}
        onActiveViewChange={handleActiveViewChange}
      />
      {useMapWidgetIds.length > 0 && !jimuMapView && <div className='jimu-secondary-loading' />}
      <EditListDataSource
        useDataSources={mapUseDataSources}
        unsavedChange={formChange}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  )
}

export default EditorComponent
