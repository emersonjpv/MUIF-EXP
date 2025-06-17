import { React, type ImmutableObject, type UseDataSource, type WidgetInitDragCallback } from 'jimu-core'
import { getSeriesType } from 'jimu-ui/advanced/chart'
import type { ChartComponentOptions, ChartMessages, ChartTools, IWebChart, TemplateType } from '../../../config'
import WebChartComponent from './web-chart-component'
import { useChartRuntimeState } from '../../state'
import { getTemplateType } from '../../../utils/common'
import { ChartRoot } from '../components'
import Tools from '../tools'
import { useChartRenderState } from './utils'

export interface WebChartProps {
  className?: string
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  tools: ImmutableObject<ChartTools>
  messages: ImmutableObject<ChartMessages>
  options?: ChartComponentOptions
  enableDataAction: boolean
  useDataSource: ImmutableObject<UseDataSource>
  defaultTemplateType: TemplateType
  onInitDragHandler: WidgetInitDragCallback
}

const WebChart = (props: WebChartProps) => {
  const {
    options,
    widgetId,
    webChart,
    messages: propMessages,
    useDataSource,
    tools: propTools,
    enableDataAction = true,
    defaultTemplateType = 'column',
    onInitDragHandler
  } = props

  const { dataSource, outputDataSource, renderStatus } = useChartRuntimeState()
  const [loading, setLoading] = React.useState(true)

  const type = getSeriesType(webChart?.series as any)
  const templateType = getTemplateType(webChart)?.[1] ?? defaultTemplateType
  const showTools = propTools?.cursorEnable || !!propTools?.filter || enableDataAction

  const noDataMessage = propMessages?.noDataMessage ?? ''
  const messages = React.useMemo(() => { return { noDataMessage } }, [noDataMessage])
  const [notReady, message] = useChartRenderState(useDataSource, dataSource, webChart, renderStatus, messages)
  const showPlaceholder = notReady || !outputDataSource

  const tools = showTools
    ? (
      <Tools
        type={type}
        tools={propTools}
        widgetId={widgetId}
        enableDataAction={enableDataAction}
      />
      )
    : null

  const handleLayerStatusChange = (status: 'loading' | 'loaded') => {
    setLoading(status === 'loading')
  }

  return (
    <ChartRoot
      templateType={templateType}
      messageType='basic'
      message={message}
      showLoading={loading}
      background={webChart?.background}
      className='feature-layer-chart'
      showPlaceholder={showPlaceholder}
      tools={tools}
    >
      <WebChartComponent
        className='web-chart jimu-outline-inside'
        widgetId={widgetId}
        webChart={webChart}
        options={options}
        useDataSource={useDataSource}
        onInitDragHandler={onInitDragHandler}
        onLayerStatusChange={handleLayerStatusChange}
      />
    </ChartRoot>
  )
}

export default WebChart
