import { dataSourceUtils, Immutable, type DuplicateContext, type extensionSpec, type IMAppConfig } from 'jimu-core'
import type { IMConfig } from '../config'
import { mapViewUtils } from 'jimu-arcgis'

const DefaultUseDataSource = Immutable([])

export default class AppConfigOperation implements extensionSpec.AppConfigOperationsExtension {
  id = 'table-app-config-operation'
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
    const useDataSources = widgetJson.useDataSources ?? DefaultUseDataSource
    const config: IMConfig = widgetJson?.config

    if (config.mapViewsConfig) {
      let newMapViewsConfig = Immutable({})
      for (const [jimuMapViewId, mapViewConfig] of Object.entries(config.mapViewsConfig)) {
        const customJimuLayerViewIds = mapViewConfig.customJimuLayerViewIds || Immutable([])
        const newCustomJimuLayerViewIds = customJimuLayerViewIds.map(jimuLayerViewId => mapViewUtils.getCopiedJimuLayerViewId(contentMap, jimuLayerViewId))
        const newMapViewConfig = mapViewConfig.set('customJimuLayerViewIds', newCustomJimuLayerViewIds)
        const newJimuMapViewId = mapViewUtils.getCopiedJimuMapViewId(contentMap, jimuMapViewId)
        newMapViewsConfig = newMapViewsConfig.set(newJimuMapViewId, newMapViewConfig)
      }
      newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'mapViewsConfig'], newMapViewsConfig)
    }

    const needToMapDs = useDataSources.filter((useDataSource) => !!contentMap[useDataSource.mainDataSourceId])
    if (!needToMapDs || needToMapDs?.length === 0) {
      return newAppConfig
    }
    const newWidgetJson = newAppConfig.widgets[sourceWidgetId]
    // update output ds info: useDss
    const originalUseDss = newWidgetJson?.useDataSources
    const newUseDssInfo = dataSourceUtils.mapUseDataSources(contentMap, originalUseDss)
    if (newUseDssInfo.isChanged) {
      newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'useDataSources'], newUseDssInfo.useDataSources)
    }
    // update output ds info: layersConfig
    const originalConfig = newWidgetJson?.config?.layersConfig
    originalConfig?.forEach((config, index) => {
      const originalConfigUseDs = config?.useDataSource
      const newConfigUseDssInfo = dataSourceUtils.mapUseDataSources(contentMap, Immutable([originalConfigUseDs]))
      if (newConfigUseDssInfo.isChanged) {
        const newUswDs = newConfigUseDssInfo.useDataSources?.[0] || originalConfigUseDs
        const originalConfigId = config.id
        const newConfigId = originalConfigId.replace(originalConfigUseDs.dataSourceId, newUswDs.dataSourceId)
        newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'layersConfig', index, 'useDataSource'], newUswDs)
        newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'layersConfig', index, 'id'], newConfigId)
      }
    })

    return newAppConfig
  }
}
