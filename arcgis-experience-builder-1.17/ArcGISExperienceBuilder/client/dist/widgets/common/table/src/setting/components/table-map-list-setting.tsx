/** @jsx jsx */
import { React, jsx, type ImmutableObject, type ImmutableArray, Immutable, CONSTANTS, hooks, defaultMessages as jimuCoreMessages  } from 'jimu-core'
import { type _TreeItem, List, type TreeActionDataType, type TreeRenderOverrideItemDataType } from 'jimu-ui/basic/list-tree'
import { SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import type { JimuFeatureLayerView, JimuSceneLayerView } from 'jimu-arcgis'
import type { LayersConfig } from '../../config'
import LayerConfig from './layer-config'
import { getDataSourceById, getTableDataSource } from '../../utils'
import { Alert } from 'jimu-ui'
import { advancedActionMap } from './utils'
import { builderAppSync } from 'jimu-for-builder'

interface TableLayerProps {
  widgetId: string
  layersConfig: ImmutableArray<LayersConfig>
  onChange: (layersConfig: ImmutableArray<LayersConfig>, activeId?: string) => void
}

export type SelectableJimuLayerView = JimuFeatureLayerView | JimuSceneLayerView

const TableMapListSetting = (props: TableLayerProps) => {
  const { widgetId, layersConfig, onChange } = props
  const [activeId, setActiveId] = React.useState<string>('')
  const [showLayerPanel, setShowLayerPanel] = React.useState<boolean>(false)
  const [popperFocusNode, setPopperFocusNode] = React.useState<HTMLElement>(null)
  const sidePopperTrigger = React.useRef<HTMLDivElement>(null)
  const translate = hooks.useTranslation(jimuCoreMessages)
  const { OUTPUT_DATA_VIEW_ID } = CONSTANTS

  const activeLayerConfig = React.useMemo(() => {
    const layerConfig = layersConfig.find(l => l.id === activeId)
    return Immutable(layerConfig)
  }, [activeId, layersConfig])

  const dataSource = React.useMemo(() => {
    const ds = getDataSourceById(activeId)
    return getTableDataSource(ds)
  }, [activeId])
  const layerDefinition = dataSource?.getLayerDefinition()
  const layerEditingEnabled = dataSource?.layer?.editingEnabled
  const isDsAutoRefresh = dataSource?.getAutoRefreshInterval() > 0
  const isEditableDs = dataSource?.url && dataSource?.dataViewId !== OUTPUT_DATA_VIEW_ID

  const itemsJson = React.useMemo(() => {
    return layersConfig.map((config) => {
      return {
        itemStateDetailContent: config,
        itemKey: config.id,
        itemStateChecked: config.id === activeId,
        itemStateTitle: config.name,
        itemStateCommands: []
      }
    }).asMutable({ deep: true })
  }, [activeId, layersConfig])

  const alertIcon = React.useMemo(() => {
    return <Alert
      variant='text'
      form='tooltip'
      size='small'
      type='error'
      text={translate('dataSourceCreateError')}
    />
  }, [translate])

  const isDataSourceAccessible = (dataSourceId: string) => {
    const ds = getDataSourceById(dataSourceId)
    return !!ds
  }

  const renderDetail = React.useCallback((actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => {
    const { itemJsons } = refComponent.props
    const [currentItemJson] = itemJsons
    const dsId = currentItemJson?.itemStateDetailContent?.useDataSource?.dataSourceId
    const accessible = isDataSourceAccessible(dsId)
    return accessible ? null : alertIcon
  }, [alertIcon])

  const handleClick = React.useCallback((actionData: TreeActionDataType, refComponent: _TreeItem) => {
    const { itemJsons: [currentItemJson] } = refComponent.props
    const layerConfig = currentItemJson.itemStateDetailContent
    if (layerConfig.id === activeId) {
      setActiveId(null)
      setShowLayerPanel(false)
      setPopperFocusNode(null)
    } else {
      setActiveId(layerConfig.id)
      setShowLayerPanel(true)
      builderAppSync.publishChangeWidgetStatePropToApp({ widgetId, propKey: 'activeTabId', value: layerConfig.id })
      builderAppSync.publishChangeWidgetStatePropToApp({ widgetId, propKey: 'settingChangeTab', value: true })
      if (sidePopperTrigger.current) {
        const index = layersConfig.findIndex(l => l.id === layerConfig.id)
        const node = sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index] as HTMLElement
        setPopperFocusNode(node)
      }
    }
  }, [activeId, layersConfig, widgetId])

  const handleChange = (layerConfig: ImmutableObject<LayersConfig>) => {
    const activeIndex = layersConfig.findIndex(l => l.id === activeId)
    onChange(Immutable.set(layersConfig, activeIndex, layerConfig), activeId)
  }

  const handleClose = () => {
    setActiveId(null)
    setShowLayerPanel(false)
  }

  return <SettingRow>
    <div className='w-100' ref={sidePopperTrigger}>
      <List
        className='py-1'
        itemsJson={itemsJson}
        dndEnabled={false}
        renderOverrideItemDetailToggle={renderDetail}
        onClickItemBody={handleClick}
        {...advancedActionMap}
      />
    </div>
    <SidePopper
      position='right'
      isOpen={showLayerPanel}
      toggle={handleClose}
      trigger={sidePopperTrigger.current}
      backToFocusNode={popperFocusNode}
    >
      <LayerConfig
        widgetId={widgetId}
        layerConfig={activeLayerConfig}
        isMapMode={true}
        layerDefinition={layerDefinition}
        layerEditingEnabled={layerEditingEnabled}
        isDsAutoRefresh={isDsAutoRefresh}
        isEditableDs={isEditableDs}
        onChange={handleChange}
        onClose={handleClose}
      />
    </SidePopper>
  </SettingRow>
}

export default TableMapListSetting
