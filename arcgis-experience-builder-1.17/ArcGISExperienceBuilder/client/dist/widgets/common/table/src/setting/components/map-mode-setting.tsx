/** @jsx jsx */
import { React, jsx, type ImmutableArray,  type ImmutableObject, hooks, type UseDataSource } from 'jimu-core'
import { Alert, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { MapWidgetSelector, SettingRow } from 'jimu-ui/advanced/setting-components'
import type { SettingChangeFunction } from 'jimu-for-builder'
import type { JimuMapView } from 'jimu-arcgis'
import type { IMConfig, MapViewConfig } from '../../config'
import TableMapLayers from './table-map-layers'

interface MapModeSettingProps {
  widgetId: string
  config: IMConfig
  useMapWidgetIds: ImmutableArray<string>
  mapEmpty: boolean
  jimuMapViews: JimuMapView[]
  useDataSources: ImmutableArray<UseDataSource>
  onSettingChange: SettingChangeFunction
}

const MapModeSetting = (props: MapModeSettingProps) => {
  const { widgetId, config, useMapWidgetIds, mapEmpty, jimuMapViews, useDataSources, onSettingChange } = props
  const { mapViewsConfig } = config
  const hasMap = useMapWidgetIds?.length > 0
  const translate = hooks.useTranslation(jimuUIMessages)

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    const newConfig = config.set('mapViewsConfig', {})
    onSettingChange({
      id: widgetId,
      config: newConfig,
      useMapWidgetIds
    })
  }

  const handleMapViewConfigChange = React.useCallback((mapViewId: string, mapViewConfig: ImmutableObject<MapViewConfig>, useDs?: UseDataSource[]) => {
    onSettingChange({
      id: widgetId,
      config: config.setIn(['mapViewsConfig', mapViewId], mapViewConfig),
      useDataSources: useDs
    })
  }, [config, onSettingChange, widgetId])

  return <React.Fragment>
    <SettingRow>
      <MapWidgetSelector
        useMapWidgetIds={useMapWidgetIds}
        onSelect={onMapWidgetSelected}
      />
    </SettingRow>
    {hasMap && !mapEmpty &&
      jimuMapViews.map((jimuMapView) => {
        return <TableMapLayers
          widgetId={widgetId}
          key={jimuMapView.id}
          jimuMapView={jimuMapView}
          mapViewConfig={mapViewsConfig?.[jimuMapView.id]}
          useDataSources={useDataSources}
          onChange={handleMapViewConfigChange}
        />
      })
    }
    {hasMap && mapEmpty &&
      <SettingRow>
        <Alert tabIndex={0} type='warning' className='warningMsg' open text={translate('noWebMapWebSceneTip')} />
      </SettingRow>
    }
  </React.Fragment>
}

export default MapModeSetting
