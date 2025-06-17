/** @jsx jsx */
import { React, jsx, DataSourceComponent, type IMUseDataSource, type DataSource, type ImmutableArray } from 'jimu-core'
import { idsArrayEquals } from './utils'

interface DataSourceProps {
  useDataSource: IMUseDataSource
  onDataSourceCreated?: (dataSourceId: string, dataSource?: DataSource) => void
  onSelectionChange: (dataSourceId: string) => void
}

export default class EditItemDataSource extends React.PureComponent<DataSourceProps> {
  onDataSourceCreated = (ds: DataSource) => {
    this.props?.onDataSourceCreated?.(this.props.useDataSource.dataSourceId, ds)
  }

  onSelectionChange = (selection: ImmutableArray<string>, preSelection?: ImmutableArray<string>) => {
    const selectedChange = !idsArrayEquals(selection, preSelection) && (selection?.length !== 0 || preSelection?.length !== 0)
    if (selectedChange) {
      this.props.onSelectionChange?.(this.props.useDataSource.dataSourceId)
    }
  }

  render () {
    const { useDataSource } = this.props
    return (
      <DataSourceComponent
        useDataSource={useDataSource}
        onDataSourceCreated={this.onDataSourceCreated}
        onSelectionChange={this.onSelectionChange}
      />
    )
  }
}
