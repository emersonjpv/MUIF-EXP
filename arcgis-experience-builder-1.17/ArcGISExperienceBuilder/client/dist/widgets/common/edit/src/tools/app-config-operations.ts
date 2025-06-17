import { Immutable, type DuplicateContext, type extensionSpec, type IMAppConfig } from 'jimu-core'
import type { IMConfig } from '../config'
import { mapViewUtils } from 'jimu-arcgis'

export default class AppConfigOperation implements extensionSpec.AppConfigOperationsExtension {
  id = 'edit-app-config-operation'
  widgetId: string

  afterWidgetCopied (
    sourceWidgetId: string,
    sourceAppConfig: IMAppConfig,
    destWidgetId: string,
    destAppConfig: IMAppConfig,
    contentMap?: DuplicateContext
  ): IMAppConfig {
    if (!contentMap) { // no need to change widget linkage if it is not performed during a page copying
      return destAppConfig
    }

    let newAppConfig = destAppConfig
    const widgetJson = sourceAppConfig.widgets[sourceWidgetId]
    const config: IMConfig = widgetJson?.config

    if (config.mapViewsConfig) {
      let newMapViewsConfig = Immutable({})
      for (const [jimuMapViewId, mapViewConfig] of Object.entries(config.mapViewsConfig)) {
        const customJimuLayerViewIds = mapViewConfig.customJimuLayerViewIds || Immutable([])
        const newCustomJimuLayerViewIds= customJimuLayerViewIds.map(jimuLayerViewId => mapViewUtils.getCopiedJimuLayerViewId(contentMap, jimuLayerViewId))
        const newMapViewConfig = mapViewConfig.set('customJimuLayerViewIds', newCustomJimuLayerViewIds)
        const newJimuMapViewId = mapViewUtils.getCopiedJimuMapViewId(contentMap, jimuMapViewId)
        newMapViewsConfig = newMapViewsConfig.set(newJimuMapViewId, newMapViewConfig)
      }
      newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'mapViewsConfig'], newMapViewsConfig)
    }
    
    return newAppConfig
  }
}
