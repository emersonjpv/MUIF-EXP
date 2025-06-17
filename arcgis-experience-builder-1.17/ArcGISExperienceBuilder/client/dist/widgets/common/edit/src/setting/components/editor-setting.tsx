/** @jsx jsx */
import { type ImmutableObject, React, hooks, jsx, type ImmutableArray } from 'jimu-core'
import { Alert, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { SettingRow, MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import type { SettingChangeFunction } from 'jimu-for-builder'
import type { JimuMapView } from 'jimu-arcgis'
import type { MapViewConfig, IMConfig } from '../../config'
import EditorMap from './editor-map'

interface EditorSettingProps {
  widgetId: string
  config: IMConfig
  useMapWidgetIds: ImmutableArray<string>
  mapEmpty: boolean
  jimuMapViews: JimuMapView[]
  onSettingChange: SettingChangeFunction
}

const EditorSetting = (props: EditorSettingProps) => {
  const { widgetId, config, useMapWidgetIds, mapEmpty, jimuMapViews, onSettingChange } = props
  const { mapViewsConfig } = config
  const hasMap = useMapWidgetIds?.length > 0

  const translate = hooks.useTranslation(jimuUIMessages)

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    const newConfig = config.set('mapViewsConfig', {}).set('defaultSnapLayers', [])
    onSettingChange({
      id: widgetId,
      config: newConfig,
      useMapWidgetIds
    })
  }

  const handleMapViewConfigChange = React.useCallback((mapViewId: string, mapViewConfig: ImmutableObject<MapViewConfig>) => {
    onSettingChange({
      id: widgetId,
      config: config.setIn(['mapViewsConfig', mapViewId], mapViewConfig)
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
        return <EditorMap
          key={jimuMapView.id}
          jimuMapView={jimuMapView}
          mapViewConfig={mapViewsConfig?.[jimuMapView.id]}
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

export default EditorSetting
