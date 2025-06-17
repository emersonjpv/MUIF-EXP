/** @jsx jsx */
import {
  React, jsx, classNames, defaultMessages as jimuCoreMessages, hooks, type FeatureDataRecord, css
} from 'jimu-core'
import { Button, TextInput } from 'jimu-ui'
import { SearchOutlined } from 'jimu-icons/outlined/editor/search'
import { classNameMap, type EditFeatures, getDisplayField } from './utils'
import type { LayerInfo } from './feature-form-component'

interface FeatureFormListProps {
  editFeatures: EditFeatures
  layersInfo: { [dsId: string]: LayerInfo }
  layersOrder: string[]
  onClickItem: (dsId: string, feature: FeatureDataRecord['feature']) => void
}

export interface FeatureFormGroup {
  id: string
  dsId: string
  label: string
  items: FeatureFormItem[]
}

interface FeatureFormItem {
  label: string
  data: FeatureDataRecord['feature']
}

const getStyle = () => {
  return css`
    flex: 1;
    height: 0;
    .esri-editor__content{
      padding: 8px 16px;
    }
    .feature-list{
      background-color: var(--calcite-ui-background);
      max-height: unset;
      .esri-item-list{
        background-color: unset;
      }
      .esri-item-list__list-item{
        background-color: var(--calcite-ui-foreground-1);
        :hover{
          cursor: pointer;
          background-color: var(--calcite-ui-foreground-2);
        }
      }
      .esri-item-list__group{
        padding: 0 12px;
      }
      .esri-item-list__list-item{
        :focus,
        :focus-visible {
          outline-offset: -2px !important;
        }
      }
      .esri-item-list__list{
        list-style: none;
        margin: 0;
        padding: 0;
        .esri-item-list__list-item{
          cursor: pointer;
          margin-bottom: 6px;
          min-height: 48px;
          transition: border 250ms ease-in-out;
          display: flex;
          justify-content: space-between;
          .esri-item-list__list-item-container{
            display: flex;
            margin: 9px 2px;
            width: 100%;
            .esri-item-list__list-item-label{
              flex: 1;
              margin: 0;
              display: flex;
              align-items: center;
              word-break: break-word;
              padding-left: 20px;
            }
          }
        }
      }
      .esri-editor__scroller{
        overflow-y: auto;
        max-height: unset;
      }
    }
    .esri-editor__scroller{
      overflow-y: auto;
      max-height: unset;
      .esri-item-list__scroller{
        max-height: unset;
      }
    }
  `
}

const FeatureFormList = (props: FeatureFormListProps) => {
  const { editFeatures, layersOrder, layersInfo, onClickItem } = props
  const [filterText, setFilterText] = React.useState('')
  const translate = hooks.useTranslation(jimuCoreMessages)
  const { count, groupedSelectedFeatures } = React.useMemo(() => {
    let count = 0
    const groupedSelectedFeatures: FeatureFormGroup[] = []
    for (const dsId in editFeatures) {
      const featuresArray = editFeatures[dsId]
      if (featuresArray.length === 0 || !layersInfo[dsId]) continue
      const dataSource = layersInfo[dsId]?.dataSource
      const dsLabel = dataSource.getLabel()
      const displayField = getDisplayField(dataSource)
      const objectIdField = dataSource.getIdField()
      const group: FeatureFormGroup = {
        id: dsId,
        dsId,
        label: dsLabel,
        items: featuresArray.filter(ele => {
          const label = ele.feature.attributes?.[displayField] || ele.feature.attributes?.[objectIdField] || ele.feature.attributes?.objectid
          const lowerCasedFilter = filterText.toLowerCase()
          return !lowerCasedFilter || label?.toString()?.toLowerCase().indexOf(lowerCasedFilter) > -1
        }).map(item => {
          const objectIdFieldValue = item.feature.attributes?.[displayField] || item.feature.attributes?.[objectIdField] || item.feature.attributes?.objectid
          return {
            label: objectIdFieldValue,
            data: item.feature
          }
        })
      }
      count += group.items.length
      groupedSelectedFeatures.push(group)
    }
    // Sort the FeatureForm selection list
    groupedSelectedFeatures.sort((a, b) => {
      const aIndex = layersOrder.findIndex(dsId => dsId === a.id)
      const bIndex = layersOrder.findIndex(dsId => dsId === b.id)
      return aIndex - bIndex
    })
    return { count, groupedSelectedFeatures }
  }, [editFeatures, filterText, layersInfo, layersOrder])
  

  const onFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(evt.target.value)
  }

  if (count === 0) {
    return (
      <div className={classNameMap.noMatchesMessage} key='no-matches'>
        {translate('noItemsFound')}
      </div>
    )
  }

  return (
    <div className='surface-1 border-0' css={getStyle()}>
      <div className={classNames('feature-list h-100 overflow-auto', classNameMap.content, classNameMap.scroller)}>
        <div className={classNames(classNameMap.base, classNameMap.widget)}>
          <div className='d-flex align-items-center m-2'>
            <TextInput
              className='w-100'
              placeholder={translate('search')}
              onChange={onFilterChange}
              value={filterText}
              prefix={<SearchOutlined color='var(--ref-palette-neutral-700)' />}
              allowClear
              title={filterText}
            />
          </div>
          <div key='content' className={classNameMap.scroller}>
            <div key='item-container'>
              {groupedSelectedFeatures.map(group =>
                <div role='group' aria-label={group.label} className={classNameMap.group} key={group.id}>
                  <h4 className={classNames(classNameMap.groupHeader, classNameMap.heading)}>
                    <span className={classNameMap.itemLabel}>{group.label}</span>
                  </h4>
                  <div className={classNameMap.list} role='listbox'>
                    {group.items.map((item, index) =>
                      <Button
                        key={`${group.dsId}__${item.label}_${index}`}
                        role='option'
                        className={classNames(`w-100 border-0 ${classNameMap.item}`)}
                        onClick={() => { onClickItem(group.dsId, item.data) }}
                      >
                        <div className={classNameMap.itemContainer}>
                          <span className={classNameMap.itemLabel}>{item.label}</span>
                        </div>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureFormList
