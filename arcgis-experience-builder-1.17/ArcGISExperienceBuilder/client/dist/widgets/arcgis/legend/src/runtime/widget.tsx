/** @jsx jsx */
import { React, jsx, type AllWidgetProps, DataSourceComponent, ReactResizeDetector, type MapDataSource, DataSourceTypes } from 'jimu-core'
import { loadArcGISJSAPIModules, JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { WidgetPlaceholder, FillType } from 'jimu-ui'
import { ELegendMode, type IMConfig, type Style } from '../config'
import { getStyle } from './lib/style'
import defaultMessages from './translations/default'
import legendIcon from '../../icon.svg'
import { versionManager } from '../version-manager'

export enum LoadStatus {
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected'
}

export interface WidgetProps extends AllWidgetProps<IMConfig> {
}

export interface WidgetState {
  loadStatus: LoadStatus
  widgetKey: number
}

export default class Widget extends React.PureComponent<WidgetProps, WidgetState> {
  private dataSource: MapDataSource
  private mapView: __esri.MapView
  private sceneView: __esri.SceneView
  private MapView: typeof __esri.MapView
  private SceneView: typeof __esri.SceneView
  private legend: __esri.Legend
  private Legend: typeof __esri.Legend
  private currentWidth: number
  legendWrapperRef = React.createRef<HTMLDivElement>()
  legendContainerRef = React.createRef<HTMLDivElement>()
  mapContainerRef = React.createRef<HTMLDivElement>()

  static versionManager = versionManager

  constructor (props) {
    super(props)
    this.state = {
      loadStatus: LoadStatus.Pending,
      widgetKey: Math.random()
    }
  }

  componentDidUpdate (prevProps: Readonly<WidgetProps>, prevState: Readonly<WidgetState>, snapshot?: any): void {
    // This option needs to refresh the legend to take effect
    if (this.props.config !== prevProps.config) {
      this.setState({ widgetKey: Math.random() })
    }
  }

  async createViewByDataSource (dataSource) {
    return await this.loadViewModules(dataSource).then(async () => {
      if (dataSource.type === DataSourceTypes.WebMap) {
        return await new Promise((resolve, reject) => { this.createWebMapView(this.MapView, resolve, reject) })
      } else if (dataSource.type === DataSourceTypes.WebScene) {
        return new Promise((resolve, reject) => { this.createSceneView(this.SceneView, resolve, reject) })
      } else {
        return Promise.reject(new Error(null))
      }
    })
  }

  createWebMapView = (MapView, resolve, reject) => {
    this.destroyView()
    const mapViewOption: __esri.MapViewProperties = {
      map: this.dataSource.map,
      container: this.mapContainerRef.current
    }
    this.mapView = new MapView(mapViewOption)
    this.mapView.when(() => {
      resolve(this.mapView)
    }, (error) => reject(error))
  }

  createSceneView = (SceneView, resolve, reject) => {
    this.destroyView()
    const mapViewOption: __esri.SceneViewProperties = {
      map: this.dataSource.map,
      container: this.mapContainerRef.current
    }
    this.sceneView = new this.SceneView(mapViewOption)
    this.sceneView.when(() => {
      resolve(this.sceneView)
    }, (error) => reject(error))
  }

  destroyView () {
    this.mapView && !this.mapView.destroyed && this.mapView.destroy()
    this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy()
  }

  loadViewModules = async (dataSource: MapDataSource): Promise <typeof __esri.MapView | typeof __esri.SceneView> => {
    if (dataSource.type === DataSourceTypes.WebMap) {
      if (this.MapView) {
        return this.MapView
      }
      [this.MapView] = await loadArcGISJSAPIModules(['esri/views/MapView'])
      return this.MapView
    } else if (dataSource.type === DataSourceTypes.WebScene) {
      if (this.SceneView) {
        return this.SceneView
      }
      [this.SceneView] = await loadArcGISJSAPIModules(['esri/views/SceneView'])
      return this.SceneView
    } else {
      return Promise.reject(new Error(null))
    }
  }

  destroyLegend = () => {
    this.legend && !this.legend.destroyed && this.legend.destroy()
  }

  createLegend = async (view) => {
    if (!this.Legend) {
      [this.Legend] = await loadArcGISJSAPIModules(['esri/widgets/Legend'])
    }

    const container = document && document.createElement('div')
    this.legendContainerRef.current && this.legendContainerRef.current.appendChild(container)


    view.when(() => {
      // Destroy the old legend before create the new one
      this.destroyLegend()
      this.legend = new this.Legend({
        view: view,
        container: container,
        // respectLayerDefinitionExpression: this.props.config?.respectLayerDefinitionExp ?? true
      })

      this.configLegend()
    })
  }

  configLegend = () => {
    if (this.legend) {
      const basemapLegendVisible = this.props.config.showBaseMap
      this.legend.style = this.calculateStyle()
      this.legend.basemapLegendVisible = basemapLegendVisible
      const legendMode = this.props.config.legendMode

      if (legendMode === ELegendMode.ShowAll) {
        this.legend.respectLayerVisibility = false
      } else if (legendMode === ELegendMode.ShowWithinExtent) {
        this.legend.hideLayersNotInCurrentView = true
      }
    }
  }

  calculateStyle = () => {
    let style
    const currentWidth = this.currentWidth || 100000// window.innerWidth;
    if (this.legend) {
      if (this.props.config.cardStyle) {
        let layout
        if (!this.props.config.cardLayout || this.props.config.cardLayout === 'auto') {
          if (currentWidth <= 600) {
            layout = 'stack'
          } else {
            layout = 'side-by-side'
          }
        } else {
          layout = this.props.config.cardLayout
        }
        style = {
          type: 'card' as const,
          layout: layout
        }
      } else {
        style = 'classic'
      }
    } else {
      style = 'classic'
    }
    return style
  }

  getDefaultStyleConfig (): Style {
    return {
      useCustom: false,
      background: {
        color: '',
        fillType: FillType.FILL
      },
      fontColor: ''
    }
  }

  getStyleConfig () {
    if (this.props.config.style && this.props.config.style.useCustom) {
      return this.props.config.style
    } else {
      return this.getDefaultStyleConfig()
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (jimuMapView && jimuMapView.view) {
      this.createLegend(jimuMapView.view).then(() => {
        this.setState({
          loadStatus: LoadStatus.Fulfilled
        })
      }).catch((error) => { console.error(error) })
    } else {
      this.destroyLegend()
    }
  }

  onDataSourceCreated = (dataSource): void => {
    this.dataSource = dataSource

    this.createViewByDataSource(dataSource).then((view) => {
      return this.createLegend(view)
    }).then(() => {
      this.setState({
        loadStatus: LoadStatus.Fulfilled
      })
    }).catch((error) => { console.error(error) })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCreateDataSourceFailed = (error): void => {
  }

  onResize = ({ width, height }) => {
    this.currentWidth = width
    if (this.legend && this.props.config.cardLayout === 'auto') {
      const style = this.calculateStyle()
      this.legend.style = style
    }
  }

  render () {
    const useMapWidget = this.props.useMapWidgetIds && this.props.useMapWidgetIds[0]
    const useDataSource = this.props.useDataSources && this.props.useDataSources[0]

    let content = null
    let dataSourceContent = null

    if (useMapWidget) {
      dataSourceContent = (
        <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange} />
      )
    } else if (useDataSource) {
      dataSourceContent = (
        <DataSourceComponent
          useDataSource={useDataSource}
          onDataSourceCreated={this.onDataSourceCreated}
          onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        />
      )
    }

    if (!useMapWidget && !useDataSource) {
      this.destroyLegend()
      content = (
        <div className='widget-legend'>
          <WidgetPlaceholder icon={legendIcon} autoFlip message={this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })} widgetId={this.props.id} />
        </div>
      )
    } else {
      let loadingContent = null
      if (this.state.loadStatus === LoadStatus.Pending) {
        loadingContent = (
          <div className='jimu-secondary-loading' />
        )
      }

      if (window.jimuConfig.isInBuilder) {
        this.configLegend()
      }
      content = (
        <div key={this.state.widgetKey} className='widget-legend' ref={this.legendWrapperRef}>
          {loadingContent}
          <div ref={this.legendContainerRef} style={{ height: '100%' }} />
          <div style={{ position: 'absolute', display: 'none' }} ref={this.mapContainerRef}>mapContainer</div>
          <div style={{ position: 'absolute', display: 'none' }}>
            {dataSourceContent}
          </div>
          <ReactResizeDetector targetRef={this.legendWrapperRef} handleHeight handleWidth onResize={this.onResize} />
        </div>
      )
    }
    return (
      <div css={getStyle(this.props.theme, this.getStyleConfig())} className='jimu-widget'>
        {content}
      </div>
    )
  }
}
