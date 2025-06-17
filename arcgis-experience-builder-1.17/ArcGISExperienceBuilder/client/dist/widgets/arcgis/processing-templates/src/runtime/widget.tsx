import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { Loading, LoadingType } from 'jimu-ui'

import type { IMConfig } from '../config'
import { getInCustomizedLayerViewIds } from '../utils'

import Placeholder from './components/placeholder'
import Tips from './components/tips'
import Header from './components/header'
import './components/imagery-components'

import { ActionType } from './constants'
import { useWidgetState } from './hooks/useWidgetState'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const {
    id: widgetId,
    useMapWidgetIds,
    config,
    enableDataAction,
    portalUrl,
    portalSelf
  } = props

  const {
    state: {
      jimuMapView,
      layerList,
      layerId,
      actionDataSets,
      portal,
      status
    },
    onAction
  } = useWidgetState({})

  React.useEffect(() => {
    onAction({
      type: ActionType.SET_PORTAL,
      payload: { portalUrl, portalSelf }
    })
  }, [])

  const customizedLayerViewIds =
    getInCustomizedLayerViewIds(jimuMapView?.id, config.customizeLayersOptions)
  React.useEffect(() => {
    if (customizedLayerViewIds) {
      onAction({
        type: ActionType.SET_LAYER_LIST,
        payload: { jimuMapView, config }
      })
    }
  }, [customizedLayerViewIds])

  const setProcessingTemplateNode = React.useCallback((node) => {
    if (node) {
      const currentLayer = layerList.find(({ id }) => id === layerId)
      node.layer = currentLayer
      node.portal = portal
      node.panelHeading = ''
      node.hideButtons = true
    }
  }, [layerId, portal])

  const onActiveViewChange = (updatedJimuMapView: JimuMapView) => {
    if (updatedJimuMapView) {
      onAction({
        type: ActionType.SET_JIMU_MAP_VIEW,
        payload: { jimuMapView: updatedJimuMapView, config }
      })
    }
  }

  const handleLayerChange = (event) => {
    const updatedLayerId = event.target.value
    onAction({
      type: ActionType.SET_LAYER_ID,
      payload: { layerId: updatedLayerId }
    })
  }

  const hasMapWidgetSelected = useMapWidgetIds?.length > 0
  const hasLoaded = status !== 'pending' && portal?.loaded
  const hasLayers = layerList?.length > 0

  return (
    <div id={widgetId} className='h-100 surface-1 border-0'>
      <JimuMapViewComponent
        useMapWidgetId={useMapWidgetIds?.[0]}
        onActiveViewChange={onActiveViewChange}
      />
      {!hasMapWidgetSelected
        ? (
            <Placeholder widgetId={widgetId} show={true} />
          )
        : !hasLoaded
            ? (
                <Loading type={LoadingType.Secondary} />
              )
            : !hasLayers
                ? (
                    <Tips show={true} />
                  )
                : (
                    <div className='py-3 mx-4 d-flex flex-column h-100 overflow-hidden'>
                      <Header
                        widgetId={widgetId}
                        layerId={layerId}
                        layerList={layerList}
                        enableDataAction={enableDataAction}
                        actionDataSets={actionDataSets}
                        handleLayerChange={handleLayerChange}
                      />
                      <div className='flex-grow-1 overflow-y-auto h-100'>
                          <arcgis-imagery-processing-template ref={setProcessingTemplateNode} />
                      </div>
                    </div>
                  )}
    </div>
  )
}

export default Widget
