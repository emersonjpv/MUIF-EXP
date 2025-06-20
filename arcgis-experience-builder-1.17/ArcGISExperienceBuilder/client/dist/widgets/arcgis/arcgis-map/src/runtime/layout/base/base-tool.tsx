/** @jsx jsx */
import { React, css, jsx, polished, classNames, ReactDOM, ErrorBoundary, ReactResizeDetector, type IntlShape, focusElementInKeyboardMode } from 'jimu-core'
import { Icon, Popper, MobilePanelManager, type ShiftOptions, type FlipOptions } from 'jimu-ui'
import { UIComponent, type UIComponentProps } from './ui-component'
import type { ToolJson } from '../config'
import ScrollContainer from './scroll-container'
import PanelShell from './panel-shell'
import { MultiSourceMapContext } from '../../components/multisourcemap-context'
import type { ToolShellProps } from './base-tool-shell'

export interface ActiveToolInfo {
  activeToolName: string
  activeToolTitle: string
}

export interface BaseToolProps extends UIComponentProps {
  mapWidgetId: string
  toolJson: ToolJson
  toolName: string
  isMobile?: boolean
  intl?: IntlShape

  activeToolInfo: ActiveToolInfo
  onActiveToolInfoChange: (activeToolInfo: ActiveToolInfo) => void
  autoControlWidgetId: string

  isRTL: boolean

  onMouseOverPopper: () => void
  onMouseOutPopper: () => void
}

export interface IconType {
  icon: React.ComponentClass<React.SVGAttributes<SVGElement>>
  onIconClick?: (evt?: React.MouseEvent<any>) => void
}

const defaultIcon = require('jimu-ui/lib/icons/widgets.svg')
const closeIcon = require('../../assets/icons/close-12.svg')

export abstract class BaseTool<P extends BaseToolProps, S> extends UIComponent<P, S> {
  iconContainer: HTMLElement
  toolName: string = null
  isContainedToMobilePanel = false
  // this param is used to update pop position when pc content has changed
  generation?: number = 0
  shiftOptions: ShiftOptions
  flipOptions: FlipOptions
  exbMapUiExpandContentRef = React.createRef<HTMLDivElement>()

  constructor (props) {
    super(props)

    const mapContainer = this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.container
    if (MobilePanelManager.getInstance().checkDomIsContained(mapContainer)) {
      this.isContainedToMobilePanel = true
    }
    this.shiftOptions = {
      boundary: mapContainer
    }
    this.flipOptions = {
      padding: 0
    }

    this._onKeyDown = this._onKeyDown.bind(this)
    this.onPopperToggle = this.onPopperToggle.bind(this)
  }

  private _cssStyle () {
    const extendCssStyle = this.getExtendCssStyle()

    return css`
      .exbmap-basetool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .exbmap-basetool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .exbmap-basetool-loader:after {
        background-color: #6e6e6e;
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      ${extendCssStyle}

      /* pointer-events: auto;
      box-shadow: 0 1px 2px rgba(0,0,0,0.3);
      position: relative;

      .exbmap-ui-tool-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .exbmap-ui-expand-content {
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        min-width: 10px;
        padding-top: ${polished.rem(10)};
        padding-bottom: ${polished.rem(10)};
        padding-left: ${polished.rem(20)};
        padding-right: ${polished.rem(20)};

        .exbmap-ui-expand-content-header {
          margin-bottom: ${polished.rem(10)};
        }

        .panel-title {
          font-size: ${polished.rem(16)};
          color: #000000;
        }
      }

      .expand-placement-bottom {
        padding-top: 0.25rem !important;
      }

      .expand-placement-left {
        padding-right: 0.25rem !important;
      }

      .expand-placement-right {
        padding-left: 0.25rem !important;
      }

      .expand-placement-top {
        padding-bottom: 0.25rem !important;
      }

      .exbmap-basetool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .exbmap-basetool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .exbmap-basetool-loader:after {
        background-color: #6e6e6e;
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      } */
    `
  }

  abstract getTitle (): string

  abstract getIcon (): IconType

  abstract getExpandPanel (): React.JSX.Element

  getExtendCssStyle () {
    return ''
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  focusDefaultElement () {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onShowPanel () {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClosePanel () {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  destroy () {}

  // This method can be overrided by child classes.
  static getIsNeedSetting () {
    return true
  }

  /**
   * Retrun true if the tool should be rendered on the map, otherwise return false.
   * e.g. ScaleBar only supports map view, so ScaleBarTool.isAvailable() will return false if the map is scene view.
   */
  static isAvailable (toolShellProps: ToolShellProps): boolean {
    return true
  }

  private onPopperToggle (e: any) {
    if (e) {
      if (e.type === 'keydown' && e.key === 'Escape') {
        this._onIconClick()
        focusElementInKeyboardMode(this.iconContainer)
      }
    }
  }

  readonly _onKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (this.props.activeToolInfo?.activeToolName !== this.toolName) {
        this._onIconClick()
      } else {
        this.focusDefaultElement()
      }
    }
  }

  // toggle props.activeToolName
  private _onIconClick (e?: React.MouseEvent<any>) {
    const onIconClick = this.getIcon() && this.getIcon().onIconClick
    if (onIconClick) {
      onIconClick(e)
    }

    if (!this.getExpandPanel()) {
      return
    }

    if (this.props.activeToolInfo) {
      if (this.props.activeToolInfo.activeToolName === this.toolName) {
        this.props.onActiveToolInfoChange(null)
      } else {
        this.props.onActiveToolInfoChange({
          activeToolName: this.toolName,
          activeToolTitle: this.getTitle()
        })
        this.onShowPanel()
      }
    } else {
      this.props.onActiveToolInfoChange({
        activeToolName: this.toolName,
        activeToolTitle: this.getTitle()
      })
      this.onShowPanel()
    }
  }

  private readonly _getContent = () => {
    if (this.props.toolJson.isOnlyExpanded) {
      return (
        <div css={this._cssStyle()} className='exbmap-ui exbmap-ui-tool-panel'>
          <ErrorBoundary>
            {this.getExpandPanel()}
          </ErrorBoundary>
        </div>
      )
    } else {
      if (this.props.isMobile) {
        return this._renderMobileTool()
      } else {
        return this._renderPCTool()
      }
    }
  }

  private _initIconContainer (ref: HTMLElement) {
    if (ref && !this.iconContainer) {
      this.iconContainer = ref
      this.forceUpdate()
    }
  }

  private readonly onResize = ({ width, height }) => {
    if (!width || !height) {
      return
    }

    this.generation = height
    this.forceUpdate()
  }

  onMouseOverPopper = () => {
    if (this.props.onMouseOverPopper) {
      this.props.onMouseOverPopper()
    }
  }

  onMouseOutPopper = () => {
    if (this.props.onMouseOutPopper) {
      this.props.onMouseOutPopper()
    }
  }

  // This method renders with Popper for pc tool, not MoiblePanel.
  private _renderPCTool () {
    let toolIcon = this.getIcon()
    if (!toolIcon) {
      toolIcon = {
        icon: defaultIcon,
        onIconClick: () => null
      } as IconType
    }

    const expandPanel = this.getExpandPanel()
    const activeToolName = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName
    this.generation = this.generation + 1
    const toolTitle = this.getTitle() || ''
    const iconTitle = this.props.toolJson.isShowIconTitle ? toolTitle : ''

    return (
      <div className='exbmap-ui exbmap-ui-tool' css={this._cssStyle()} style={{ width: '32px', height: '32px' }}>
        <div
          style={{}}
          ref={ref => { this._initIconContainer(ref) }}
          className={classNames('exbmap-ui-tool esri-widget--button', {
            'exbmap-ui-tool-icon-selected': this.toolName === activeToolName && expandPanel
          })}
          title={iconTitle}
          aria-label={iconTitle}
          onClick={e => { this._onIconClick(e) }}
          aria-expanded={this.props.activeToolInfo?.activeToolName === this.toolName}
          role='button'
          tabIndex={0}
          onKeyDown={this._onKeyDown}
        >
          <Icon aria-hidden={true} width={16} height={16} className='exbmap-ui-tool-icon' icon={toolIcon.icon} />
        </div>

        {
          this.iconContainer && (this.toolName === activeToolName && expandPanel) &&
          <PanelShell onDestroyed={() => { this.onClosePanel() }}>
            <Popper
              className='map-tool-popper exbmap-ui-popper'
              reference={this.iconContainer}
              open={!!(this.toolName === activeToolName && expandPanel)}
              placement={this.props.toolJson.panelPlacement}
              shiftOptions={this.shiftOptions}
              flipOptions={this.flipOptions}
              version={this.generation}
              offsetOptions={4}
              // eslint-disable-next-line @typescript-eslint/unbound-method
              toggle={this.onPopperToggle}
              forceLatestFocusElements={true}
              onMouseEnter={this.onMouseOverPopper}
              onMouseLeave={this.onMouseOutPopper}
            >
              <MultiSourceMapContext.Consumer>
                {({ mapWidgetHeight }) => (<div css={this._cssStyle()} className={this.getExpandPanelPlacementClassName()}>
                  <div className='exbmap-ui-expand-content' ref={this.exbMapUiExpandContentRef}>
                    <div className='w-100 justify-content-between d-flex exbmap-ui-expand-content-header'>
                      <div className='panel-title text-truncate' style={{ maxWidth: '210px' }} title={toolTitle}>
                        {toolTitle}
                      </div>

                      <div
                        onClick={() => { this.props.onActiveToolInfoChange(null) }}
                        style={{ cursor: 'pointer' }}
                        tabIndex={0}
                        role="button"
                        aria-label={this.props.intl.formatMessage({ id: 'close', defaultMessage: 'close' })}
                      >
                        <Icon width={20} height={20} icon={closeIcon}/>
                      </div>
                    </div>
                    <ErrorBoundary>
                      <div style={{ maxHeight: `${mapWidgetHeight - 55}px`, overflowY: this.toolName !== 'Search' ? 'auto' : 'inherit' }}>
                        {expandPanel}
                      </div>
                    </ErrorBoundary>
                    <ReactResizeDetector targetRef={this.exbMapUiExpandContentRef} handleHeight onResize={this.onResize} />
                  </div>
                </div>)}
              </MultiSourceMapContext.Consumer>
            </Popper>
          </PanelShell>
        }
      </div>
    )
  }

  handleToggleMobilePanel = () => {
    this.props.onActiveToolInfoChange(null)
  }

  private _renderMobileTool () {
    let toolIcon = this.getIcon()
    if (!toolIcon) {
      toolIcon = {
        icon: defaultIcon,
        onIconClick: () => null
      } as IconType
    }

    const expandPanel = this.getExpandPanel()
    const activeToolName = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName
    return (
      <MultiSourceMapContext.Consumer>
        {({ mobilePanelContainer }) => (
          <div className='exbmap-ui exbmap-ui-tool' css={this._cssStyle()}>
            <div
              style={{}} ref={ref => { this.iconContainer = ref }} className={classNames('exbmap-ui-tool esri-widget--button', {
                'exbmap-ui-tool-icon-selected': this.toolName === activeToolName && expandPanel
              })}
              role='button' tabIndex={0} onKeyDown={this._onKeyDown}
              title={this.props.toolJson.isShowIconTitle ? this.getTitle() : ''} onClick={e => { this._onIconClick(e) }}
            >
              <Icon width={16} height={16} className='exbmap-ui-tool-icon' icon={toolIcon.icon} />
            </div>
            {this.toolName === activeToolName && expandPanel &&
            ReactDOM.createPortal(<PanelShell onDestroyed={() => { this.onClosePanel() }}><div className='w-100 h-100 d-flex flex-column' css={this._cssStyle()}>
              <ScrollContainer className='w-100 h-100'>
                <ErrorBoundary>
                  {this.getExpandPanel()}
                </ErrorBoundary>
              </ScrollContainer>
            </div>
            </PanelShell>, mobilePanelContainer)}
          </div>
        )}
      </MultiSourceMapContext.Consumer>
    )
  }

  private getExpandPanelPlacementClassName () {
    if (!this.props.toolJson.panelPlacement) {
      return null
    } else {
      return `expand-placement-${this.props.toolJson.panelPlacement.split('-')[0]}`
    }
  }

  render () {
    return this._getContent()
  }
}
