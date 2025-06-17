import { React, Immutable, type ImmutableObject, type UseDataSource, DataSourceManager, type ImmutableArray } from 'jimu-core'
import { AllDataSourceTypes, DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'

interface SelectDataProps {
  allUseDataSources: ImmutableArray<UseDataSource>
  useDataSources: ImmutableArray<UseDataSource>
  onChange: (useDataSources: UseDataSource[]) => void
}

const dsTypes = Immutable([
  AllDataSourceTypes.FeatureLayer,
  AllDataSourceTypes.SceneLayer,
  AllDataSourceTypes.BuildingComponentSubLayer,
  AllDataSourceTypes.ImageryLayer,
  AllDataSourceTypes.OrientedImageryLayer,
  AllDataSourceTypes.SubtypeGroupLayer,
  AllDataSourceTypes.SubtypeSublayer
])

export default function SelectData (props: SelectDataProps) {
  const { allUseDataSources, useDataSources = Immutable([]), onChange } = props

  let fromRootDsIds = Immutable([])
  let fromDsIds = Immutable([])
  const dsM = DataSourceManager.getInstance()
  allUseDataSources?.forEach((useDS: ImmutableObject<UseDataSource>) => {
    const ds = dsM.getDataSource(useDS.dataSourceId)
    if (!ds) return
    if (ds.type === AllDataSourceTypes.WebMap || ds.type === AllDataSourceTypes.WebScene) {
      fromRootDsIds = fromRootDsIds.concat([useDS.dataSourceId])
    } else {
      fromDsIds = fromDsIds.concat([ds.isDataView ? ds.getMainDataSource().id : ds.id])
    }
  })
  if (fromRootDsIds.length === 0) {
    fromRootDsIds = undefined
  } else {
    fromDsIds = undefined
  }

  React.useEffect(() => {
    if (!Array.isArray(allUseDataSources)) return
    const allUseDsIds = allUseDataSources.map(useDs => useDs.mainDataSourceId)
    const useDss = useDataSources.filter(useDs =>
      allUseDsIds.includes(useDs.dataSourceId) ||
      allUseDsIds.includes(useDs.mainDataSourceId) ||
      allUseDsIds.includes(useDs.rootDataSourceId)
    )
    // after widget remove some data sources, config.useDataSources should also remove these data sources
    if (useDss.length < useDataSources.length) {
      onChange(useDss.asMutable({ deep: true }))
    }
  }, [allUseDataSources, onChange, useDataSources])

  return <DataSourceSelector
    types={dsTypes}
    useDataSources={useDataSources}
    fromRootDsIds={fromRootDsIds}
    fromDsIds={fromDsIds}
    mustUseDataSource
    isMultiple
    isMultipleDataView
    hideAddDataButton
    hideDataView
    hideTypeDropdown
    enableToSelectOutputDsFromSelf
    onChange={onChange}
  />
}
