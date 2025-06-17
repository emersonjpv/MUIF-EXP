/** @jsx jsx */
import {
  React, jsx, type DataSource, DataSourceComponent, Immutable, type QueryRequiredInfo, lodash,
  type UseDataSource, type IMDataSourceInfo, type DataRecord, DataSourceStatus, type TimeExtent, WidgetState
} from 'jimu-core'
import { TableDataActionType, type LayersConfig } from '../../config'
import { getDataSourceById, type SupportedDataSource } from '../../utils'
import { SELECTION_DATA_VIEW_ID } from 'jimu-core/lib/constants'

export interface TableDataSourcesProps {
  widgetId: string
  curLayerConfig: LayersConfig
  widgetState: WidgetState
  onDataSourceCreated?: (ds: DataSource) => void
  onCreateDataSourceFailed?: (useDs: UseDataSource) => void
  onUpdateLayerInfo: (layerInfo: LayerInfo) => void
  onTimeExtentChange: (timeExtent: TimeExtent) => void
  onGdbVersionChange: (gdbVersion: string) => void
  onBelongToSourceVersionChange: () => void
  onNeedRefresh: () => void
  onWidgetQueryChange: () => void
}

export interface LayerInfo {
  notReady: boolean
  emptyTable: boolean
  showLoading: boolean
  interval: number
  needRefresh: boolean
  selectedRecords: DataRecord[]
  selectionViewIds?: string
}

type DsQueryInfo = Pick<IMDataSourceInfo, "sourceVersion" | "widgetQueries" | "needRefresh" | "gdbVersion">

const defaultLayerInfo = {
  notReady: false,
  emptyTable: false,
  showLoading: false,
  interval: 0,
  needRefresh: false,
  selectedRecords: []
}

const TableDataSources = (props: TableDataSourcesProps) => {
  const {
    widgetId, curLayerConfig, widgetState, onDataSourceCreated, onCreateDataSourceFailed, onUpdateLayerInfo, onTimeExtentChange,
    onGdbVersionChange, onBelongToSourceVersionChange, onNeedRefresh, onWidgetQueryChange
  } = props
  const [layerInfo, setLayerInfo] = React.useState<LayerInfo>(defaultLayerInfo)

  React.useEffect(() => {
    onUpdateLayerInfo(layerInfo)
  }, [layerInfo, onUpdateLayerInfo])

  const handleDataSourceInfoChange = React.useCallback((info: IMDataSourceInfo, preInfo?: IMDataSourceInfo) => {
    if (!curLayerConfig) return
    const newLayerInfo = Object.assign({}, layerInfo)
    const dataSource = getLayerConfigDataSource(curLayerConfig)
    if (!info || !dataSource) {
      // ds is inaccessible or delete, don't show 'notReady' warning
      newLayerInfo.notReady = false
      newLayerInfo.emptyTable = true
      setLayerInfo(newLayerInfo)
      return
    }
    // edit ds
    const preSourceVersion = preInfo?.sourceVersion
    const newSourceVersion = info?.sourceVersion
    const newClientVersion = info?.version
    const preClientVersion = preInfo?.version
    const sourceVersionChange = newSourceVersion !== preSourceVersion
    const clientVersionChange = newClientVersion !== preClientVersion
    // If the version change is caused by the table's own modifications, do not rerender
    if ((sourceVersionChange || clientVersionChange) && widgetState !== WidgetState.Active) {
      onNeedRefresh()
    }
    // selection view: selection change
    const isSelectionView = dataSource?.dataViewId === SELECTION_DATA_VIEW_ID
    const sourceRecords = dataSource?.getSourceRecords()
    const useSourceRecordIds = sourceRecords.map(record => record.getId()).join(',')
    if (isSelectionView && sourceRecords?.length !== 0) {
      newLayerInfo.notReady = false
      newLayerInfo.emptyTable = false
      newLayerInfo.selectedRecords = dataSource?.getSelectedRecords()
      newLayerInfo.selectionViewIds = useSourceRecordIds
      setLayerInfo(newLayerInfo)
      return
    }
    // selection view: status is loaded, but if there is no selection, it should be an empty table
    const isEmptySelectionView = isSelectionView && sourceRecords?.length === 0
    if (!curLayerConfig.dataActionObject && (info.status === DataSourceStatus.NotReady || isEmptySelectionView)) {
      newLayerInfo.notReady = true
      newLayerInfo.emptyTable = true
      newLayerInfo.selectionViewIds = useSourceRecordIds
      setLayerInfo(newLayerInfo)
      return
    } else {
      newLayerInfo.notReady = false
      newLayerInfo.emptyTable = false
      newLayerInfo.selectionViewIds = useSourceRecordIds
    }
    // loading status
    newLayerInfo.showLoading = getLoadingStatus(dataSource, info.status)
    const newInterval = dataSource.getAutoRefreshInterval() || 0
    newLayerInfo.interval = newInterval
    // auto refresh
    const newNeedRefresh = info.needRefresh && newInterval > 0
    newLayerInfo.needRefresh = newNeedRefresh
    // ds selection
    const preSelectedIds = preInfo?.selectedIds
    const newSelectedIds = info?.selectedIds
    if (!lodash.isDeepEqual(preSelectedIds, newSelectedIds)) {
      newLayerInfo.selectedRecords = dataSource.getSelectedRecords()
    }
    setLayerInfo(newLayerInfo)
  }, [curLayerConfig, widgetState, layerInfo, onNeedRefresh])

  const compareAndUpdateTable = React.useCallback((curDsQueryInfo: DsQueryInfo, preDsQueryInfo: DsQueryInfo, isBelongTo: boolean = false) => {
    const { widgetQueries: preWidgetQueries, gdbVersion: preGdbVersion, sourceVersion: presSourceVersion } = preDsQueryInfo
    const { widgetQueries, gdbVersion, needRefresh, sourceVersion } = curDsQueryInfo
    const gdbVersionChange = preGdbVersion && gdbVersion && gdbVersion !== preGdbVersion
    // gdbVersion/sourceVersion change & auto refresh
    if (gdbVersionChange) {
      onGdbVersionChange(gdbVersion)
      return
    } else if (needRefresh) {
      onNeedRefresh()
    }
    // belongTo ds sourceVersion change(can't get sql change with getCurrentQueryParams)
    const belongToSourceVersionChange = isBelongTo && presSourceVersion !== sourceVersion
    if (belongToSourceVersionChange) {
      onBelongToSourceVersionChange()
      return
    }
    // widgetQuery change
    const widgetQueryChange = widgetQueries && (widgetQueries !== preWidgetQueries)
    if (widgetQueryChange) {
      onWidgetQueryChange()
    }
  }, [onBelongToSourceVersionChange, onGdbVersionChange, onNeedRefresh, onWidgetQueryChange])

  const handleQueryRequired = React.useCallback((queryRequiredInfo: QueryRequiredInfo, preQueryRequiredInfo?: QueryRequiredInfo) => {
    const isViewInTable = curLayerConfig?.dataActionObject && curLayerConfig?.dataActionType === TableDataActionType.View
    if (isViewInTable || !preQueryRequiredInfo || !curLayerConfig) return
    const dataSource = getLayerConfigDataSource(curLayerConfig)
    if (!dataSource) return
    // time extent change
    const dsParam = dataSource.getCurrentQueryParams()
    const time = dsParam?.time
    onTimeExtentChange(time)
    // ds/belongToDs info
    const dsId = dataSource.id
    const curDsRequiredInfo = queryRequiredInfo?.[dsId]
    const preDsRequiredInfo = preQueryRequiredInfo?.[dsId]
    const belongToDsId = dataSource?.belongToDataSource?.id
    const curBelongToDsInfo = queryRequiredInfo?.[belongToDsId]
    const preBelongToDsInfo = preQueryRequiredInfo?.[belongToDsId]
    if (!curDsRequiredInfo && !curBelongToDsInfo) return
    if (curBelongToDsInfo) {
      // belongToDataSource info change
      compareAndUpdateTable(curBelongToDsInfo, preBelongToDsInfo, true)
    } else {
      // dataSource info change
      compareAndUpdateTable(curDsRequiredInfo, preDsRequiredInfo)
    }
  }, [compareAndUpdateTable, curLayerConfig, onTimeExtentChange])

  const useDataSource = curLayerConfig?.useDataSource
  // If view in table/add to table, use selection view
  const dataActionDataSource = getDataActionDataSource(curLayerConfig)

  return <DataSourceComponent
    widgetId={widgetId}
    useDataSource={Immutable(useDataSource)}
    dataSource={dataActionDataSource}
    onDataSourceCreated={onDataSourceCreated}
    onCreateDataSourceFailed={onCreateDataSourceFailed}
    onDataSourceInfoChange={handleDataSourceInfoChange}
    onQueryRequired={handleQueryRequired}
  />
}

export default TableDataSources

function getLayerConfigDataSource (layerConfig: LayersConfig) {
  const dsId = layerConfig?.useDataSource?.dataSourceId
  let dataSource = getDataSourceById(dsId)
  if (!dataSource) {
    dataSource = getDataActionDataSource(layerConfig)
  }
  return dataSource
}

function getDataActionDataSource (layerConfig: LayersConfig) {
  const useLayerDs = layerConfig?.dataActionObject
  let dataSource: SupportedDataSource = null
  if (useLayerDs) {
    dataSource = layerConfig.dataActionDataSource as SupportedDataSource
  }
  return dataSource
}

function getLoadingStatus (ds: SupportedDataSource, queryStatus: DataSourceStatus) {
  let showLoading = false
  if (window.jimuConfig.isInBuilder || (ds && queryStatus === DataSourceStatus.Loading)) {
    showLoading = true
  }
  return showLoading
}
