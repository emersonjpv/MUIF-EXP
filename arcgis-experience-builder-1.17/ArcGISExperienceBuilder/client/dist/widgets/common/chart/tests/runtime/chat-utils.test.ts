import { ChartLimits } from '../../src/constants'
import { createRecordsFromChartData, getChartLimits, matchCodedValueLabel } from '../../src/runtime/chart/web-chart/utils'

jest.mock('@arcgis/charts-components', () => jest.fn())
jest.mock('@arcgis/charts-components-react', () => jest.fn())
describe('src/runtime/chart/utils/index.ts', () => {
  describe('getChartLimits', () => {
    it('should work well when no `num`', () => {
      let series = [{
        type: 'barSeries'
      }]
      let res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxBarChartSeriesCount: 100,
        maxBarUniqueSeriesCountTotal: 10000
      })

      series = [{
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }]
      res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxBarChartSeriesCount: 100,
        maxBarTwoSeriesCountPerSeries: 1000,
        maxBarTwoSeriesCountTotal: 2000
      })

      series = [{
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }]
      res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxBarChartSeriesCount: 100,
        maxBarThreePlusSeriesCountPerSeries: 100,
        maxBarThreePlusSeriesCountTotal: 2000
      })

      series = [{
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxLineChartSeriesCount: 100,
        maxLineUniqueSeriesCountTotal: 10000
      })

      series = [{
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxLineChartSeriesCount: 100,
        maxLineTwoSeriesCountPerSeries: 1000,
        maxLineTwoSeriesCountTotal: 2000
      })

      series = [{
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxLineChartSeriesCount: 100,
        maxLineThreePlusSeriesCountPerSeries: 100,
        maxLineThreePlusSeriesCountTotal: 2000
      })

      series = [{
        type: 'pieSeries'
      }]
      res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxPieChartSliceCountTotal: 300
      })
    })

    it('should work well when `num` less than default limit', () => {
      let series = [{
        type: 'barSeries'
      }]
      let res = getChartLimits(series, ChartLimits, 10)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxBarChartSeriesCount: 100,
        maxBarUniqueSeriesCountTotal: 10
      })

      series = [{
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }]
      res = getChartLimits(series, ChartLimits, 10)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxBarChartSeriesCount: 100,
        maxBarTwoSeriesCountPerSeries: 10,
        maxBarTwoSeriesCountTotal: 2000
      })

      series = [{
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }]
      res = getChartLimits(series, ChartLimits, 10)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxBarChartSeriesCount: 100,
        maxBarThreePlusSeriesCountPerSeries: 10,
        maxBarThreePlusSeriesCountTotal: 2000
      })

      series = [{
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits, 100)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxLineChartSeriesCount: 100,
        maxLineUniqueSeriesCountTotal: 100
      })

      series = [{
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits, 100)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxLineChartSeriesCount: 100,
        maxLineTwoSeriesCountPerSeries: 100,
        maxLineTwoSeriesCountTotal: 2000
      })

      series = [{
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits, 100)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxLineChartSeriesCount: 100,
        maxLineThreePlusSeriesCountPerSeries: 100,
        maxLineThreePlusSeriesCountTotal: 2000
      })

      series = [{
        type: 'pieSeries'
      }]
      res = getChartLimits(series, ChartLimits, 100)
      expect(res).toEqual({
        behaviorAfterLimit: 'renderUpToTheLimit',
        maxPieChartSliceCountTotal: 100
      })
    })

    it('should work well when `num` more than default limit', () => {
      let series = [{
        type: 'barSeries'
      }]
      let res = getChartLimits(series, ChartLimits, 11000)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxBarChartSeriesCount: 100,
        maxBarUniqueSeriesCountTotal: 10000
      })

      series = [{
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }]
      res = getChartLimits(series, ChartLimits, 1100)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxBarChartSeriesCount: 100,
        maxBarTwoSeriesCountPerSeries: 1000,
        maxBarTwoSeriesCountTotal: 2000
      })

      series = [{
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }, {
        type: 'barSeries'
      }]
      res = getChartLimits(series, ChartLimits, 200)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxBarChartSeriesCount: 100,
        maxBarThreePlusSeriesCountPerSeries: 100,
        maxBarThreePlusSeriesCountTotal: 2000
      })

      series = [{
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits, 11000)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxLineChartSeriesCount: 100,
        maxLineUniqueSeriesCountTotal: 10000
      })

      series = [{
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits, 5100)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxLineChartSeriesCount: 100,
        maxLineTwoSeriesCountPerSeries: 1000,
        maxLineTwoSeriesCountTotal: 2000
      })

      series = [{
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }, {
        type: 'lineSeries'
      }]
      res = getChartLimits(series, ChartLimits, 3500)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxLineChartSeriesCount: 100,
        maxLineThreePlusSeriesCountPerSeries: 100,
        maxLineThreePlusSeriesCountTotal: 2000
      })

      series = [{
        type: 'pieSeries'
      }]
      res = getChartLimits(series, ChartLimits, 330)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxPieChartSliceCountTotal: 300
      })
    })

    it('should work well for scatter-plot', () => {
      const series = [{
        type: 'scatterSeries'
      }]
      const res = getChartLimits(series, ChartLimits)
      expect(res).toEqual({
        behaviorAfterLimit: 'reject',
        maxScatterPointsBeforeAggregation: 10000,
        maxScatterPointsAfterAggregation: 10000
      })
    })
  })
  describe('matchCodedValueLabel', () => {
    it('matchCodedValueLabel', () => {
      let dataItem: { [key: string]: any } = {
        OBJECTID_count: 2,
        MISMATCH: 'matching fields one'
      }
      expect(matchCodedValueLabel(dataItem)).toEqual({
        OBJECTID_count: 2,
        MISMATCH: 'matching fields one'
      })
      dataItem = {
        OBJECTID_count: 2,
        MISMATCH: 'matching fields one',
        arcgis_charts_type_domain_field_name: 'MISMATCH',
        arcgis_charts_type_domain_id_value: 'one'
      }
      expect(matchCodedValueLabel(dataItem)).toEqual({
        OBJECTID_count: 2,
        MISMATCH: 'one',
        arcgis_charts_type_domain_field_name: 'MISMATCH',
        arcgis_charts_type_domain_id_value: 'one',
        arcgis_charts_type_domain_id_label: 'matching fields one'
      })
    })
  })

  describe('createRecordsFromChartData', () => {
    it('createRecordsFromChartData', () => {
      const dataSource = {
        getIdField: () => 'objectid',
        buildRecord: (feature) => feature.attributes
      }

      let dataItems: Array<{ [key: string]: any }> = [
        {
          OBJECTID_count: 2,
          MISMATCH: 'matching fields one'
        },
        {
          OBJECTID_count: 1,
          MISMATCH: 'matching fields three'
        },
        {
          OBJECTID_count: 1,
          MISMATCH: 'matching fields two'
        }
      ]

      expect(createRecordsFromChartData(dataItems, dataSource)).toEqual([
        {
          objectid: 0,
          OBJECTID_count: 2,
          MISMATCH: 'matching fields one'
        },
        {
          objectid: 1,
          OBJECTID_count: 1,
          MISMATCH: 'matching fields three'
        },
        {
          objectid: 2,
          OBJECTID_count: 1,
          MISMATCH: 'matching fields two'
        }
      ])

      dataItems = [
        {
          OBJECTID_count: 2,
          MISMATCH: 'matching fields one',
          arcgis_charts_type_domain_field_name: 'MISMATCH',
          arcgis_charts_type_domain_id_value: 'one'
        },
        {
          OBJECTID_count: 1,
          MISMATCH: 'matching fields three',
          arcgis_charts_type_domain_field_name: 'MISMATCH',
          arcgis_charts_type_domain_id_value: 'three'
        },
        {
          OBJECTID_count: 1,
          MISMATCH: 'matching fields two',
          arcgis_charts_type_domain_field_name: 'MISMATCH',
          arcgis_charts_type_domain_id_value: 'two'
        }
      ]
      expect(createRecordsFromChartData(dataItems, dataSource)).toEqual([
        {
          objectid: 0,
          OBJECTID_count: 2,
          MISMATCH: 'one',
          arcgis_charts_type_domain_field_name: 'MISMATCH',
          arcgis_charts_type_domain_id_value: 'one',
          arcgis_charts_type_domain_id_label: 'matching fields one'
        },
        {
          objectid: 1,
          OBJECTID_count: 1,
          MISMATCH: 'three',
          arcgis_charts_type_domain_field_name: 'MISMATCH',
          arcgis_charts_type_domain_id_value: 'three',
          arcgis_charts_type_domain_id_label: 'matching fields three'
        },
        {
          objectid: 2,
          OBJECTID_count: 1,
          MISMATCH: 'two',
          arcgis_charts_type_domain_field_name: 'MISMATCH',
          arcgis_charts_type_domain_id_value: 'two',
          arcgis_charts_type_domain_id_label: 'matching fields two'
        }
      ])
    })
  })
})
