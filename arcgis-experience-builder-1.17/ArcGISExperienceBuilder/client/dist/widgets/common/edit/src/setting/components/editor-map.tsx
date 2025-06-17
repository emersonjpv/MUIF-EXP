/** @jsx jsx */
import { React, hooks, jsx, css, type ImmutableObject, type ImmutableArray, Immutable, ServiceManager } from 'jimu-core'
import type { JimuMapView, JimuLayerView } from 'jimu-arcgis'
import { defaultMessages as jimuUIMessages, Button, Tooltip, Loading, Switch } from 'jimu-ui'
import { DataMapOutlined } from 'jimu-icons/outlined/gis/data-map'
import { DataSceneOutlined } from 'jimu-icons/outlined/gis/data-scene'
import { SettingOutlined } from 'jimu-icons/outlined/application/setting'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'
import { UpOutlined } from 'jimu-icons/outlined/directional/up'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { SettingRow, SidePopper, JimuLayerViewSelector } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../translations/default'
import type { LayersConfig, MapViewConfig } from '../../config'
import { constructConfig, getDataSourceById, getDsPrivileges, type SupportedDataSource } from '../../utils'
import EditorLayer from './editor-layer'
import { isSupportedJimuLayerView } from './utils'

interface EditorMapProps {
  jimuMapView: JimuMapView
  mapViewConfig: ImmutableObject<MapViewConfig>
  onChange: (mapViewId: string, mapViewConfig: ImmutableObject<MapViewConfig>) => void
}

const getStyle = () => css`
  .map-title {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .map-loading {
    flex-shrink: 0;
    position: relative;
    height: 16px;
    width: 16px;
  }
  .map-icon {
    flex-shrink: 0;
  }
`

const EditorMap = (props: EditorMapProps) => {
  const { jimuMapView, mapViewConfig = Immutable({}) as ImmutableObject<MapViewConfig>, onChange } = props
  const customizeLayers = mapViewConfig?.customizeLayers || false
  const customJimuLayerViewIds = mapViewConfig?.customJimuLayerViewIds || Immutable([])
  const layersConfig = mapViewConfig?.layersConfig || Immutable([]) as ImmutableArray<LayersConfig>

  const [isLayersAndDsLoaded, setIsLayersAndDsLoaded] = React.useState<boolean>(false)
  const [isPanelOpen, setIsPanelOpen] = React.useState<boolean>(false)
  const [allLayerViews, setAllLayerViews] = React.useState<JimuLayerView[]>([])
  const [isLayerListVisible, setIsLayerListVisible] = React.useState<boolean>(false)

  const settingBtnRef = React.useRef<HTMLButtonElement>(null)

  const translate = hooks.useTranslation(jimuUIMessages, defaultMessages)

  const isWebScene = jimuMapView.view.type === '3d'
  const mapDataSource = React.useMemo(() => getDataSourceById(jimuMapView.dataSourceId), [jimuMapView.dataSourceId])
  const mapDataSourceLabel = React.useMemo(() => mapDataSource?.getLabel?.() || '', [mapDataSource])
  const selectedLayerViewIds = customJimuLayerViewIds.asMutable({ deep: true })

  // all JimuLayerViews that can show in JimuLayerViewSelector, include FeatureJimuLayerView/SceneJimuLayerView and their ancestor JimuLayerViews
  const allAvailableLayerViewIds = React.useMemo(() => {
    const layerViewIds: string[] = []
    allLayerViews.forEach(layerView => {
      layerViewIds.push(layerView.id)
      const ancestorLayerViews = layerView.getAllAncestorJimuLayerViews()
      ancestorLayerViews.forEach(ancestorLayerView => {
        layerViewIds.push(ancestorLayerView.id)
      })
    })
    return layerViewIds
  }, [allLayerViews])

  React.useEffect(() => {
    async function getJimuLayerViews () {
      const layerViews = await jimuMapView.whenAllJimuLayerViewLoaded()
      let allLayerViews = Object.values(layerViews).filter(layerView => {
        return !layerView.fromRuntime && isSupportedJimuLayerView(layerView)
      })

      const serviceManager = ServiceManager.getInstance()
      const promises = allLayerViews.map(async (layerView) => {
        await layerView.createLayerDataSource()
        await serviceManager.fetchArcGISServerInfo(layerView.layer.url)
      })
      try {
        await Promise.all(promises)
      } catch (e) {
        // some SceneLayer can't create data source, it is as expected, just log it
        console.log(e)
      }
      // https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/17175
      if (!jimuMapView.isActive) {
        await waitTime(500)
      }

      allLayerViews = allLayerViews.filter(layerView => {
        const layerDs = layerView.getLayerDataSource() as SupportedDataSource
        const layerDefinition = layerDs?.getLayerDefinition?.()
        const {create, update, deletable} = getDsPrivileges(layerDefinition)
        const serverInfo = serviceManager.getServerInfoByServiceUrl(layerView.layer.url)
        const isHosted = !serverInfo || serverInfo.owningSystemUrl
        return !(!isHosted && !create && !update && !deletable)
      })
      
      setAllLayerViews(allLayerViews)
      setIsLayersAndDsLoaded(true)
    }
    getJimuLayerViews()
  }, [jimuMapView])

  const onSettingClick = React.useCallback(() => {
    setIsPanelOpen(true)
  }, [])

  const onToggleLayerListClick = React.useCallback(() => {
    setIsLayerListVisible(visible => !visible)
  }, [])

  const closePanel = React.useCallback(() => {
    setIsPanelOpen(false)
  }, [])

  const onCustomizeToggle = React.useCallback(async (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      const customJimuLayerViewIds = allLayerViews.map(layerView => layerView.id)
      const layersConfig = [] as LayersConfig[]
      for (const layerView of allLayerViews) {
        const layerDs = (await layerView.getOrCreateLayerDataSource()) as SupportedDataSource
        const layerConfig = constructConfig(layerDs, layerView.layer)
        layersConfig.push(layerConfig)
      }
      onChange(jimuMapView.id, mapViewConfig.set('customizeLayers', true).set('customJimuLayerViewIds', customJimuLayerViewIds).set('layersConfig', layersConfig))
    } else {
      onChange(jimuMapView.id, mapViewConfig.set('customizeLayers', false).set('customJimuLayerViewIds', []).set('layersConfig', []))
    }
  }, [allLayerViews, jimuMapView.id, mapViewConfig, onChange])

  const hideLayers = React.useCallback((jimuLayerView: JimuLayerView) => {
    return !allAvailableLayerViewIds.includes(jimuLayerView.id)
  }, [allAvailableLayerViewIds])

  const disableLayers = React.useCallback((jimuLayerView: JimuLayerView) => {
    return !allLayerViews.includes(jimuLayerView)
  }, [allLayerViews])

  const onViewSelectorChange = React.useCallback(async (layerViewIds: string[]) => {
    const dsIds = layerViewIds.map(layerViewId => jimuMapView.jimuLayerViews?.[layerViewId]?.layerDataSourceId)
    let newLayersConfig = layersConfig.filter(l => dsIds.includes(l.id))
    const addLayerViewIds = layerViewIds.filter(layerViewId => {
      const dsId = jimuMapView.jimuLayerViews?.[layerViewId]?.layerDataSourceId
      return dsId && !layersConfig.find(l => l.id === dsId)
    })
    const addLayersConfig: LayersConfig[] = []
    for (const layerViewId of addLayerViewIds) {
      const layerView = jimuMapView.jimuLayerViews?.[layerViewId]
      const layerDs = (await layerView.getOrCreateLayerDataSource()) as SupportedDataSource
      addLayersConfig.push(constructConfig(layerDs, layerView.layer))
    }
    newLayersConfig = newLayersConfig.concat(addLayersConfig)
    onChange(jimuMapView.id, mapViewConfig.set('customJimuLayerViewIds', layerViewIds).set('layersConfig', newLayersConfig))
  }, [jimuMapView.id, jimuMapView.jimuLayerViews, layersConfig, mapViewConfig, onChange])

  const handleLayersConfigChange = React.useCallback((layersConfig: ImmutableArray<LayersConfig>) => {
    onChange(jimuMapView.id, mapViewConfig.set('layersConfig', layersConfig))
  }, [jimuMapView.id, mapViewConfig, onChange])

  return <React.Fragment>
    <SettingRow flow='no-wrap' css={getStyle}>
      {isWebScene ? <DataSceneOutlined className='map-icon' size={16} /> : <DataMapOutlined className='map-icon' size={16} />}
      <div className='map-title px-2' title={mapDataSourceLabel} aria-label={mapDataSourceLabel}>{mapDataSourceLabel}</div>
      {!isLayersAndDsLoaded &&
        <div className='map-loading'>
          <Loading type="DONUT" width={16} height={16} />
        </div>
      }
      {isLayersAndDsLoaded && allLayerViews.length === 0 &&
        <Tooltip title={translate('noAvailableLayers')} showArrow={false} placement='top'>
          <Button
            className='map-icon border-0'
            disableHoverEffect
            disableRipple
            type='tertiary'
            icon={true}
            size='sm'
          >
            <WarningOutlined size={16} color='var(--sys-color-warning-main)' />
          </Button>
        </Tooltip>
      }
      {isLayersAndDsLoaded && allLayerViews.length > 0 &&
        <React.Fragment>
          <Tooltip title={translate('selectLayers')} showArrow={false} placement='top'>
            <Button
              ref={settingBtnRef}
              className='map-icon mr-1 p-0 border-0'
              disabled={!isLayersAndDsLoaded}
              type='tertiary'
              icon={true}
              size='sm'
              onClick={onSettingClick}
            >
              <SettingOutlined size={16} />
            </Button>
          </Tooltip>
          {customizeLayers && layersConfig.length > 0 &&
            <Button
              className='map-icon p-0 border-0'
              type='tertiary'
              icon={true}
              size='sm'
              onClick={onToggleLayerListClick}
            >
              {isLayerListVisible ? <UpOutlined size={16} /> : <DownOutlined size={16} />}
            </Button>
          }
        </React.Fragment>
      }
    </SettingRow>

    {isLayerListVisible && layersConfig.length > 0 &&
      <EditorLayer layersConfig={layersConfig} onChange={handleLayersConfigChange} />
    }

    {isPanelOpen &&
      <SidePopper
        isOpen={true}
        toggle={closePanel}
        position='right'
        trigger={settingBtnRef.current}
        title={translate('selectLayers')}
      >
        <SettingRow className='w-100 pl-4 pr-4' tag='label' label={translate('customizeLayers')}>
          <Switch
            className='can-x-switch'
            checked={customizeLayers}
            data-key='customizeLayers'
            onChange={onCustomizeToggle}
          />
        </SettingRow>
        {customizeLayers &&
          <React.Fragment>
            <SettingRow
              className='w-100 pl-4 pr-4'
              label={mapDataSourceLabel}
              aria-label={mapDataSourceLabel}
            />
            {/* Need to use a div to wrapper JimuLayerViewSelector to fix the scrollbar issue. */}
            <div className='select-jimu-layer-view-selector-container p-4'>
              <JimuLayerViewSelector
                jimuMapViewId={jimuMapView.id}
                isMultiSelection={true}
                selectedValues={selectedLayerViewIds}
                hideLayers={hideLayers}
                disableLayers={disableLayers}
                onChange={onViewSelectorChange}
              />
            </div>
          </React.Fragment>
        }
      </SidePopper>
    }
  </React.Fragment>
}

export default EditorMap

function waitTime (ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
