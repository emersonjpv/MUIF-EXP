import { type IMThemeVariables, css, type SerializedStyles, polished } from 'jimu-core'
import { getAppThemeVariables, getThemeColorValue } from 'jimu-theme'

export function getStyle (theme: IMThemeVariables, mobileFlag: boolean, searchOn: boolean, partProps): SerializedStyles {
  const { id, isHeightAuto, isWidthAuto, headerFontSetting, widgetWidth } = partProps
  // TODO: some css is invalid, the invalid css needs to be cleared

  return css`
    ${'&.table-widget-' + id} {
      .hide-table{
        display: none;
      }
      .table-indent{
        width: calc(100% - 32px);
        height: calc(100% - 26px);
        margin: 10px 16px 16px;
        display: inline-block;
        ${isHeightAuto && 'min-height: 190px;'};
        ${isWidthAuto && 'min-width: 360px;'};
        .horizontal-action-dropdown{
          button{
            width: 32px;
            height: 32px;
          }
        }
        .tool-dividing-line{
          height: 16px;
          width: 1px;
          display: inline-flex;
          background-color: ${theme.ref.palette.neutral[500]};
          margin: 8px 4px;
        }
        .data-action-btn{
          position: relative;
        }
      }
      .tab-title{
        user-select: none;
        margin: auto;
      }
      .tab-flex{
        width: 100%;
        overflow-x: auto;
        .closeable{
          height: 31px;
        }
      }
      .top-drop{
        width: 30%;
        min-width: 150px;
        button{
          line-height: 1.5;
        }
      }
      .nav-underline{
        height: 32px;
        border-bottom: 1px solid ${theme.ref.palette.neutral[400]};
        .nav-item{
          height: 31px;
          max-width: calc(${widgetWidth / 2}px - ${mobileFlag ? '40px' : '120px'});
        }
      }
      .nav-item + .nav-item{
        margin-left: 0;
      }
      .csv-dropdown-con{
        button{
          border-radius: 13px;
        }
      }
      .vertical-tab-select{
        width: 20%;
        display: inline-block;
        .tagBtn{
          width: 100%;
        }
      }
      .horizontal-tab-select{
        .tagBtn{
          width: 150px;
        }
        .tab-content{
          height: 8px;
        }
      }
      .vertical-tab-select,
      .horizontal-tab-select{
        margin-bottom: 4px;
        .activeBtn{
          color: #fff;
          background-color: #076fe5;
        }
      }
      .dropdown-tab-select{
        height: 40px;
        margin-bottom: 4px;
        .dropdown-button{
          height: 32px;
        }
      }
      .vertical-render-con{
        width: 80%;
        position: absolute;
        left: 20%;
        height: 100%;
        top: 0;
      }
      .dropdown-render-con,
      .horizontal-render-con{
        width: 100%;
        height: calc(100% - 45px);
      }
      .mobile-map-button{
        display: inline-flex;
        button{
          width: 32px;
          height: 32px;
        }
      }
      .table-header{
        height: ${searchOn ? '40px' : '0'};
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .table-con{
        width: 100%;
        height: ${searchOn ? 'calc(100% - 40px);' : '100%'};
        .esri-widget{
          background-color: transparent;
          vaadin-grid-cell-content:has(.esri-column__header-content) {
            ${headerFontSetting?.backgroundColor && `background-color: ${headerFontSetting.backgroundColor};`}
            ${headerFontSetting?.fontSize && `font-size: ${headerFontSetting.fontSize}px;`}
            ${headerFontSetting?.bold && 'font-weight: bold;'}
            ${headerFontSetting?.color && `color: ${headerFontSetting.color};`}
            ${overrideTableStyle(headerFontSetting)}
            .esri-column__header-content {
              ${headerFontSetting?.bold && 'font-weight: bold;'}
            }
          }
        }
        .esri-grid .esri-column__sorter{
          overflow-x: auto;
          overflow-y: hidden;
        }
        .esri-field-column__header-content{
          width: calc(100% - 26px);
          overflow: unset;
        }
        .esri-feature-table__loader-container{
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -16px;
          margin-top: -20px;
          z-index: 2;
        }
        .esri-feature-table__content{
          min-height: 145px;
        }
      }
      .table-bottom-info {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .adv-select-con{
        width: 200px;
        visibility: hidden;
        position: absolute;
        right: 17px;
        top: 56px;
      }
      .ds-container{
        position: absolute;
        display: none;
      }
      .dropdown-button-content{
        .table-action-option-close{
          display: none;
        }
      }
    }
  `
}

export function getSuggestionStyle (suggestionWidth?: number): SerializedStyles {
  return css`
    & {
      max-height: ${polished.rem(300)};
      min-width: ${polished.rem(200)};
      overflow: auto;
    }
    button {
      display: block;
      width: 100%;
      text-align: left;
      border: none;
      border-radius: 0;
    }
    button:hover {
      border: none;
    }
  `
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function darkenHexColor (hexColor, depth: number = 80) {
  let useHexColor = hexColor
  if (!useHexColor.startsWith('#')) {
    useHexColor = getThemeColorValue(hexColor, getAppThemeVariables())
  }
  // turn hex to RGB
  let r = parseInt(useHexColor.substring(1, 3), 16)
  let g = parseInt(useHexColor.substring(3, 5), 16)
  let b = parseInt(useHexColor.substring(5, 7), 16)
  // darken color
  r = Math.max(0, Math.min(255, r - depth))
  g = Math.max(0, Math.min(255, g - depth))
  b = Math.max(0, Math.min(255, b - depth))
  // back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

function overrideTableStyle (headerFontSetting) {
  const styles: string[] = []
  if (headerFontSetting) {
    // override background color
    if (headerFontSetting.backgroundColor) {
      styles.push(`--calcite-color-foreground-1: ${headerFontSetting.backgroundColor};`)
      styles.push('--calcite-color-foreground-2: #0000000a;')
      styles.push('--calcite-color-foreground-3: #0000000a;')
    }
    // override title color
    if (headerFontSetting.color) {
      styles.push(`--calcite-color-text-3: ${headerFontSetting.color};`)
      styles.push(`--calcite-color-text-1: ${headerFontSetting.color};`)
      // const darkenColor = darkenHexColor(headerFontSetting.color)
      // styles.push(`--calcite-color-text-1: ${darkenColor};`)
    }
    // override font
    if (headerFontSetting.fontSize) styles.push(`--calcite-font-size--2: ${headerFontSetting.fontSize};`)
    if (headerFontSetting.bold) styles.push('--calcite-ui-text-3: bold;')
  }
  return styles.join(' ')
}
