import { type IMThemeVariables, css, type SerializedStyles } from 'jimu-core'
import { styleUtils } from 'jimu-ui'
import type { Style } from '../../config'

export function getStyle (theme: IMThemeVariables, style: Style): SerializedStyles {
  const fillStyleCss = styleUtils.toCSSStyle({ background: style.background }) as any
  delete fillStyleCss.backgroundColor
  const fontColor = style.fontColor || theme.arcgis.widgets.legend.variants?.default?.root?.color
  const root = style.background?.color || theme.sys.color.surface.paper
  const cardRoot = theme.sys.color.surface.paper
  // const cardCarousel = theme.surfaces[1].bg;
  // const cardCaption = theme.surfaces[1].bg;

  return css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${theme.arcgis.widgets.legend.variants?.card?.root?.bg};*/
      background-color: ${root};
      position: relative;
      ${fillStyleCss}
      --calcite-color-text-2: ${fontColor};

      .esri-legend {
        background-color: transparent;
        color: ${fontColor};
        height: 100%;
        .esri-legend--card {
          .esri-legend--card__carousel {
            height: 100%;
            width: 100%;
            max-height: unset;
          }
        }
      }

      .esri-legend.esri-widget.esri-widget--panel {
        .esri-legend__layer {
          overflow-x: hidden;
        }
      }

      .esri-legend--card {
        background-color: transparent;
        color: ${fontColor};
        height: 100%;
      }

      .esri-legend--card.esri-legend--stacked{
      /*
        position: absolute;
        height: 100%;
        width: 100%;
      */
        flex-direction: column;
        justify-content: space-between;
      }

      .esri-legend--card__section {
        width: 100%;
        height: unset;
        margin-bottom: 32px;
      }

      .esri-legend--card__carousel-indicator-container {
        order: 1;
        color: ${fontColor};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        color: ${fontColor};
      }

      .esri-legend--card.esri-widget{
        background-color: ${cardRoot};
      }

      /* .esri-legend {
        background-color: ${theme.ref.palette.neutral[200]};
        color: ${theme.ref.palette.black}
      }

      .esri-widget__heading {
        color: ${theme.ref.palette.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${theme.ref.palette.neutral[400]};
        color: ${theme.ref.palette.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${theme.ref.palette.neutral[200]};
        color: ${theme.ref.palette.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${theme.ref.palette.neutral[400]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${theme.ref.palette.neutral[400]};
        color: ${theme.ref.palette.black};
      } */

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${theme.ref.palette.neutral[1200]};
      }
      */
    }
  `
}
