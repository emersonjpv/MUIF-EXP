import { dataSourceUtils, type DuplicateContext, expressionUtils, type extensionSpec, type IMAppConfig } from 'jimu-core'
import type { IMConfig } from '../config'
import { utils } from 'jimu-ui'

export default class AppConfigOperation implements extensionSpec.AppConfigOperationsExtension {
  id = 'button-app-config-operation'
  widgetId: string

  /**
   * Cleanup the widget config when the useDataSource will be removed
   * @returns The updated appConfig
   */
  useDataSourceWillChange (appConfig: IMAppConfig, oldDataSourceId: string, newDataSourceId: string): IMAppConfig {
    const widgetJson = appConfig.widgets[this.widgetId]
    const config: IMConfig = widgetJson.config
    const functionConfig = config.functionConfig

    if (!functionConfig || !oldDataSourceId || !newDataSourceId) {
      return appConfig
    }

    let newFunctionConfig: IMConfig['functionConfig']
    // If the new data source is derived from the same main data source with the old data source, replace the data source id in the expressions.
    if (dataSourceUtils.areDerivedFromSameMain(oldDataSourceId, newDataSourceId)) {
      newFunctionConfig = functionConfig
        .set('textExpression', expressionUtils.replaceDataSourceId(functionConfig.textExpression, oldDataSourceId, newDataSourceId))
        .set('toolTipExpression', expressionUtils.replaceDataSourceId(functionConfig.toolTipExpression, oldDataSourceId, newDataSourceId))
        .setIn(['linkParam', 'expression'], expressionUtils.replaceDataSourceId(functionConfig.linkParam?.expression, oldDataSourceId, newDataSourceId))
    } else { // If the new data source is not derived from the same main data source with the old data source, remove the expressions that use the old data source.
      const useDataSourceToRemove = widgetJson.useDataSources.find(useDs => useDs.dataSourceId === oldDataSourceId)
      if (useDataSourceToRemove) {
        newFunctionConfig = functionConfig.without('textExpression').without('toolTipExpression').set('linkParam', functionConfig.linkParam?.without('expression'))
      }
    }

    if (newFunctionConfig) {
      const newAppConfig = appConfig.setIn(['widgets', this.widgetId, 'config', 'functionConfig'], newFunctionConfig)
      return newAppConfig
    } else {
      return appConfig
    }
  }
  /**
   * Update the button linkParam value when widget is copied
   * @returns The updated appConfig
   */
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
    const originlinkParam = config.functionConfig.linkParam
    const { linkParam, isChanged } =  utils.mapLinkParam(contentMap, originlinkParam)
    if (isChanged) {
      newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'functionConfig', 'linkParam'], linkParam)
    }

    const textExpression = config.functionConfig.textExpression
    const checkTextExpressionResult = expressionUtils.mapExpression(contentMap, textExpression)
    newAppConfig = checkTextExpressionResult.isChanged ? newAppConfig.setIn(['widgets', destWidgetId, 'config', 'functionConfig', 'textExpression'], checkTextExpressionResult.expression) : newAppConfig

    const toolTipExpression = config.functionConfig.toolTipExpression
    const checkToolTipExpressionResult = expressionUtils.mapExpression(contentMap, toolTipExpression)
    newAppConfig = checkToolTipExpressionResult.isChanged ? newAppConfig.setIn(['widgets', destWidgetId, 'config', 'functionConfig', 'toolTipExpression'], checkToolTipExpressionResult.expression) : newAppConfig

    return newAppConfig
  }

}
