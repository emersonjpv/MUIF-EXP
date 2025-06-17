import { type React, getAppStore, type WidgetProps, WidgetManager } from 'jimu-core'
import { getItemLength } from './avatar-card'
import type { IMAvatarCardConfig } from '../../config'

/**
 * Get AvatarCard element length by AvatarCard props and space
 * @param props The props of AvatarCard
 * @param space Spacing between each AvatarCard element
 */
export const getListItemLength = (props: IMAvatarCardConfig, space: number) => {
  const showLabel = props?.showLabel
  const labelGrowth = props?.labelGrowth
  const size = props?.avatar.size
  const shape = props?.avatar.shape

  const baseLength = getItemLength(size, showLabel, shape)
  return baseLength + space + labelGrowth
}

export const loadWidgetClass = (widgetId: string): Promise<React.ComponentType<WidgetProps>> => {
  if (!widgetId) return
  const isClassLoaded = getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.isClassLoaded
  if (!isClassLoaded) {
    return WidgetManager.getInstance().loadWidgetClass(widgetId)
  } else {
    return Promise.resolve(WidgetManager.getInstance().getWidgetClass(widgetId))
  }
}
