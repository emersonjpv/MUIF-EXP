import type { UseUtility } from 'jimu-core'
import type { SearchDataConfig, SearchSuggestionConfig } from 'jimu-ui/advanced/setting-components'
import type { ImmutableObject } from 'seamless-immutable'

export interface Config {
  routeConfig?: RouteConfig
  searchConfig?: SearchConfig
  showRuntimeLayers?: boolean
  unit?: UnitOption
}

export enum UnitOption {
  Imperial = 'imperial',
  Metric = 'metric'
}

export type IMConfig = ImmutableObject<Config>

export interface RouteConfig {
  useUtility?: UseUtility
}
export type IMRouteConfig = ImmutableObject<RouteConfig>

export interface SearchConfig {
  dataConfig?: SearchDataConfig[]
  generalConfig?: SearchGeneralConfig
  suggestionConfig?: SearchSuggestionConfig
}
export type IMSearchConfig = ImmutableObject<SearchConfig>

interface SearchGeneralConfig {
  hint: string
}
