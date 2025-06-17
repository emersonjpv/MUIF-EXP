import { Immutable, expressionUtils, dataSourceUtils, type Expression, type DuplicateContext, type extensionSpec, type IMAppConfig, type LinkParam, type IMExpression } from 'jimu-core'
import type { IMConfig } from '../config'
import { richTextUtils, utils } from 'jimu-ui'

const DefaultUseDataSource = Immutable([])

export default class AppConfigOperation implements extensionSpec.AppConfigOperationsExtension {
  id = 'text-app-config-operation'
  widgetId: string

  afterWidgetCopied(
    sourceWidgetId: string,
    sourceAppConfig: IMAppConfig,
    destWidgetId: string,
    destAppConfig: IMAppConfig,
    contentMap?: DuplicateContext
  ): IMAppConfig {
    if (!contentMap) {
      return destAppConfig
    }

    const useDataSources = sourceAppConfig.widgets[sourceWidgetId].useDataSources ?? DefaultUseDataSource
    const hasMapDs = !!useDataSources.find((useDataSource) => contentMap[useDataSource.mainDataSourceId])

    const widgetJson = sourceAppConfig.widgets[sourceWidgetId]
    const config: IMConfig = widgetJson?.config
    let text = config.text ?? ''
    text = hasMapDs ? mapExpressionForText(text, contentMap) : text
    text = mapLinks(text, contentMap, hasMapDs)
    let newAppConfig = destAppConfig.setIn(['widgets', destWidgetId, 'config', 'text'], text)
    let tooltip = config.tooltip
    tooltip = hasMapDs ? mapExpressionForTooltip(tooltip, contentMap) : tooltip
    if (tooltip) {
      newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'tooltip'], tooltip)
    }

    return newAppConfig
  }

  widgetWillRemove(appConfig: IMAppConfig): IMAppConfig {
    return appConfig
  }

  useDataSourceWillChange(appConfig: IMAppConfig, dataSourceId: string, newDataSourceId?: string): IMAppConfig {
    let newAppConfig = appConfig
    const widgetJson = appConfig.widgets[this.widgetId]
    const config: IMConfig = widgetJson.config
    if (dataSourceId || newDataSourceId) {
      const prevUseDataSourceIds = widgetJson.useDataSources?.map(ds => ds.dataSourceId).asMutable() ?? []
      let useDataSourceIds = prevUseDataSourceIds.filter(dsId => dsId !== dataSourceId)
      if (newDataSourceId) {
        useDataSourceIds = useDataSourceIds.concat(newDataSourceId)
      }
      const text = replaceDataSourcesForText(config.text, useDataSourceIds, prevUseDataSourceIds)
      if (text) {
        newAppConfig = newAppConfig.setIn(['widgets', this.widgetId, 'config', 'text'], text)
      }
      const tooltip = replaceDataSourcesForTooltip(config.tooltip, useDataSourceIds, prevUseDataSourceIds)
      if (tooltip) {
        newAppConfig = newAppConfig.setIn(['widgets', this.widgetId, 'config', 'tooltip'], tooltip)
      }
    }
    return newAppConfig
  }
}

const replaceDataSourcesForTooltip = (tooltip: IMExpression, useDataSourceIds: string[], prevUseDataSourceIds: string[]) => {
  if (!useDataSourceIds?.length || !tooltip) return
  const replacedDataSource = getExpressionUseDataSources(tooltip, useDataSourceIds, prevUseDataSourceIds)
  if (!replacedDataSource) return
  const expression = expressionUtils.replaceDataSourceId(tooltip, replacedDataSource[0], replacedDataSource[1])
  return expression
}

const replaceDataSourcesForText = (html: string, useDataSourceIds: string[], prevUseDataSourceIds: string[]) => {
  if (!useDataSourceIds?.length) return
  const expressions = richTextUtils.getAllExpressions(html)
  const replacedDataSources = getExpressionsUseDataSources(expressions, useDataSourceIds, prevUseDataSourceIds)
  if (!replacedDataSources) return
  html = replaceExpressionDataSources(html, replacedDataSources)
  html = replaceLinkExpressionDataSources(html, replacedDataSources)
  return html
}

const getExpressionUseDataSources = (expression, useDataSourceIds: string[], prevUseDataSourceIds: string[]): [string, string] => {
  const expressionUseDataSources = expressionUtils.getUseDataSourcesByExpressionParts(expression.parts) ?? Immutable([])
  const expressionUseDataSourceIds = expressionUseDataSources.map(ds => ds.dataSourceId).asMutable()
  const replacedDataSource = getReplacedDataSource(expressionUseDataSourceIds, useDataSourceIds, prevUseDataSourceIds)
  return replacedDataSource
}

export const getExpressionsUseDataSources = (expressions, useDataSourceIds: string[], prevUseDataSourceIds: string[]): { [uniqueid: string]: [string, string] } => {
  const replacedExpressionDataSource = {}
  Object.entries(expressions).forEach(([uniqueid, expression]) => {
    const replacedDataSource = getExpressionUseDataSources(expression, useDataSourceIds, prevUseDataSourceIds)
    if (uniqueid && replacedDataSource) {
      replacedExpressionDataSource[uniqueid] = replacedDataSource
    }
  })
  return Object.keys(replacedExpressionDataSource).length ? replacedExpressionDataSource : null
}

export const getReplacedDataSource = (expressionUseDataSourceIds: string[], useDataSourceIds: string[], prevUseDataSourceIds: string[]): [string, string] => {
  const replacedDataSourceIds = []
  expressionUseDataSourceIds?.some(expressionUseDataSourceId => {
    const isRemoved = !useDataSourceIds.includes(expressionUseDataSourceId)
    if (isRemoved) {
      const isSelectionView = dataSourceUtils.isSelectionView(expressionUseDataSourceId)
      const replaceDataSourceId = dataSourceUtils.getSortedDataViewIds(expressionUseDataSourceId).find(expressionDataSourceId => useDataSourceIds.includes(expressionDataSourceId))
      if (replaceDataSourceId) {
        if (isSelectionView) {
          const hasPrevSelectionView = prevUseDataSourceIds.find(dsId => dataSourceUtils.isSelectionView(dsId))
          if (hasPrevSelectionView) {
            replacedDataSourceIds.push(expressionUseDataSourceId, replaceDataSourceId)
          }
        } else {
          replacedDataSourceIds.push(expressionUseDataSourceId, replaceDataSourceId)
        }
      }
    }
    return !!replacedDataSourceIds.length
  })
  return replacedDataSourceIds.length ? replacedDataSourceIds as [string, string] : null
}


export const replaceExpressionDataSources = (html: string, replacedDataSources: { [uniqueid: string]: [string, string] }) => {
  return html.replace(richTextUtils.EXP_TAG_REGEXP, (exp) => {
    const uniqueid = richTextUtils.getUniqueId(exp)
    const replacedDataSource = replacedDataSources[uniqueid]
    if (!uniqueid || !replacedDataSource) return exp
    exp = mapHtmlDataDsId(exp, { [replacedDataSource[0]]: replacedDataSource[1] })
    return exp.replace(richTextUtils.DATA_EXPRESSION_REGEXP, (match, encoded) => {
      const info = richTextUtils.convertEncodeObject(encoded) as Expression
      const expression = expressionUtils.replaceDataSourceId(Immutable(info), replacedDataSource[0], replacedDataSource[1])
      const expressionStr = richTextUtils.convertEncodedString(expression)
      return `data-expression="${expressionStr}"`
    })
  })
}

export const replaceLinkExpressionDataSources = (html: string, replacedDataSources: { [uniqueid: string]: [string, string] }) => {
  return html.replace(richTextUtils.LINK_TAG_REGEXP, (link) => {
    const uniqueid = richTextUtils.getUniqueId(link)
    if (!uniqueid) return link
    const replacedDataSource = replacedDataSources[uniqueid]
    if (!uniqueid || !replacedDataSource) return link
    link = mapHtmlDataDsId(link, { [replacedDataSource[0]]: replacedDataSource[1] })
    return link.replace(richTextUtils.DATA_LINK_REGEXP, (match, encoded) => {
      const info = richTextUtils.convertEncodeObject(encoded) as LinkParam
      if (!info.expression) return match
      let linkParam = Immutable(info)
      const expression = expressionUtils.replaceDataSourceId(linkParam.expression, replacedDataSource[0], replacedDataSource[1])
      linkParam = linkParam.set('expression', expression)
      const linkStr = richTextUtils.convertEncodedString(linkParam)
      return `data-link="${linkStr}"`
    })
  })
}

export const mapLinks = (html: string, contentMap: DuplicateContext, hasMapDs: boolean) => {
  return html.replace(richTextUtils.LINK_TAG_REGEXP, (link) => {
    const uniqueid = richTextUtils.getUniqueId(link)
    if (!uniqueid) return link
    link = hasMapDs ? mapHtmlDataDsId(link, contentMap) : link
    return link.replace(richTextUtils.DATA_LINK_REGEXP, (match, encoded) => {
      const info = richTextUtils.convertEncodeObject(encoded) as LinkParam
      const { isChanged, linkParam } = utils.mapLinkParam(contentMap, Immutable(info))
      if (isChanged) {
        const linkStr = richTextUtils.convertEncodedString(linkParam)
        return `data-link="${linkStr}"`
      } else {
        return match
      }
    })
  })
}

export const mapExpressionForText = (html: string, contentMap: DuplicateContext) => {
  return html.replace(richTextUtils.EXP_TAG_REGEXP, (exp) => {
    const uniqueid = richTextUtils.getUniqueId(exp)
    if (!uniqueid) return exp
    exp = mapHtmlDataDsId(exp, contentMap)
    return exp.replace(richTextUtils.DATA_EXPRESSION_REGEXP, (match, encoded) => {
      const info = richTextUtils.convertEncodeObject(encoded) as Expression
      const { isChanged, expression } = expressionUtils.mapExpression(contentMap, Immutable(info))
      if (isChanged) {
        const expressionStr = richTextUtils.convertEncodedString(expression)
        return `data-expression="${expressionStr}"`
      } else {
        return match
      }
    })
  })
}

export const mapExpressionForTooltip = (tooltip: IMExpression, contentMap: DuplicateContext): IMExpression => {
  if(!tooltip) return tooltip
  const { isChanged, expression } = expressionUtils.mapExpression(contentMap, tooltip)
  return isChanged ? Immutable(expression) : tooltip
}


export function mapHtmlDataDsId(tag: string, dsIdMap: { [dsId: string]: string }) {
  return tag.replace(richTextUtils.DATA_DS_ID_REGEXP, (match, ret) => {
    if (!ret) return match
    const dsIds = ret.split(',')
    let dsStr = ''
    dsIds.forEach((dsId) => {
      const oldMainDsId = Object.keys(dsIdMap).find(k => dataSourceUtils.areDerivedFromSameMain(dsId, k))
      const newMainDsId = dsIdMap[oldMainDsId]
      const newDsId = (oldMainDsId && newMainDsId && newMainDsId !== oldMainDsId) ? dsId.replace(oldMainDsId, newMainDsId) : dsId
      dsStr += `${dsStr ? ',' : ''}${newDsId}`
    })
    return dsStr ? `data-dsid="${dsStr}"` : match
  })
}
