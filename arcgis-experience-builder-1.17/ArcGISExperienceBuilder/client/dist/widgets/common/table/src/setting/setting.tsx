/** @jsx jsx */
import { React, jsx, hooks, Immutable } from 'jimu-core'
import { defaultMessages as jimuUIMessages, Radio, Label, ConfirmDialog } from 'jimu-ui'
import { SettingSection } from 'jimu-ui/advanced/setting-components'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { type IMConfig, TableModeType } from '../config'
import defaultMessages from './translations/default'
import LayerModeSetting from './components/layer-mode-setting'
import MapModeSetting from './components/map-mode-setting'
import ArrangementStyle from './components/arrangement-style'
import EmptyPlaceholder from './components/empty-placeholder'
import MapModeTool from './components/map-mode-tool'
import LayerModeTool from './components/layer-mode-tool'

export interface JimuMapViews {
  [viewId: string]: JimuMapView
}

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { id: widgetId, config, useDataSources, useMapWidgetIds, onSettingChange } = props
  const { tableMode, layersConfig = Immutable([]), mapViewsConfig = Immutable({}) } = config
  const [changeModeConfirmOpen, setChangeModeConfirmOpen] = React.useState(false)
  const [mapEmpty, setMapEmpty] = React.useState(false)
  const [jimuMapViews, setJimuMapViews] = React.useState<JimuMapView[]>([])
  const toBeChangeMode = React.useRef<TableModeType>(null)

  const isExpressBuilder = window.isExpressBuilder
  const isMapMode = tableMode === TableModeType.Map
  const hasMap = useMapWidgetIds?.length > 0
  const hasConfig = (!isMapMode && layersConfig.length > 0) || (isMapMode && mapViewsConfig && Object.keys(mapViewsConfig).length > 0)

  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)

  const onPropertyChange = React.useCallback((name: string, value: any) => {
    if (value === config[name]) {
      return
    }
    const newConfig = config.set(name, value)
    const alterProps = {
      id: widgetId,
      config: newConfig
    }
    onSettingChange(alterProps)
  }, [config, onSettingChange, widgetId])

  const handleChangeModeOk = React.useCallback(() => {
    onSettingChange({
      id: widgetId,
      config: config.set('tableMode', toBeChangeMode.current).set('layersConfig', []).set('mapViewsConfig', {})
        .set('enableMapExtentFilter', toBeChangeMode.current === TableModeType.Map).set('defaultExtentFilterEnabled', false),
      useDataSources: toBeChangeMode.current === TableModeType.Map ? undefined : []
    })
    toBeChangeMode.current = null
    setChangeModeConfirmOpen(false)
  }, [config, onSettingChange, widgetId])

  const handleChangeModeClose = () => {
    setChangeModeConfirmOpen(false)
  }

  const onTableModeChange = React.useCallback((mode: TableModeType) => {
    if (tableMode === mode) return
    toBeChangeMode.current = mode
    if (hasConfig) {
      setChangeModeConfirmOpen(true)
    } else {
      handleChangeModeOk()
    }
  }, [tableMode, handleChangeModeOk, hasConfig])

  const onViewsCreate = React.useCallback((views: { [viewId: string]: JimuMapView }) => {
    setJimuMapViews([])
    const viewArr = Object.values(views)
    if (Object.keys(viewArr).length === 1 && !Object.values(viewArr)[0].dataSourceId) {
      setMapEmpty(true)
    } else {
      setMapEmpty(false)
    }
    const promises = Object.values(views).map(async (jimuMapView) => {
      await jimuMapView.whenJimuMapViewLoaded()
      await jimuMapView.whenAllJimuLayerViewLoaded()
    })
    Promise.allSettled(promises).then(() => {
      setJimuMapViews(viewArr)
    })
  }, [setMapEmpty])

  return (
    <div className='h-100'>
      <div className='jimu-widget-setting widget-setting-table h-100'>
        <SettingSection role='group' title={translate('mode')}>
          <div role='radiogroup' className='mb-4'>
            <Label className='d-flex align-items-center'>
              <Radio
                style={{ cursor: 'pointer' }}
                name='editModeType'
                className='mr-2'
                checked={!isMapMode}
                onChange={() => { onTableModeChange(TableModeType.Layer) }}
              />
              {translate('selectLayers')}
            </Label>
            <Label className='d-flex align-items-center'>
              <Radio
                style={{ cursor: 'pointer' }}
                name='editModeType'
                className='mr-2'
                checked={isMapMode}
                onChange={() => { onTableModeChange(TableModeType.Map) }}
              />
              {translate('interactWithMap')}
            </Label>
          </div>
          {!isMapMode &&
            <LayerModeSetting
              widgetId={widgetId}
              config={config}
              useDataSources={useDataSources}
              onSettingChange={onSettingChange}
            />
          }
          {isMapMode &&
            <MapModeSetting
              widgetId={widgetId}
              config={config}
              useMapWidgetIds={useMapWidgetIds}
              mapEmpty={mapEmpty}
              jimuMapViews={jimuMapViews}
              useDataSources={useDataSources}
              onSettingChange={onSettingChange}
            />
          }
        </SettingSection>
        {isMapMode && hasMap && !mapEmpty &&
          <MapModeTool config={config} onPropertyChange={onPropertyChange} />
        }
        {!isMapMode && hasConfig &&
          <LayerModeTool config={config} onPropertyChange={onPropertyChange} />
        }
        <ArrangementStyle config={config} onPropertyChange={onPropertyChange} />
        {!isMapMode && !hasConfig && !isExpressBuilder &&
          <EmptyPlaceholder isMapMode={false} />
        }
        {isMapMode && !hasMap && !isExpressBuilder &&
          <EmptyPlaceholder isMapMode={true} />
        }
        {isMapMode &&
          <JimuMapViewComponent
            useMapWidgetId={useMapWidgetIds?.[0]}
            onViewsCreate={onViewsCreate}
          />
        }
        {changeModeConfirmOpen &&
          <ConfirmDialog
            level='warning'
            title={translate('changeModeConfirmTitle')}
            hasNotShowAgainOption={false}
            content={translate('changeModeConfirmTips')}
            onConfirm={handleChangeModeOk}
            onClose={handleChangeModeClose}
          />
        }
      </div>
    </div>
  )
}

export default Setting
