import { createIntl, Immutable } from 'jimu-core'
import { getAllUsedFieldsByDataSourceId, getGroupOrCustomName, getUseDataSourcesByGroupFiltersChanged, getUseDataSourcesByRemovedAction } from '../src/setting/utils'
import { defaultMessages as jimuUIMessages } from 'jimu-ui'
import defaultMessages from './../src/setting/translations/default'

import { FilterItemType } from '../src/config'

const intl = createIntl({
  locale: 'en',
  defaultLocale: 'en',
  messages: Object.assign({}, defaultMessages, jimuUIMessages)
})

const i18nMessage = (id: string, values?: any) => {
  return intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }, values)
}

const widgetJson = Immutable({
  useDataSources: [
    { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f1', 'f3'] },
    { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: ['f4', 'f5'] },
    { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
  ],
  config: {
    filterItems: [
      {
        type: FilterItemType.Single,
        sqlExprObj: {},
        useDataSources: [
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f3'] },
        ]
      },
      {
        type: FilterItemType.Single,
        sqlExprObj: {},
        useDataSources: [
          { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
        ]
      },
      {
        type: FilterItemType.Group,
        sqlExprObjForGroup: [
          { dataSourceId: 'ds1-1', fieldList: ['f1'], clause: {} },
          { dataSourceId: 'ds1-2', fieldList: ['f4', 'f5'], clause: {} }
        ],
        useDataSources: [
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f1'] },
          { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: ['f4', 'f5'] },
        ]
      }
    ]
  }
})

describe('setting utils', function () {
  describe('getGroupOrCustomName', function () {
    it('use custom label if it exists.', function () {
      const fItems = [
        { type: FilterItemType.Group, name: 'Group 3' },
        { type: FilterItemType.Single, name: 'Group 7' },
        { type: FilterItemType.Custom, name: 'Custom filter 5' }
      ]
      const groupLabel = getGroupOrCustomName(fItems as any, { name: 'Group name' } as any, FilterItemType.Group, i18nMessage)
      expect(groupLabel).toEqual('Group name')
      const customLabel = getGroupOrCustomName(fItems as any, { name: 'Custom filter name' } as any, FilterItemType.Custom, i18nMessage)
      expect(customLabel).toEqual('Custom filter name')
    })
    it('get biggest num from group items, ignore single items.', function () {
      const fItems = [
        { type: FilterItemType.Group, name: 'Group 3' },
        { type: FilterItemType.Group, name: 'Group 4' },
        { type: FilterItemType.Custom, name: 'Custom filter 2' },
        { type: FilterItemType.Custom, name: 'Custom filter 6' },
        { type: FilterItemType.Single, name: 'Group 7' },
        { type: FilterItemType.Single, name: 'Group 9' }
      ]
      const groupLabel = getGroupOrCustomName(fItems as any, null, FilterItemType.Group, i18nMessage)
      expect(groupLabel).toEqual('Group 5')
      const customLabel = getGroupOrCustomName(fItems as any, null, FilterItemType.Custom, i18nMessage)
      expect(customLabel).toEqual('Custom filter 7')
    })
    it('get bigger num from group items, only when item prefix equals "Group" exactly.', function () {
      const fItems = [
        { type: FilterItemType.Group, name: 'Group abc 3' },
        { type: FilterItemType.Group, name: 'abc Group 4' },
        { type: FilterItemType.Group, name: 'Group 1' }
      ]
      const label = getGroupOrCustomName(fItems as any, null, FilterItemType.Group, i18nMessage)
      expect(label).toEqual('Group 2')
    })
  })

  describe('getAllUsedFieldsByDataSourceId', function () {
    it('ds1-1', function () {
      const fields = getAllUsedFieldsByDataSourceId(widgetJson.config.filterItems as any, 'ds1-1')
      expect(fields).toEqual(widgetJson.useDataSources[0].fields)
    })
    it('ds1-2', function () {
      const fields = getAllUsedFieldsByDataSourceId(widgetJson.config.filterItems as any, 'ds1-2')
      expect(fields).toEqual(widgetJson.useDataSources[1].fields)
    })
    it('ds1-9', function () {
      const fields = getAllUsedFieldsByDataSourceId(widgetJson.config.filterItems as any, 'ds1-9')
      expect(fields).toEqual(widgetJson.useDataSources[2].fields)
    })
  })

  describe('getUseDataSourcesByGroupFiltersChanged', function () {
    it('group sql expr is changed.', function () {
      const newFItemForGroupItem = {
        type: FilterItemType.Group,
        sqlExprObjForGroup: [
          { dataSourceId: 'ds1-1', fieldList: ['f2'], clause: {} },
          { dataSourceId: 'ds1-2', fieldList: ['f6', 'f7', 'f8'], clause: {} }
        ],
        useDataSources: [
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f2'] },
          { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: ['f6', 'f7', 'f8'] },
        ]
      }
      const newFItems = [
        ...widgetJson.config.filterItems.slice(0, 2),
        newFItemForGroupItem
      ]
      // update group sql expr
      const newWidgetUseDss = getUseDataSourcesByGroupFiltersChanged(newFItems as any, newFItemForGroupItem.useDataSources as any, widgetJson.useDataSources)
      expect(newWidgetUseDss).toEqual([
        { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f2', 'f3'] },
        { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: ['f6', 'f7', 'f8'] },
        { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
      ])
    })
    describe('remove ds1-1 from group item, main ds.', function () {
      const newFItemForGroupItem = {
        type: FilterItemType.Group,
        sqlExprObjForGroup: null,
        useDataSources: [
          { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1'},
        ]
      }
      it('ds1-1 is not used by other item', function () {
        const newFItems = [
          ...widgetJson.config.filterItems.slice(1, 2), // remove single filter with ds1-1
          newFItemForGroupItem
        ]
        const newWidgetUseDss1 = getUseDataSourcesByGroupFiltersChanged(newFItems as any, newFItemForGroupItem.useDataSources as any, widgetJson.useDataSources)
        const newWidgetUseDss = getUseDataSourcesByRemovedAction(newFItems as any, [{ dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1'}] as any, newWidgetUseDss1)
        expect(newWidgetUseDss).toEqual([
          { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: [] },
          { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
        ])
      })
      it('ds1-1 is used by other item', function () {
        const newFItems = [
          ...widgetJson.config.filterItems.slice(0, 2),
          newFItemForGroupItem
        ]
        const newWidgetUseDss1 = getUseDataSourcesByGroupFiltersChanged(newFItems as any, newFItemForGroupItem.useDataSources as any, widgetJson.useDataSources)
        const newWidgetUseDss = getUseDataSourcesByRemovedAction(newFItems as any, [{ dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1'}] as any, newWidgetUseDss1)
        expect(newWidgetUseDss).toEqual([
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f3'] },
          { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: [] },
          { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
        ])
      })
    })
    describe('remove ds1-2 from group item, not main ds.', function () {
      const newFItemForGroupItem = {
        type: FilterItemType.Group,
        sqlExprObjForGroup: [
          { dataSourceId: 'ds1-1', fieldList: ['f1'], clause: {} }
        ],
        useDataSources: [
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f1'] }
        ]
      }
      let newFItems = [
        ...widgetJson.config.filterItems.slice(0, 2),
        newFItemForGroupItem
      ]
      it('ds1-2 is not used by other item.', function () {
        // update group sql expr
        const newWidgetUseDss1 = getUseDataSourcesByGroupFiltersChanged(newFItems as any, newFItemForGroupItem.useDataSources as any, widgetJson.useDataSources)
        const newWidgetUseDss = getUseDataSourcesByRemovedAction(newFItems as any, [{ dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1'}] as any, newWidgetUseDss1)
        expect(newWidgetUseDss).toEqual([
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f1', 'f3'] },
          { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
        ])
      })
      it('ds1-2 is used by other item.', function () {
        newFItems = [
          ...newFItems,
          {
            type: FilterItemType.Single,
            sqlExprObj: {},
            useDataSources: [
              { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds2', fields: ['f4'] },
            ]
          }
        ]
        // update group sql expr
        const newWidgetUseDss1 = getUseDataSourcesByGroupFiltersChanged(newFItems as any, newFItemForGroupItem.useDataSources as any, widgetJson.useDataSources)
        const newWidgetUseDss = getUseDataSourcesByRemovedAction(newFItems as any, [{ dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1'}] as any, newWidgetUseDss1)
        expect(newWidgetUseDss).toEqual([
          { dataSourceId: 'ds1-1', mainDataSourceId: 'ds1-1', rootDataSourceId: 'ds1', fields: ['f1', 'f3'] },
          { dataSourceId: 'ds1-2', mainDataSourceId: 'ds1-2', rootDataSourceId: 'ds1', fields: ['f4'] },
          { dataSourceId: 'ds1-9', mainDataSourceId: 'ds1-9', rootDataSourceId: 'ds1', fields: ['f9'] }
        ])
      })
    })
  })

})
