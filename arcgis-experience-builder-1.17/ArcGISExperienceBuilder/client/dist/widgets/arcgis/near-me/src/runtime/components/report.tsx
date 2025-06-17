/** @jsx jsx */
import { React, jsx, type IntlShape, type IMThemeVariables } from 'jimu-core'
import defaultMessages from '../translations/default'
import { Label, Select, Option, Button, TextInput } from 'jimu-ui'
import { defaultPageOptions, PageOrientation } from '../constant'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import * as reactiveUtils from 'esri/core/reactiveUtils'

interface Props {
  theme: IMThemeVariables
  intl: IntlShape
  mapView: __esri.MapView | __esri.SceneView
  reportData: any[]
  isRTL: boolean
  folderUrl: string
  onReportExported: () => void
}

interface State {
  template: string
  templateTitle: string
  enableExportButton: boolean
}

/**
 * Report component to render the report template and allow exporting report in PDF format
 * It allows editing the report title and selecting the page size before exporting
 */
export default class Report extends React.PureComponent<Props, State> {
  reportLayout: any
  legend: __esri.Legend
  constructor (props) {
    super(props)
    //default values for reportLayout
    this.reportLayout = {
      'pageSize': defaultPageOptions[2],
      'orientation': PageOrientation.Portrait,
      'dpi': 96
    }
    this.legend = null
    this.state = {
      enableExportButton: false,
      template: defaultPageOptions[2].value,
      templateTitle: this.nls('defaultReportTitle')
    }
  }

  nls = (id: string) => {
    const messages = Object.assign({}, defaultMessages)
    //for unit testing no need to mock intl we can directly use default en msg
    if (this.props.intl?.formatMessage) {
      return this.props.intl.formatMessage({ id: id, defaultMessage: messages[id] })
    } else {
      return messages[id]
    }
  }

  componentDidMount = () => {
    this.handleLegendCreation();
  }


  /**
   * Get the page size in pixels
   * @param sizeInInches page size in inches
   * @param dpi page layout dpi
   * @returns size in pixels
   */
  getPageSizeInPixels = (sizeInInches, dpi: number) => {
    const sizeInPixels = {
      "Height": sizeInInches.height * dpi,
      "Width": sizeInInches.width * dpi
    };
    return sizeInPixels;
  }

  /**
   * Get the page width in px using page size in inches and dpi
   * @returns page width in pixels
   */
  getPageWidthInPixels = () => {
    let sizeInInches, sizeInPixels
    // calculate the page size in pixels
    if (this.reportLayout) {
      sizeInInches = this.reportLayout.pageSize;
      //using size in inches and dpi calculate the size in pixels
      sizeInPixels = this.getPageSizeInPixels(sizeInInches, this.reportLayout.dpi);
    }
    const pageWidthInPixels: number = sizeInPixels.Width;
    return pageWidthInPixels
  }

  /**
   * Get the report size message according to the page size
   * @returns string - report size message to be displayed on report bar
   */
  getReportSizeMessage = () => {
    const pageSize = this.reportLayout.pageSize
    const format =  this.nls(pageSize.value)
    //according to orientation set the height & width of the page
    const pageDimensions: string = " (" + pageSize.width + "'' X " + pageSize.height + "'') "
    //show page format, orientation and size
    const reportBarMsg = this.props.intl.formatMessage({
      id: 'reportDimensionsMsg', defaultMessage: defaultMessages.reportDimensionsMsg
    }, { paperSize: format + pageDimensions })
    return reportBarMsg
  }

  /**
   * Handle the legend creation on load
   */
  handleLegendCreation = () => {
    if (this.props.mapView != null) {
      this.props.mapView?.when(async (view: __esri.MapView | __esri.SceneView) => {
        if (this.legend != null) {
          this.legend.destroy();
          this.legend = null;
        }
        const legendCont = document.createElement('div');
        const [Legend] = await loadArcGISJSAPIModules(['esri/widgets/Legend']);
        this.legend = new Legend({
          container: legendCont,
          view,
          respectLayerDefinitionExpression: true,
          style: {
            type: 'card',
            layout: 'side-by-side',
          },
        })
        //watch the legend state and enable export button when legend is ready
        if (this.legend.viewModel?.state !== 'ready') {
          reactiveUtils.watch(() => this.legend.viewModel?.state, (state) => {
            if (state === 'ready') {
              this.setState({
                enableExportButton: true
              })
            }
          })
        } else {
          this.setState({
            enableExportButton: true
          })
        }
      })
    }
  }

  /**
   * Format and render tables using report data and table nodes
   * @param tableParentNode each table parent node
   * @param reportData export report data
   * @returns table node
   */
  formatAndRenderTables = (tableParentNode: HTMLElement, reportData: any) => {
    const tableInfo = reportData.data;
    //todo: decide chunk values and max no of columns depending on page size
    let i; let j; let colsTempArray; let rowsTempArray; let chunk = 3
    //table cols can be overridden by setting in the table data properties
    if (tableInfo.maxNoOfCols) {
      chunk = tableInfo.maxNoOfCols
    }
    if (tableInfo.cols.length > chunk) {
      const remainingCols = tableInfo.cols.length - chunk
      if (remainingCols <= 2) {
        chunk = tableInfo.cols.length
      }
    }
    for (i = 0, j = tableInfo.cols.length; i < j; i += chunk) {
      const newTableInfo = { cols: [], rows: [], title: '', totalCount: 0 }
      let sliceLength = i + chunk
      let breakLoop = false
      if (i === 0) {
        const reportTableTitle = this.props.intl.formatMessage({
          id: 'totalCountLabel', defaultMessage: defaultMessages.totalCountLabel
        }, { tableTitle: reportData.title, total: reportData.totalCount })
        newTableInfo.title = reportTableTitle
      } else {
        newTableInfo.title = ''
      }
      const remainingCols1 = tableInfo.cols.length - (sliceLength)
      if (remainingCols1 <= 2 && remainingCols1 > 0) {
        sliceLength += remainingCols1
        breakLoop = true
      }
      colsTempArray = tableInfo.cols.slice(i, sliceLength)
      rowsTempArray = []
      for (let k = 0; k < tableInfo.rows.length; k++) {
        rowsTempArray.push(tableInfo.rows[k].slice(i, sliceLength))
      }
      newTableInfo.cols = colsTempArray
      newTableInfo.rows = rowsTempArray
      const tableTitleDiv = document.createElement('div')
      tableTitleDiv.className = 'esriCTSectionTitle'
      tableTitleDiv.innerHTML = newTableInfo.title
      tableParentNode.appendChild(tableTitleDiv)
      this.renderTable(tableParentNode, newTableInfo, reportData.data.showRowIndex)
      if (breakLoop) {
        break
      }
    }
    return tableParentNode
  }

  /**
   * Render each table data
   * @param tableParentNode each table parent node
   * @param tableInfo table structure
   * @param showRowIndex each row index
   */
  renderTable = (tableParentNode: HTMLElement, tableInfo: any, showRowIndex: number) => {
    const table = document.createElement('table')
    table.className = 'esriCTTable'
    table.style.width = '100%'
    tableParentNode.appendChild(table)
    const tableBody = document.createElement('tbody')
    table.appendChild(tableBody)
    const tableHeaderRow = document.createElement('tr')
    tableBody.appendChild(tableHeaderRow)
    if (showRowIndex) {
      const header = document.createElement('th')
      header.innerHTML = '#'
      header.style.width = '50px'
      header.style.wordBreak = 'break-word'
      header.style.padding = '4px'
      tableHeaderRow.appendChild(header)
    }
    tableInfo.cols.forEach((col) => {
      const headingCell = document.createElement('th')
      headingCell.innerHTML = col
      headingCell.style.wordBreak = 'break-word'
      headingCell.style.padding = '4px'
      tableHeaderRow.appendChild(headingCell)
    })
    tableInfo.rows.forEach((eachRow, index) => {
      const tableRow = document.createElement('tr')
      tableBody.appendChild(tableRow)
      if (showRowIndex) {
        const cell = document.createElement('td')
        cell.style.padding = '4px'
        cell.style.wordBreak = 'break-word'
        cell.style.wordBreak = 'normal'
        cell.innerHTML = index + 1
        tableRow.appendChild(cell)
      }
      eachRow.forEach((rowValue) => {
        const cellRow = document.createElement('td')
        cellRow.style.padding = '4px'
        if (rowValue === this.nls('noData')) {
          cellRow.style.fontStyle = 'italic'
        }
        cellRow.innerHTML = rowValue
        tableRow.appendChild(cellRow)
      })
    })
  }

  /**
   * Render the HTML content with tables
   * @returns print report div node
   */
  renderHtmlContent = () => {
    const mainDiv = document.createElement('div')
    let printDiv
    this.props.reportData.forEach((repData) => {
      printDiv = this.formatAndRenderTables(mainDiv, repData)
    })
    return printDiv
  }

  /**
   * On template change update the current template
   * @param evt event of the template
   */
  onTemplateChange = (evt) => {
    this.setState({
      template: evt.target.value
    })
    //update the report layout depending on the page siz and orientation
    const filteredLayout = defaultPageOptions.filter((option) => { return evt.target.value === option.value })
    this.reportLayout.pageSize = filteredLayout[0]
    if (filteredLayout[0].value.includes(PageOrientation.Portrait)) {
      this.reportLayout.orientation = PageOrientation.Portrait
    } else {
      this.reportLayout.orientation = PageOrientation.Landscape
    }
    
  }

  /**
   * On report title change update the current title
   * @param event event of the report title
   */
  titleLabelChange = (event) => {
    if (event?.target) {
      const value = event.target.value
      this.setState({
        templateTitle: value ?? value.trim()
      })
    }
  }

  /**
   * Get the report template
   * @returns report template
   */
  getReportTemplate = async () => {
    const reportTitle = this.state.templateTitle
    const mapImageClass = this.reportLayout.orientation === PageOrientation.Landscape ? 'esriCTReportMapImg esriCTReportLandscapeMapImg' : 'esriCTReportMapImg'
    const pageWidthInPixels = this.getPageWidthInPixels()
    //calculate the legend grid columns depending on the page size, each legend item width is 200px
    const legendGridColumns = Math.trunc(pageWidthInPixels / 200)
    const gridColumns = ['200px']
    for (let i = 1; i < legendGridColumns; i++) {
     gridColumns.push('200px')
    }
    //get the report bar message
    const reportBarMsg = this.getReportSizeMessage()
    //get html contents to be rendered
    const dataDiv = this.renderHtmlContent()
    //Get the map's screenshot and then export the report
    const mapImageUrl = await this.viewScreenshot();
    const printJs = `${this.props.folderUrl}dist/runtime/assets/js/print.js`
    return `
      <!DOCTYPE HTML>
      <html lang="en" dir="ltr">
        <head id="reportHead">
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
            <title></title>
            <!-- Report prev page css -->
            <style type="text/css">
                .esriCTReportMapWait {
                    height: 5px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    background-color: #ddd;
                }

                .esriCTReportMapWait:before {
                    display: block;
                    position: absolute;
                    content: "";
                    left: -200px;
                    width: 200px;
                    height: 5px;
                    background-color: #2980b9;
                    animation: loading 2s linear infinite;
                }

                .printLegendContainer {
                    height: min-content;
                    background: #fff;
                    overflow: unset;
                    width: 96%;
                    margin: 20px 2%;
                }

                .jimu-rtl .printLegendContainer {
                    direction: rtl;
                }

                .esri-legend {
                    overflow: hidden auto;
                }

                .esri-widget {
                    --esri-widget-padding-x: 15px;
                    --esri-widget-padding-y: 12px;
                    --esri-widget-padding: var(--esri-widget-padding-y) var(--esri-widget-padding-x);
                    box-sizing: border-box;
                    color: #323232;
                    background-color: #fff;
                    font-family: Avenir Next, Helvetica Neue, helvetica, arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.3em;
                }

                .printLegendContainer .esri-legend--card {
                    border: none;
                    gap: 6pt 12pt;
                    display: grid;
                    grid-template-columns: ${gridColumns.join(' ')};
                    overflow: visible;
                }

                .esri-legend--card,
                .esri-legend--card__service-content {
                    flex-flow: row wrap;
                }

                .esri-legend--card__service-content {
                    height: calc(100% - 60px);
                    display: flex;
                }

                .printLegendContainer .esri-widget>*:not(.esri-scale-bar.esri-widget > *) {
                    background: #fff;
                    color: #323232;
                }

                .esri-legend--card {
                    transition: max-width .25s ease-in-out;
                    display: flex;
                    position: relative;
                    overflow-x: auto;
                }

                .printLegendContainer .esri-legend--card__section {
                    padding: 0pt 0 0pt;
                    min-width: unset;
                }

                .printLegendContainer .esri-legend--card__section:first-child {
                    border-left: none;
                }

                .esri-legend--card__section {
                    font-size: 12px;
                    overflow: visible;
                }

                .printLegendContainer .esri-legend--card__service {
                    border: none;
                    flex: 0 1 auto;
                    break-inside: avoid;
                }

                section.esri-legend--card__service.esri-legend--card__group-layer-child {
                    margin: ${this.props.isRTL ? "10px 10px 0 0": "10px 0 0 10px"}
                }

                .esri-legend--card__service {
                    min-width: fit-content;
                }

                .esri-legend--card:not(:first-child),
                .esri-compass.esri-widget:not(:first-child) {
                    display: none;
                }

                .printLegendContainer .esri-legend--card__service-caption-container {
                    height: unset;
                    padding: 0;
                    border-bottom: none;
                }

                .esri-legend--card__service-caption-container {
                    font-weight: 600;
                }

                .printLegendContainer .esri-legend--card__service-caption-text {
                    padding-bottom: 4px;
                    word-break: break-word;
                }

                .esri-legend--card__service-caption-text {
                    margin: 0;
                    overflow: auto;
                }

                .esri-legend--card__label-container {
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                    display: flex;
                    column-gap: 20px;
                    row-gap: 10px;
                }
                
                .esri-legend--card__label-element {
                    min-height: 23px;
                    min-width: 30px;
                }

                .esriCTReportMapImg {
                    margin-top: 10px;
                    border: 1px solid black;
                    width: 96%;
                    margin-top: 10px;
                }

                .print__scale-bar-container {
                    width: 100%;
                    position: absolute;
                    bottom: 15px;
                    margin: 0 15px;
                }

                .print__scale-bar-container .esri-scale-bar__label {
                    color: #323232;
                    font-size: 10px;
                    padding: 0 4px;
                }

                .print__scale-bar-container--position .esri-scale-bar__label {
                    height: 10px;
                    padding: 0 2px;
                    line-height: 11px;
                }

                .print__scale-bar-container .esri-scale-bar__bar-container:nth-child(1n+3) {
                    display: none;
                }

                .print__scale-bar-container--position .esri-scale-bar__bar-container.esri-scale-bar__bar-container--line {
                    align-items: center;
                }

                .print__scale-bar-container .esri-scale-bar__line {
                    background-color: rgba(255, 255, 255, 0.66);
                }

                .print__scale-bar-container .esri-scale-bar__line--top {
                    width: var(--instant-apps-scale-bar-top) !important;
                    border-bottom: 2px solid #323232;
                }

                .print__scale-bar-container .esri-scale-bar__line--bottom {
                    width: var(--instant-apps-scale-bar-bottom) !important;
                    border-top: 2px solid #323232;
                }

                .print__scale-bar-container--position .esri-scale-bar__label-container--line {
                    position: unset;
                    margin: 0 2px;
                    background-color: rgba(255, 255, 255, 0.66);
                    height: 10px;
                    display: flex;
                    align-items: center;
                }

                .print__scale-bar-container .esri-scale-bar__line--top:before,
                .print__scale-bar-container .esri-scale-bar__line--top:after,
                .print__scale-bar-container .esri-scale-bar__line--bottom:before,
                .print__scale-bar-container .esri-scale-bar__line--bottom:after {
                    background-color: #323232;
                    border-right: 2px solid #323232;
                }

                @keyframes loading {
                    from {
                        left: -200px;
                        width: 30%;
                    }

                    50% {
                        width: 30%;
                    }

                    70% {
                        width: 70%;
                    }

                    80% {
                        left: 50%;
                    }

                    95% {
                        left: 120%;
                    }

                    to {
                        left: 100%;
                    }
                }

                .esriCTHTMLData {
                    position: relative;
                    width: 100%;
                    height: auto;
                }

                .jimu-rtl .esriCTHTMLData {
                    direction: rtl;
                }

                .esriCTTable {
                    margin-top: 10px;
                    padding: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    width: 100%;
                    page-break-inside: avoid;
                    table-layout: fixed;
                }

                .jimu-rtl .esriCTTable {
                    direction: rtl;
                }

                .esriCTTable th {
                    border: 1px solid gray;
                    background-color: ${this.props.theme.ref.palette.primary[100]};
                    word-wrap: break-word;
                }

                .esriCTTable td {
                    border: 1px solid gray;
                    word-wrap: break-word;
                }

                .esriCTSectionTitle {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 15px 0px;
                    width: calc(100% - 10px);
                    word-break: break-all;
                }

                .jimu-rtl .esriCTSectionTitle {
                    direction: rtl;
                }

                .jimu-rtl .esriCTReportMap .esriCTSectionTitle {
                    float: none;
                }

                .esriCTReportLogo {
                    float: left;
                    max-width: calc(50% - 10px);
                    margin: auto 10px auto 0;
                    max-height: 90%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                }

                .jimu-rtl .esriCTReportLogo {
                    float: right;
                    margin: auto 0 auto 10px;
                }

                .esriCTPrintTitleDiv {
                    height: 56px;
                    float: left;
                    width: 100%;
                }

                .jimu-rtl .esriCTPrintTitleDiv {
                    float: right;
                    direction: rtl;
                }

                .esriCTInputTitle {
                    height: 55px;
                    line-height: 55px;
                    border: none;
                    font-size: 25px;
                    width: 100%;
                    padding: 0px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .esriCTInputTitle::-ms-clear {
                    display: none;
                }

                .esriCTReportMain {
                    background: #FFF;
                    border: solid 1px #000;
                    margin: 0 auto;
                    padding: 20px;
                    width: 797px;
                }

                .esriCTReportMap {
                    text-align: center;
                }

                .esriCTReportLandscapeMapImg {
                    max-width: 80%;
                }

                .esriCTReportMapFail {
                    height: 50px;
                }

                .esriCTPrintPage {
                    padding: 30px 0;
                    margin: 20px auto;
                    font-family: arial, sans-serif;
                    font-size: 13px;
                }

                .jimu-rtl {
                    padding: 30px 0;
                    margin: 20px auto;
                    font-family: arial, sans-serif;
                    font-size: 13px;
                }

                .esriCTReportBar {
                    width: 100%;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 6;
                    height: 50px;
                    background: #e2f1fc;
                    border-bottom: 1px solid #000;
                }

                .jimu-rtl .esriCTReportBar {
                    left: inherit;
                    right: 0;
                }

                .esriCTPrintButton,
                .esriCTCloseButton {
                    color: #444;
                    font-family: Verdana, Helvetica, sans-serif;
                    font-size: 12px;
                    -moz-border-radius: 3px;
                    -webkit-border-radius: 3px;
                    border-radius: 3px;
                    border: 1px solid #8b8b8b;
                    box-shadow: none;
                    -webkit-box-shadow: none;
                    background: #F2F2F2;
                    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
                    background: -moz-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);
                    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F2F2F2), color-stop(100%, #D1D1D1));
                    background: -webkit-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);
                    background: -o-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);
                    background: -ms-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);
                    background: linear-gradient(to bottom, #F2F2F2 0%, #D1D1D1 100%);
                    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#F2F2F2', endColorstr='#D1D1D1', GradientType=0);
                    margin: 10px 20px;
                    line-height: 16px;
                    display: block;
                    padding: 5px 10px;
                    outline: 0;
                    text-decoration: none;
                    cursor: pointer;
                    font-weight: 400;
                    white-space: nowrap;
                    float: right;
                }

                .jimu-rtl .esriCTPrintButton,
                .jimu-rtl .esriCTCloseButton {
                    float: left;
                }

                .esriCTPrintButton:hover,
                .esriCTPrintButton:focus,
                .esriCTCloseButton:hover,
                .esriCTCloseButton:focus {
                    background: #E5E6E6;
                    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
                    background: -moz-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);
                    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #E5E6E6), color-stop(100%, #A0A1A1));
                    background: -webkit-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);
                    background: -o-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);
                    background: -ms-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);
                    background: linear-gradient(to bottom, #E5E6E6 0%, #A0A1A1 100%);
                    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#E5E6E6', endColorstr='#A0A1A1', GradientType=0);
                }

                .esriCTReportHeader {
                    display: block;
                    width: 100%;
                    height: 60px;
                    border-bottom: 1px solid #000;
                    margin-bottom: 5px;
                    position: relative;
                }

                .esriCTReportBarMsg {
                    text-align: center;
                    margin-top: 16px;
                }

                .jimu-rtl .esriCTReportBarMsg {
                    direction: rtl;
                }

                .esriCTHidden {
                    display: none;
                }
            </style>
            <!-- Media print css -->
            <style type="text/css" media="print">
                .esriCTPrintPage {
                    padding: 0;
                    color: #000;
                    margin: 0;
                    float: none;
                    background: #fff url(none);
                }

                .esriCTTable {
                    border-spacing: 0;
                    margin-top: 10px;
                    padding: 0;
                    width: 100%;
                    page-break-inside: avoid;
                    table-layout: fixed;
                }

                .esriCTPageBreak {
                    page-break-after: always;
                }

                .esriCTReportBar {
                    display: none;
                }

                .esriCTReportMain {
                    border: none;
                }

                .esriCTTable th {
                    border: 1px solid gray;
                    background-color: ${this.props.theme.ref.palette.primary[100]};
                    -webkit-print-color-adjust: exact;
                    color-adjust: exact;
                    word-wrap: break-word;
                }

                .esriCTTable td {
                    border: 1px solid gray;
                }

                .esriCTTable tr {
                    page-break-inside: avoid;
                    page-break-after: auto;
                }
            </style>
        </head>

        <body id="reportBody" class=${this.props.isRTL ? "jimu-rtl" : "esriCTPrintPage" }>
            <div class="esriCTReportBar">
                <div id="closeButton" class="esriCTCloseButton" title="Close">${this.nls('close')}</div>
                <div id="printButton" class="esriCTPrintButton" title="Print">${this.nls('print')}</div>
                <div id="reportBarMsg" class="esriCTReportBarMsg">${reportBarMsg}</div>
            </div>
            <div id="reportMain" style="width: ${pageWidthInPixels}px" class="esriCTReportMain">
                <div id="reportHeader" class="esriCTReportHeader">
                    <img id="reportLogo" class="esriCTReportLogo esriCTHidden" src="">
                    <div id="printTitleDiv" class="esriCTPrintTitleDiv">
                        <div class="esriCTInputTitle">${reportTitle}</div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <img class='${mapImageClass}' src=${mapImageUrl}></img>
                </div>
                <div id="legendDiv" class="esriCTPageBreak printLegendContainer">
                  ${this.legend?.container?.innerHTML}
                </div>
                <div id="reportData">${dataDiv.innerHTML}</div>
            </div>
            </div>
            <script src='${printJs}'></script>
        </body>
      </html>
    `
  }

  /**
   * Export the PDF on click of Export button
   */
  exportOnClick = async () => {
    // const scaleBar = this.scaleBar()
    // <div class="scaleBar">${scaleBar.innerHTML}</div>

    //execute onReportExported 
    this.props.onReportExported()
    //generate the report template with the report data 
    const reportTemplate = await this.getReportTemplate()
    //create url using the template and open in new window
    const blob = new Blob([reportTemplate], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank')
  }

  scaleBar = () => {
    if (this.props.mapView != null) {
      const widgets = this.props.mapView.ui.getComponents() as __esri.Widget[];
      const scaleBar = widgets?.find(({ container }) => container?.className?.includes('esri-scale-bar'));
      if (scaleBar?.container != null && typeof scaleBar.container !== 'string') {
        return scaleBar.container.cloneNode(true)
      }
    }
  }

  /**
   * Take the screenshot of the map and return the map image url
   * @returns map image dataUrl
   */
  viewScreenshot = async (): Promise<string> => {
    const sizeInPixels = this.getPageSizeInPixels(this.reportLayout.pageSize, this.reportLayout.dpi);
    const imgWidth = (sizeInPixels.Width/ 100) * 95 // Consider only 95% of the page width
    const imgHeight = (sizeInPixels.Height/ 100) * 95 // Consider only 95% of the page height
    const screenshot = await this.props.mapView.takeScreenshot({
      width: imgWidth,
      height: imgHeight,
    });
    return screenshot.dataUrl
  }

  render() {
    return (
      <div>
        <div>
          <Label aria-label={this.nls('template')} className={'text-break'}>
            {this.nls('template')}
          </Label>
        </div>
        <div>
          <Select aria-label={this.nls('template')} className={'pt-1'} name='template'
            size={'sm'} value={this.state.template} onChange={this.onTemplateChange}>
            {defaultPageOptions.map((pageOption) => {
              return <Option role={'option'} aria-label={pageOption.value} key={pageOption.value} value={pageOption.value}>{this.nls(pageOption.value)}</Option>
            })}
          </Select>
        </div>
        <div className='pt-3'>
          <Label aria-label={this.nls('title')} className={'text-break'}>
            {this.nls('title')}
          </Label>
        </div>
        <div>
          <TextInput className='w-100' role={'textbox'} aria-label={this.nls('title')} title={this.state.templateTitle}
            size={'sm'} value={this.state.templateTitle} onChange={this.titleLabelChange} />
        </div>
        <div className='pt-3'>
          <Button role={'button'} disabled={!this.state.enableExportButton}
            className={'text-break w-100'} size={'default'} type='primary' onClick={this.exportOnClick}>
            {this.nls('exportBtnTitle')}
          </Button>
        </div>
      </div>
    )
  }
}
