/** @jsx jsx */
import { React, hooks, jsx, css, type ImmutableObject, type ImmutableArray, Immutable, DataSourceManager, type UseDataSource } from 'jimu-core'
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
import { LayerHonorModeType, type LayersConfig, type MapViewConfig } from '../../config'
import { constructConfig, getDataSourceById, isSupportedJimuLayerView, type SupportedDataSource } from '../../utils'
import TableMapListSetting from './table-map-list-setting'

interface EditorMapProps {
  widgetId: string
  jimuMapView: JimuMapView
  mapViewConfig: ImmutableObject<MapViewConfig>
  useDataSources: ImmutableArray<UseDataSource>
  onChange: (mapViewId: string, mapViewConfig: ImmutableObject<MapViewConfig>, useDs?: UseDataSource[]) => void
}

const getStyle = () => css`
  .map-title {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .map-loading {
    position: relative;
    height: 16px;
    width: 16px;
  }
`

const TableMapLayers = (props: EditorMapProps) => {
  const {
    widgetId, jimuMapView, mapViewConfig = Immutable({}) as ImmutableObject<MapViewConfig>,
    useDataSources: propUseDataSources = Immutable([]), onChange
  } = props
  const customizeLayers = mapViewConfig?.customizeLayers || false
  const customJimuLayerViewIds = mapViewConfig?.customJimuLayerViewIds || Immutable([])
  const layersConfig = mapViewConfig?.layersConfig || Immutable([]) as ImmutableArray<LayersConfig>

  const [isLayersAndDsLoaded, setIsLayersAndDsLoaded] = React.useState<boolean>(false)
  const [isPanelOpen, setIsPanelOpen] = React.useState<boolean>(false)
  const [allLayerViews, setAllLayerViews] = React.useState<JimuLayerView[]>([])
  const [allJimuTables, setAllJimuTables] = React.useState<__esri.Layer[]>([])
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
      // imagery layer with no field information
      const isImagery = layerView.type === 'imagery'
      const layerDs = layerView?.getLayerDataSource()
      const allFieldsSchema = layerDs?.getSchema()
      const isImageryWithoutField = isImagery && !allFieldsSchema?.fields
      if (!isImageryWithoutField) {
        layerViewIds.push(layerView.id)
      }
      const ancestorLayerViews = layerView.getAllAncestorJimuLayerViews()
      ancestorLayerViews.forEach(ancestorLayerView => {
        const isImagery = ancestorLayerView.type === 'imagery'
        const ancestorLayerDs = ancestorLayerView?.getLayerDataSource()
        const allFieldsSchema = ancestorLayerDs?.getSchema()
        const isImageryWithoutField = isImagery && !allFieldsSchema?.fields
        if (!isImageryWithoutField) {
          layerViewIds.push(ancestorLayerView.id)
        }
      })
    })
    allJimuTables.forEach(async table => {
      const layerDataSourceId = jimuMapView.getDataSourceIdByAPILayer(table)
      const tableDs = DataSourceManager.getInstance().getDataSource(layerDataSourceId)
      const mapDs = jimuMapView.getMapDataSource()
      let layerDs = tableDs
      if (!tableDs && mapDs) {
        try {
          layerDs = await mapDs.createDataSourceByLayer(table)
        } catch (error) {
          console.log(error)
        }
      }
      if (layerDs) layerViewIds.push(table.id)
    })
    return layerViewIds
  }, [allLayerViews, allJimuTables, jimuMapView])

  React.useEffect(() => {
    async function getJimuLayerViews () {
      await jimuMapView.whenJimuMapViewLoaded()
      const allJimuLayerViewsObj = await jimuMapView.whenAllJimuLayerViewLoaded()
      const jimuTables = jimuMapView.getJimuTables().filter(jimuTable => jimuTable.table?.visible)
      const layerViews: JimuLayerView[] = Object.values(allJimuLayerViewsObj)
      let allLayerViews = layerViews.filter(layerView => {
        return !layerView.fromRuntime && isSupportedJimuLayerView(layerView)
      })

      const promises = allLayerViews.map(layerView => layerView.createLayerDataSource())
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
      allLayerViews = allLayerViews.filter(jimuLayerView => !!jimuLayerView.getLayerDataSource())

      const allTables = jimuTables.map(item => item.table)
      setAllLayerViews(allLayerViews)
      setAllJimuTables(allTables)
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

  const getUseDs = (ds, customInit?: boolean) => {
    if (!ds) return null
    return {
      dataSourceId: ds.id,
      mainDataSourceId: ds.getMainDataSource().id,
      dataViewId: ds.dataViewId,
      rootDataSourceId: ds.getRootDataSource()?.id,
      ...(customInit ? { useFieldsInPopupInfo: true } : {})
    }
  }

  const onCustomizeToggle = React.useCallback(async (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    let updatedUseDataSources = propUseDataSources.asMutable({ deep: true })
    const allLayerViews = jimuMapView.getAllJimuLayerViews().filter(layerView => isSupportedJimuLayerView(layerView)).filter(layerView => layerView?.isLayerVisible())
    const allTables = jimuMapView.getJimuTables().filter(jimuTable => jimuTable.table?.visible)
    if (checked) {
      const allLayerViewIds = allLayerViews.map(layerView => layerView.id)
      const allTableIds = allTables.map(jimuTable => jimuTable.jimuTableId)
      const customJimuLayerViewIds = allLayerViewIds.concat(allTableIds)
      const newLayersConfig = [] as LayersConfig[]
      for (const layerView of allLayerViews) {
        const isFromRunTime = layerView?.fromRuntime
        if (isFromRunTime) continue
        let layerDs
        try {
          layerDs = (await layerView.getOrCreateLayerDataSource()) as SupportedDataSource
        } catch (error) {
          continue
        }
        if (!layerDs) continue
        const layerConfig = constructConfig(layerDs, true)
        // imagery layer with no field information
        const isImagery = layerView.type === 'imagery'
        const allFieldsSchema = layerDs?.getSchema()
        const isImageryWithoutField = isImagery && !allFieldsSchema?.fields
        if (isImageryWithoutField) continue
        newLayersConfig.push(layerConfig)
        const useDataSource = getUseDs(layerDs, true)
        updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'add', useDataSource)
      }
      for (const jimuTable of allTables) {
        const oriTable = jimuTable.table
        const layerDataSourceId = jimuMapView.getDataSourceIdByAPILayer(oriTable)
        const tableDs = DataSourceManager.getInstance().getDataSource(layerDataSourceId)
        const mapDs = jimuMapView.getMapDataSource()
        let layerDs = tableDs
        if (!tableDs && mapDs) {
          try {
            layerDs = await mapDs.createDataSourceByLayer(oriTable)
          } catch (error) {
            continue
          }
        }
        if (!layerDs) continue
        const layerConfig = constructConfig(layerDs, true)
        newLayersConfig.push(layerConfig)
        const useDataSource = getUseDs(layerDs, true)
        updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'add', useDataSource)
      }
      onChange(jimuMapView.id, mapViewConfig.set('customizeLayers', true).set('customJimuLayerViewIds', customJimuLayerViewIds).set('layersConfig', newLayersConfig), updatedUseDataSources)
    } else {
      for (const layerView of allLayerViews) {
        let layerDs
        try {
          layerDs = (await layerView.getOrCreateLayerDataSource()) as SupportedDataSource
        } catch (error) {
          continue
        }
        if (!layerDs) continue
        // imagery layer with no field information
        const isImagery = layerView.type === 'imagery'
        const allFieldsSchema = layerDs?.getSchema()
        const isImageryWithoutField = isImagery && !allFieldsSchema?.fields
        if (isImageryWithoutField) continue
        const useDataSource = getUseDs(layerDs, true)
        updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'remove', useDataSource)
      }
      for (const jimuTable of allTables) {
        const oriTable = jimuTable.table
        const layerDataSourceId = jimuMapView.getDataSourceIdByAPILayer(oriTable)
        const tableDs = DataSourceManager.getInstance().getDataSource(layerDataSourceId)
        const mapDs = jimuMapView.getMapDataSource()
        let layerDs = tableDs
        if (!tableDs && mapDs) {
          try {
            layerDs = await mapDs.createDataSourceByLayer(oriTable)
          } catch (error) {
            continue
          }
        }
        if (!layerDs) continue
        const useDataSource = getUseDs(layerDs, true)
        updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'remove', useDataSource)
      }
      if (updatedUseDataSources && updatedUseDataSources.length === 0) updatedUseDataSources = undefined
      onChange(jimuMapView.id, mapViewConfig.set('customizeLayers', false).set('customJimuLayerViewIds', []).set('displayRuntimeLayers', true).set('layersConfig', []), updatedUseDataSources)
    }
  }, [propUseDataSources, jimuMapView, mapViewConfig, onChange])

  const hideLayers = React.useCallback((jimuLayerView: JimuLayerView) => {
    return !allAvailableLayerViewIds.includes(jimuLayerView.id)
  }, [allAvailableLayerViewIds])

  const disableLayers = React.useCallback((jimuLayerView: JimuLayerView) => {
    return !allLayerViews.includes(jimuLayerView)
  }, [allLayerViews])

  const diffViewSelectorArray = (originalArray: string[], newArray: string[]) => {
    const add = []
    const remove = []
    originalArray.forEach(item => {
      if (!newArray.includes(item)) {
        remove.push(item)
      }
    })
    newArray.forEach(item => {
      if (!originalArray.includes(item)) {
        add.push(item)
      }
    })
    return { add, remove, diff: add.concat(remove) }
  }

  const onViewSelectorChange = React.useCallback(async (newSelectedViewIds: string[]) => {
    const jimuLayerViews = jimuMapView.jimuLayerViews
    const jimuTables = jimuMapView.jimuTables
    // update layersConfig
    const dsIds = newSelectedViewIds.map(layerViewId => {
      return jimuLayerViews?.[layerViewId]?.layerDataSourceId || jimuMapView.getDataSourceIdByAPILayer(jimuTables?.[layerViewId])
    })
    let newLayersConfig = layersConfig.filter(l => dsIds.includes(l.id))
    const addLayerViewIds = newSelectedViewIds.filter(layerViewId => {
      const dsId = jimuLayerViews?.[layerViewId]?.layerDataSourceId || jimuMapView.getDataSourceIdByAPILayer(jimuTables?.[layerViewId])
      return dsId && !layersConfig.find(l => l.id === dsId)
    })
    const addLayersConfig: LayersConfig[] = []
    for (const layerViewId of addLayerViewIds) {
      const layerView = jimuLayerViews?.[layerViewId]
      const tableView = jimuTables?.[layerViewId]
      let layerDs
      if (layerView) {
        try {
          layerDs = (await layerView.getOrCreateLayerDataSource()) as SupportedDataSource
        } catch (error) {
          console.log(error)
        }
      } else if (tableView) {
        const layerDataSourceId = jimuMapView.getDataSourceIdByAPILayer(tableView)
        const tableDs = DataSourceManager.getInstance().getDataSource(layerDataSourceId)
        const mapDs = jimuMapView.getMapDataSource()
        layerDs = tableDs
        if (!tableDs && mapDs) {
          try {
            layerDs = await mapDs.createDataSourceByLayer(tableView)
          } catch (error) {
            console.log(error)
          }
        }
      }
      if(layerDs) addLayersConfig.push(constructConfig(layerDs, true))
    }
    newLayersConfig = newLayersConfig.concat(addLayersConfig)
    // update useDataSources
    const originalViewIds = mapViewConfig?.customJimuLayerViewIds?.asMutable({ deep: true })
    const { add, remove, diff: diffIds } = diffViewSelectorArray(originalViewIds, newSelectedViewIds)
    let updatedUseDataSources = propUseDataSources.asMutable({ deep: true })
    for (const diffId of diffIds) {
      const jimuLayerView = jimuLayerViews[diffId]
      const jimuTable = jimuTables[diffId]
      let newDS
      if (jimuLayerView) {
        newDS = jimuLayerView.getLayerDataSource()
      } else if (jimuTable) {
        const layerDataSourceId = jimuMapView.getDataSourceIdByAPILayer(jimuTable)
        const tableDs = DataSourceManager.getInstance().getDataSource(layerDataSourceId)
        const mapDs = jimuMapView.getMapDataSource()
        newDS = tableDs
        if (!tableDs && mapDs) {
          newDS = await mapDs.createDataSourceByLayer(jimuTable)
        }
      }
      const useDataSource = getUseDs(newDS, true)
      if (add.includes(diffId)) {
        updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'add', useDataSource)
      } else if (remove.includes(diffId)) {
        updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'remove', useDataSource)
      }
    }
    onChange(jimuMapView.id, mapViewConfig.set('customJimuLayerViewIds', newSelectedViewIds).set('layersConfig', newLayersConfig), updatedUseDataSources)
  }, [jimuMapView, propUseDataSources, layersConfig, mapViewConfig, onChange]) // jimuMapView.id, jimuMapView.jimuLayerViews

  const handleLayersConfigChange = React.useCallback((newLayersConfig: ImmutableArray<LayersConfig>, activeId?: string) => {
    let updatedUseDataSources = propUseDataSources.asMutable({ deep: true })
    const updatedConfig = newLayersConfig.find(config => config.id === activeId)
    if (updatedConfig) {
      const updateIndex = updatedUseDataSources.findIndex(useDs => useDs.dataSourceId === updatedConfig.useDataSource?.dataSourceId)
      if (updatedConfig.layerHonorMode === LayerHonorModeType.Custom) {
        const usedFields = updatedConfig.tableFields.map(f => f.jimuName)
        updatedUseDataSources[updateIndex].fields = usedFields
        updatedUseDataSources[updateIndex].useFieldsInPopupInfo = false
      } else {
        updatedUseDataSources[updateIndex].fields = []
        updatedUseDataSources[updateIndex].useFieldsInPopupInfo = true
      }
    }
    updatedUseDataSources = getUpdatedUseDataSources(updatedUseDataSources, 'update')
    onChange(jimuMapView.id, mapViewConfig.set('layersConfig', newLayersConfig), updatedUseDataSources)
  }, [propUseDataSources, jimuMapView.id, mapViewConfig, onChange])

  return <React.Fragment>
    <SettingRow flow='no-wrap' css={getStyle}>
      {isWebScene ? <DataSceneOutlined size={16} /> : <DataMapOutlined size={16} />}
      <div className='map-title px-2' title={mapDataSourceLabel} aria-label={mapDataSourceLabel}>{mapDataSourceLabel}</div>
      {!isLayersAndDsLoaded &&
        <div className='map-loading'>
          <Loading type="DONUT" />
        </div>
      }
      {isLayersAndDsLoaded && allLayerViews.length === 0 && allJimuTables.length === 0 &&
        <Tooltip title={translate('noAvailableLayers')} showArrow={false} placement='top'>
          <span>
            <Button
              className='border-0'
              disabled={!isLayersAndDsLoaded}
              type='tertiary'
              icon={true}
              size='sm'
            >
              <WarningOutlined
                size={16}
                color={'var(--sys-color-warning-main)'}
              />
            </Button>
          </span>
        </Tooltip>
      }
      {isLayersAndDsLoaded && (allLayerViews.length > 0 || allJimuTables.length > 0) &&
        <React.Fragment>
          <Tooltip title={translate('selectLayers')} showArrow={false} placement='top'>
            <span>
              <Button
                ref={settingBtnRef}
                className='map-layers-setting-btn mr-1 p-0 border-0'
                disabled={!isLayersAndDsLoaded}
                type='tertiary'
                icon={true}
                size='sm'
                onClick={onSettingClick}
              >
                <SettingOutlined size={16} />
              </Button>
            </span>
          </Tooltip>
          {customizeLayers && layersConfig.length > 0 &&
            <Button
              className='layer-list-toggle-btn p-0 border-0'
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
      <TableMapListSetting
        widgetId={widgetId}
        layersConfig={layersConfig}
        onChange={handleLayersConfigChange}
      />
    }

    {isPanelOpen &&
      <SidePopper
        isOpen={true}
        toggle={closePanel}
        position='right'
        trigger={settingBtnRef.current}
        title={translate('selectLayers')}
      >
        <SettingRow tag='label' className='w-100 pl-4 pr-4' label={translate('customizeLayers')}>
          <Switch
            className='can-x-switch'
            checked={customizeLayers}
            data-key='customizeLayers'
            onChange={onCustomizeToggle}
            aria-label={translate('customizeLayers')}
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
                isShowTables={true}
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

export default TableMapLayers

function waitTime (ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const getUpdatedUseDataSources = (useDataSources: UseDataSource[], type: 'add' | 'update' | 'remove', useDataSource?: UseDataSource) => {
  let updatedUseDataSources = useDataSources || []
  if (type === 'remove') {
    updatedUseDataSources = updatedUseDataSources.filter(item => item.dataSourceId !== useDataSource.dataSourceId)
  } else if (type === 'add' && useDataSource && !updatedUseDataSources.find(item => item.dataSourceId === useDataSource.dataSourceId)) {
    updatedUseDataSources = updatedUseDataSources.concat([useDataSource])
  } else if (type === 'update') {
    updatedUseDataSources = useDataSources
  }
  const empty = type === 'remove' ? [] : undefined
  return updatedUseDataSources.length > 0 ? updatedUseDataSources : empty
}
