import { type DataRecord, React, hooks, lodash, type ClauseValuePair, DataSourceStatus } from 'jimu-core'
import FeatureTable from 'esri/widgets/FeatureTable'
import * as reactiveUtils from 'esri/core/reactiveUtils'
import { LayerHonorModeType, type LayersConfig, SelectionModeType } from '../../config'
import { getDataSourceById, getTableDataSource } from '../../utils'
import { constructTableTemplate, getDsAccessibleInfo, getIsAdvancedPermission, getTimezone } from './utils'
import { OUTPUT_DATA_VIEW_ID } from 'jimu-core/lib/constants'

interface UseTableOptions {
  dataInvalid: boolean
  layerConfig: LayersConfig
  enableAttachments: boolean
  tableContainer: React.RefObject<HTMLDivElement>
  canEditFeature: boolean
  selectQueryFlag: boolean
  tableShowColumns: ClauseValuePair[]
  dataActionRecords: DataRecord[]
  selectionViewIds?: string
  tableSelectAsyncDs: (selectedIds: Array<string | number>) => void
}

const useTable = (props: UseTableOptions): [__esri.FeatureTable, boolean] => {
  const {
    dataInvalid, layerConfig, enableAttachments, tableContainer,  canEditFeature,
    selectQueryFlag, tableShowColumns, dataActionRecords, selectionViewIds, tableSelectAsyncDs
  } = props
  const [tableUsedLayer, setTableUsedLayer] = React.useState<__esri.FeatureLayer | __esri.SubtypeSublayer>()
  const [layerEditable, setLayerEditable] = React.useState<boolean>(false)
  const [isTableEditing, setIsTableEditing] = React.useState<boolean>(false)
  const [tableLoaded, setTableLoaded] = React.useState<boolean>(false)
  // const [selfDsChange, setSelfDsChange] = React.useState<boolean>(false)

  const tableRef = React.useRef<FeatureTable>(null)
  const tableClickRef = React.useRef<any>(null)
  const timerFn = React.useRef(null)
  const ds = getDataSourceById(layerConfig?.useDataSource?.dataSourceId || layerConfig?.dataActionDataSource?.id)
  const dataSource = getTableDataSource(ds)
  // In some cases, such as chart output ds, need to get the jsapiLayer when the status is unloaded, so need this variable as a dependency
  const dsInfoStatus = dataSource?.getInfo()?.status
  const previousDsInfoStatus = hooks.usePrevious(dsInfoStatus)
  const statusReady = (previousDsInfoStatus !== DataSourceStatus.Unloaded) && (dsInfoStatus === DataSourceStatus.Unloaded)
  const isOutputDsStatusReady = (dataSource?.dataViewId === OUTPUT_DATA_VIEW_ID) && statusReady

  const destroyTable = React.useCallback(() => {
    if (tableRef.current && !tableRef.current.destroyed) {
      tableRef.current.destroy()
      tableRef.current = null
    }
    if (tableContainer.current) {
      tableContainer.current.innerHTML = ''
    }
  }, [tableContainer])

  React.useEffect(() => {
    return () => {
      destroyTable()
    }
  }, [destroyTable])

  React.useEffect(() => {
    async function fetchLayer() {
      let response
      try {
        response = await dataSource?.createJSAPILayerByDataSource() as __esri.FeatureLayer | __esri.SubtypeSublayer
      } catch (err) {
        console.log(err)
      }
      return response
    }
    const usedLayer = fetchLayer()
    Promise.resolve(usedLayer).then(res => {
      if (!res) return
      setTableUsedLayer(res)
    })
  }, [dataSource, isOutputDsStatusReady, dataActionRecords, selectionViewIds])

  React.useEffect(() => {
    async function checkLayerEditable() {
      // fetch to confirm whether it's a public source
      const accessible = await getDsAccessibleInfo(tableUsedLayer?.url)
      const isAdvancedPermission = await getIsAdvancedPermission(dataSource)
      // full editing privileges
      const fullEditingPrivileges = (tableUsedLayer as any)?.userHasFullEditingPrivileges
      // check layer capabilities for delete operation
      const layerEditingEnabled = tableUsedLayer?.editingEnabled ?? true
      const isHonorWebmap = layerConfig?.layerHonorMode === LayerHonorModeType.Webmap
      const canEdit = accessible || canEditFeature
      const normalEditPermission = isHonorWebmap ? canEdit : layerConfig?.enableEdit && canEdit
      let editable = false
      if (isAdvancedPermission || (fullEditingPrivileges && layerEditingEnabled)) {
        editable = true
      } else if (fullEditingPrivileges && !layerEditingEnabled) {
        editable = false
      } else {
        editable = normalEditPermission
      }
      setLayerEditable(editable)
    }
    checkLayerEditable()
  }, [tableUsedLayer, canEditFeature, dataSource, layerConfig])

  const resetTableExpression = React.useCallback(() => {
    const tableWidget = tableRef.current
    if (tableWidget?.layer) {
      const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
      const sqlExpression = curQuery.where
      const tableInstance = tableWidget as any
      tableInstance.layer.definitionExpression = sqlExpression
    }
  }, [dataSource])

  const bindTableClickEvent = React.useCallback(() => {
    const tableWidget = tableRef.current
    if (!layerConfig || !tableWidget) return
    const { selectMode } = layerConfig
    const rowClickFn = ({ feature, objectId: thisId }) => {
      // click none-content cell (ed. title)
      if (!feature) return
      // edit mode cancel cell-click
      if (isTableEditing) return
      const originalSelected = tableWidget.highlightIds
      // Delay click function
      clearTimeout(timerFn.current)
      timerFn.current = setTimeout(() => {
        const objectId = thisId || feature.getObjectId()
        const thisSelected = originalSelected.includes(objectId)
        // attachment also has a row-click event, cause sth unexpected
        const notAttachmentEditing = !(tableWidget as any).attachmentsViewOptions.objectId
        if (notAttachmentEditing) {
          if (selectMode === SelectionModeType.Single) {
            tableWidget.highlightIds.removeAll()
          }
          thisSelected
            ? tableWidget.highlightIds.remove(objectId)
            : tableWidget.highlightIds.add(objectId)
          const selectedIds = tableWidget.highlightIds?.toArray()
          if (selectedIds?.length === 0) {
            if (selectQueryFlag) tableWidget.filterBySelectionEnabled = false
            resetTableExpression()
          }
          tableSelectAsyncDs(selectedIds)
        } else {
          tableSelectAsyncDs([thisId || feature.getObjectId()])
        }
      }, 200)
    }
    if (tableClickRef.current?.remove) tableClickRef.current.remove()
    tableClickRef.current = tableWidget.on('cell-click', rowClickFn as any)
    // dblclick cancel click event
    tableWidget.on('cell-dblclick', () => {
      clearTimeout(timerFn.current)
    })
  }, [isTableEditing, layerConfig, resetTableExpression, selectQueryFlag, tableSelectAsyncDs])

  React.useEffect(() => {
    if (layerConfig?.enableSelect) {
      bindTableClickEvent()
    } else {
      if (tableClickRef.current?.remove) tableClickRef.current.remove()
    }
  }, [layerConfig?.enableSelect, isTableEditing, bindTableClickEvent])

  const updateTableByConfig = React.useCallback(() => {
    const tableWidget = tableRef.current
    if (!layerConfig) return
    const tableTemplate = constructTableTemplate(dataSource, layerConfig, tableShowColumns)
    tableWidget.tableTemplate = tableTemplate
    // Table is not displayed if the fields is empty
    if (tableTemplate.columnTemplates?.length === 0) {
      tableWidget.visible = false
    } else {
      tableWidget.visible = true
    }
  }, [dataSource, layerConfig, tableShowColumns])

  const previousLayerConfig = hooks.usePrevious(layerConfig)
  const prevEnableAttachments = hooks.usePrevious(enableAttachments)
  const previousTableUsedLayer = hooks.usePrevious(tableUsedLayer)
  const preViousLayerEditable = hooks.usePrevious(layerEditable)

  const updateDataSourceEvent = React.useCallback((event) => {
    const { updatedFeatures, deletedFeatures } = event
    // There is no 'add' in api for now
    const updates = updatedFeatures && updatedFeatures.length > 0
    const deletes = deletedFeatures && deletedFeatures.length > 0
    if (updates) {
      const updateFeature = event?.edits?.updateFeatures?.[0]
      if (updateFeature) {
        const record = dataSource.buildRecord(updateFeature)
        dataSource.afterUpdateRecord(record)
      }
    }
    if (deletes) {
      const deleteFeatures = event?.edits?.deleteFeatures
      if (deleteFeatures?.length > 0) {
        const deleteIds = []
        deleteFeatures.forEach(deleteFeature => {
          const record = dataSource.buildRecord(deleteFeature)
          deleteIds.push(record.getId())
        })
        dataSource.afterDeleteRecordsByIds(deleteIds)
      }
    }
  }, [dataSource])

  if (dataInvalid) {
    if(tableRef.current) destroyTable()
  } else {
    if (tableContainer.current && dataSource && tableUsedLayer) {
      const activeChange = layerConfig.id !== previousLayerConfig?.id
      const configChange = !lodash.isDeepEqual(layerConfig, previousLayerConfig)
      const layerChange = !lodash.isDeepEqual(tableUsedLayer, previousTableUsedLayer)
      if (!tableRef.current || layerChange || activeChange) {
        destroyTable()
        const container = document.createElement('div')
        container.className = 'h-100'
        tableContainer.current.appendChild(container)
        tableRef.current = new FeatureTable({
          container,
          layer: tableUsedLayer as any,
          attachmentsEnabled: enableAttachments,
          visibleElements: {
            columnDescriptions: false,
            header: false,
            menu: false,
            menuItems: {
              clearSelection: false,
              refreshData: false,
              toggleColumns: false
            },
            selectionColumn: false
          },
          menuConfig: { items: [] },
          multiSortEnabled: true,
          editingEnabled: layerEditable,
          timeZone: getTimezone(dataSource)
        })
        if (layerConfig?.enableSelect) {
          bindTableClickEvent()
        } else {
          if (tableClickRef.current?.remove) tableClickRef.current.remove()
        }
        updateTableByConfig()
        // update ds after edits
        if (tableUsedLayer.type === 'subtype-sublayer') {
          const subtypeGrouplayer = tableUsedLayer.parent
          subtypeGrouplayer.on('edits', updateDataSourceEvent)
        } else {
          tableUsedLayer.on('edits', updateDataSourceEvent)
        }
      }
      const tableWidget = tableRef.current
      if (layerEditable !== preViousLayerEditable) {
        tableWidget.editingEnabled = layerEditable
      }
      if (prevEnableAttachments !== enableAttachments) {
        tableWidget.attachmentsEnabled = enableAttachments
        // need to reset runtime show/hide setting
        // Api has a bug, when column.hidden is true, set attachmentsEnabled to false,
        // the table will show these columns with column.hidden is true. So, use setTimeout to reset the column.hidden.
        const columnsInfo = tableWidget.columns?.toArray()
        columnsInfo?.forEach(column => {
          const useColumn = column as any
          if (useColumn.hidden) {
            tableWidget.showColumn(useColumn.fieldName)
            setTimeout(() => {
              tableWidget.hideColumn(useColumn.fieldName)
            }, 100)
          }
        })
      }
      if (layerConfig && (layerConfig.id === previousLayerConfig?.id) && configChange) {
        updateTableByConfig()
      }
    }
  }

  const table = tableRef.current
  React.useEffect(() => {
    const watchState = reactiveUtils.watch(() => table?.state, (tableState) => {
      setTableLoaded(tableState === 'loaded')
    }, { initial: true, sync: true })
    const watchTableEditing = reactiveUtils.watch(() => table?.columns?.toArray().some(column => (column as any).editing), isTableEditing => {
      setIsTableEditing(isTableEditing)
    }, { initial: true, sync: true })
    return () => {
      watchState?.remove()
      watchTableEditing?.remove()
    }
  }, [table])

  return [tableRef.current, tableLoaded]
}

export default useTable
