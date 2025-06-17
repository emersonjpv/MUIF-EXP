/** @jsx jsx */
import { React, jsx, css, hooks, type ClauseValuePair, type QueriableDataSource, type DataRecord } from 'jimu-core'
import {
  AdvancedSelect, Button, DataActionList, DataActionListStyle, Dropdown, DropdownButton, DropdownItem, DropdownMenu,
  defaultMessages as jimuUIDefaultMessages
} from 'jimu-ui'
import defaultMessages from '../translations/default'
import { LayerHonorModeType, TableArrangeType, type LayersConfig } from '../../config'
import { Fragment } from 'react'
import { FilterByMapOutlined } from 'jimu-icons/outlined/gis/filter-by-map'
import { MenuOutlined } from 'jimu-icons/outlined/editor/menu'
import { ShowSelectionOutlined } from 'jimu-icons/outlined/editor/show-selection'
import { ClearSelectionGeneralOutlined } from 'jimu-icons/outlined/editor/clear-selection-general'
import { RefreshOutlined } from 'jimu-icons/outlined/editor/refresh'
import { TrashOutlined } from 'jimu-icons/outlined/editor/trash'
import { getUsedFields } from '../utils'
import { ListVisibleOutlined } from 'jimu-icons/outlined/editor/list-visible'
import { MoreHorizontalOutlined } from 'jimu-icons/outlined/application/more-horizontal'

interface UsedState {
  activeTabId: string
  selectQueryFlag: boolean
  tableShowColumns: ClauseValuePair[]
  mobileFlag: boolean
  emptyTable: boolean
  tableLoaded: boolean
  tableSelected: number
  allowDel: boolean
  mapFilterEnabled: boolean
  allLayersConfig: LayersConfig[]
}

export interface TableToolListProps {
  usedState: UsedState
  curLayerConfig: LayersConfig
  dataSource: QueriableDataSource
  dsSelection: DataRecord[]
  isMapMode: boolean
  arrangeType: TableArrangeType
  enableMapExtentFilter: boolean
  widgetId: string
  enableDataAction: boolean
  getInitFields: () => ClauseValuePair[]
  onShowSelection: () => void
  resetTable: () => void
  onTableRefresh: () => void
  onDeleteSelection: () => void
  onValueChangeFromRuntime: (valuePairs: ClauseValuePair[]) => void
  toggleMapFilter: () => void
}

const getButtonListStyles = (searchOn: boolean, horizontalTab: boolean, mobileFlag: boolean) => {
  return css`
    &.top-button-list{
      ${!searchOn && !horizontalTab && `
        position: absolute;
        right: 17px;
      `}
      ${mobileFlag ? 'display: none' : 'display: flex'};
      .top-button{
        display: inline-flex;
        button{
          width: 32px;
          height: 32px;
        }
      }
    }
  `
}

const getDropdownListStyles = (searchOn: boolean, horizontalTab: boolean, mobileFlag: boolean) => {
  return css`
    &.dropdown-list-container{
      ${searchOn && `
        position: absolute;
        right: 17px;
        top: 55px;
      `}
      ${!searchOn && !horizontalTab && `
        position: absolute;
        right: 17px;
      `}
      .dropdown-list{
        ${!mobileFlag && 'display: none;'}
        width: 32px;
        height: 32px;
      }
      .horizontal-action-dropdown{
        button{
          width: 32px;
          height: 32px;
        }
      }
    }
  `
}

const TableToolList = (props: TableToolListProps) => {
  const {
    usedState, curLayerConfig, dataSource, dsSelection, isMapMode, arrangeType, enableMapExtentFilter, widgetId, enableDataAction,
    getInitFields, onShowSelection, resetTable, onTableRefresh, onDeleteSelection, onValueChangeFromRuntime, toggleMapFilter
  } = props
  const {
    activeTabId, selectQueryFlag, tableShowColumns, mobileFlag, emptyTable, tableLoaded,
    tableSelected, allowDel, mapFilterEnabled, allLayersConfig
  } = usedState
  const translate = hooks.useTranslation(defaultMessages, jimuUIDefaultMessages)

  const searchOn = curLayerConfig?.enableSearch && curLayerConfig?.searchFields?.length !== 0
  const horizontalTab = arrangeType === TableArrangeType.Tabs
  const hasSelected = tableSelected > 0
  const showMapFilter = isMapMode && enableMapExtentFilter
  const isHonorWebmap = curLayerConfig.layerHonorMode === LayerHonorModeType.Webmap
  const { popupAllFields, actionUsedFields } = getUsedFields(curLayerConfig, dataSource)
  const initSelectTableFields = getInitFields()
  const dataSourceLabel = dataSource?.getLabel()
  const dataName = translate('tableDataActionLabel', { layer: dataSourceLabel || '' })

  const advancedTableField: ClauseValuePair[] = React.useMemo(() => {
    return curLayerConfig.tableFields?.map(item => {
      return { value: item.name, label: item.alias }
    })
  }, [curLayerConfig])

  const customShowHideButton = () => {
    return <ListVisibleOutlined />
  }

  const customShowHideDropdownButton = () => {
    return <Fragment>
      <ListVisibleOutlined className='mr-1'/>
      {translate('showHideCols')}
    </Fragment>
  }

  const dropdownToolList = <div className='d-flex ml-2 dropdown-list-container' css={getDropdownListStyles(searchOn, horizontalTab, mobileFlag)}>
    <Dropdown size='sm' className='d-inline-flex dropdown-list'>
      <DropdownButton
        arrow={false}
        icon
        size='sm'
        title={translate('options')}
      >
        <MoreHorizontalOutlined />
      </DropdownButton>
      <DropdownMenu>
        {curLayerConfig.enableSelect &&
          <Fragment>
            <DropdownItem key='showSelection' onClick={onShowSelection} disabled={!tableLoaded || emptyTable || !hasSelected}>
              {selectQueryFlag ? <MenuOutlined className='mr-1'/> : <ShowSelectionOutlined className='mr-1' autoFlip/>}
              {selectQueryFlag
                ? translate('showAll')
                : translate('showSelection')
              }
            </DropdownItem>
            <DropdownItem key='clearSelection' onClick={resetTable} disabled={!tableLoaded || emptyTable || !hasSelected}>
              <ClearSelectionGeneralOutlined className='mr-1'/>
              {translate('clearSelection')}
            </DropdownItem>
          </Fragment>
        }
        {curLayerConfig.enableRefresh &&
          <DropdownItem key='refresh' onClick={onTableRefresh} disabled={!tableLoaded || emptyTable}>
            <RefreshOutlined className='mr-1'/>
            {translate('refresh')}
          </DropdownItem>
        }
        {allowDel &&
          <DropdownItem key='delete' onClick={onDeleteSelection} disabled={!tableLoaded || emptyTable || !hasSelected}>
            <TrashOutlined className='mr-1'/>
            {translate('deleteRecords')}
          </DropdownItem>
        }
        <DropdownItem key='showHideCols' tag='div' toggle={false} disabled={!tableLoaded || emptyTable}>
          <AdvancedSelect
            size='sm'
            title={translate('showHideCols')}
            buttonProps={{ arrow: false, type: 'tertiary', className: 'p-0 table-hide-hover-color' }}
            fluid
            staticValues={isHonorWebmap ? popupAllFields : advancedTableField}
            sortValuesByLabel={false}
            isMultiple
            selectedValues={tableShowColumns || initSelectTableFields}
            isEmptyOptionHidden={false}
            onChange={onValueChangeFromRuntime}
            customDropdownButtonContent={customShowHideDropdownButton}
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    {dataSource && mobileFlag &&
      <Fragment>
        {showMapFilter &&
          <Fragment>
            <span className='tool-dividing-line'></span>
            <div className='mobile-map-button mr-2'>
              <Button
                icon
                size='sm'
                onClick={toggleMapFilter}
                variant={mapFilterEnabled ? 'contained' : 'outlined'}
                color={mapFilterEnabled ? 'primary' : 'default'}
                title={translate('enableMapExtentFilter')}
                aria-label={translate('enableMapExtentFilter')}
                disabled={!tableLoaded || emptyTable}
                aria-pressed={mapFilterEnabled}
              >
                <FilterByMapOutlined />
              </Button>
            </div>
          </Fragment>
        }
        {enableDataAction &&
          <Fragment>
            {
              allLayersConfig.map(item => {
                const isCurrentDataSource = item.id === activeTabId
                const dataActionDropdown = isCurrentDataSource && !emptyTable
                  ? <Fragment key={item.id}>
                    {!showMapFilter && <span className='tool-dividing-line'></span>}
                    <div className='horizontal-action-dropdown'>
                      <DataActionList
                        widgetId={widgetId}
                        listStyle={DataActionListStyle.Dropdown}
                        dataSets={[{ dataSource, type: 'selected', records: dsSelection, fields: actionUsedFields, name: dataName }]}
                      />
                    </div>
                  </Fragment>
                  : ''
                return dataActionDropdown
              })
            }
          </Fragment>
        }
      </Fragment>
    }
  </div>

  const buttonToolList = <div className='top-button-list' css={getButtonListStyles(searchOn, horizontalTab, mobileFlag)}>
    {curLayerConfig.enableSelect && (
      <div className='top-button ml-2'>
        <Button
          size='sm'
          onClick={onShowSelection}
          icon
          title={
            selectQueryFlag
              ? translate('showAll')
              : translate('showSelection')
          }
          aria-label={
            selectQueryFlag
              ? translate('showAll')
              : translate('showSelection')
          }
          disabled={!tableLoaded || emptyTable || !hasSelected}
        >
          {selectQueryFlag ? <MenuOutlined /> : <ShowSelectionOutlined autoFlip/>}
        </Button>
      </div>
    )}
    {curLayerConfig.enableSelect &&
      <div className='top-button ml-2'>
        <Button
          size='sm'
          onClick={resetTable}
          icon
          title={translate('clearSelection')}
          aria-label={translate('clearSelection')}
          disabled={!tableLoaded || emptyTable || !hasSelected}
        >
          <ClearSelectionGeneralOutlined />
        </Button>
      </div>
    }
    {curLayerConfig.enableRefresh &&
      <div className='top-button ml-2'>
        <Button
          size='sm'
          onClick={onTableRefresh}
          icon
          title={translate('refresh')}
          aria-label={translate('refresh')}
          disabled={!tableLoaded || emptyTable}
        >
          <RefreshOutlined />
        </Button>
      </div>
    }
    {allowDel &&
      <div className='top-button ml-2'>
        <Button
          size='sm'
          onClick={onDeleteSelection}
          icon
          title={translate('deleteRecords')}
          aria-label={translate('deleteRecords')}
          disabled={!tableLoaded || emptyTable || !hasSelected}
        >
          <TrashOutlined />
        </Button>
      </div>
    }
    <div className='top-button ml-2'>
      <AdvancedSelect
        size='sm'
        title={translate('showHideCols')}
        aria-label={translate('showHideCols')}
        buttonProps={{ icon: true, disabled: !tableLoaded || emptyTable, arrow: false }}
        fluid
        staticValues={isHonorWebmap ? popupAllFields : advancedTableField}
        sortValuesByLabel={false}
        isMultiple
        selectedValues={tableShowColumns || initSelectTableFields}
        isEmptyOptionHidden={false}
        onChange={onValueChangeFromRuntime}
        customDropdownButtonContent={customShowHideButton}
      />
    </div>
    {showMapFilter &&
      <Fragment>
        <span className='tool-dividing-line'></span>
        <div className='top-button mr-2'>
          <Button
            icon
            size='sm'
            onClick={toggleMapFilter}
            variant={mapFilterEnabled ? 'contained' : 'outlined'}
            color={mapFilterEnabled ? 'primary' : 'default'}
            title={translate('enableMapExtentFilter')}
            aria-label={translate('enableMapExtentFilter')}
            disabled={!tableLoaded || emptyTable}
            aria-pressed={mapFilterEnabled}
          >
            <FilterByMapOutlined />
          </Button>
        </div>
      </Fragment>
    }
    {dataSource && !mobileFlag && enableDataAction &&
      // To deal with the set filter turning off when switching tabs
      <Fragment>
        {
          allLayersConfig.map(item => {
            const isCurrentDataSource = item.id === activeTabId
            const dataActionDropdown = isCurrentDataSource && !emptyTable
              ? <Fragment key={item.id}>
                {!showMapFilter && <span className='tool-dividing-line'></span>}
                <div className='top-button data-action-btn'>
                  <DataActionList
                    widgetId={widgetId}
                    listStyle={DataActionListStyle.Dropdown}
                    dataSets={[{ dataSource, type: 'selected', records: dsSelection, fields: actionUsedFields, name: dataName }]}
                  />
                </div>
              </Fragment>
              : ''
            return dataActionDropdown
          })
        }
      </Fragment>
    }
  </div>

  return mobileFlag ? dropdownToolList : buttonToolList
}

export default TableToolList
