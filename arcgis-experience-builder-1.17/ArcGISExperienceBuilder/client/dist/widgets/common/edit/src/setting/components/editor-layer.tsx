/** @jsx jsx */
import { React, jsx, type ImmutableObject, type ImmutableArray, Immutable } from 'jimu-core'
import { type _TreeItem, List, type TreeActionDataType } from 'jimu-ui/basic/list-tree'
import { SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import type { JimuFeatureLayerView, JimuSceneLayerView } from 'jimu-arcgis'
import type { LayersConfig } from '../../config'
import LayerConfig from './layer-config'
import { getDataSourceById, getEditDataSource } from '../../utils'

interface EditorLayerProps {
  layersConfig: ImmutableArray<LayersConfig>
  onChange: (layersConfig: ImmutableArray<LayersConfig>) => void
}

export type SelectableJimuLayerView = JimuFeatureLayerView | JimuSceneLayerView

const EditorLayer = (props: EditorLayerProps) => {
  const { layersConfig, onChange } = props

  const [activeId, setActiveId] = React.useState<string>('')
  const [showLayerPanel, setShowLayerPanel] = React.useState<boolean>(false)
  const [popperFocusNode, setPopperFocusNode] = React.useState<HTMLElement>(null)

  const sidePopperTrigger = React.useRef<HTMLDivElement>(null)

  const activeLayerConfig = React.useMemo(() => {
    const layerConfig = layersConfig.find(l => l.id === activeId)
    return Immutable(layerConfig)
  }, [activeId, layersConfig])

  const dataSource = React.useMemo(() => {
    const ds = getDataSourceById(activeId)
    return getEditDataSource(ds)
  }, [activeId])
  const layerDefinition = dataSource?.getLayerDefinition()
  const layerEditingEnabled = dataSource?.layer?.editingEnabled

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
      if (sidePopperTrigger.current) {
        const index = layersConfig.findIndex(l => l.id === layerConfig.id)
        const node = sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index] as HTMLElement
        setPopperFocusNode(node)
      }
    }
  }, [activeId, layersConfig])

  const handleChange = (layerConfig: ImmutableObject<LayersConfig>) => {
    const activeIndex = layersConfig.findIndex(l => l.id === activeId)
    onChange(Immutable.set(layersConfig, activeIndex, layerConfig))
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
        renderOverrideItemDetailToggle={() => ''}
        onClickItemBody={handleClick}
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
        layerConfig={activeLayerConfig}
        isGeoMode={true}
        layerDefinition={layerDefinition}
        layerEditingEnabled={layerEditingEnabled}
        isFromMap={true}
        onChange={handleChange}
        onClose={handleClose}
      />
    </SidePopper>
  </SettingRow>
}

export default EditorLayer
