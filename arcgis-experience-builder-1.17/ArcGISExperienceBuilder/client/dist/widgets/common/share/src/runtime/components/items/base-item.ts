import { React, css, focusElementInKeyboardMode, type IMThemeVariables, type IntlShape } from 'jimu-core'
import type { IMConfig, UiMode, ItemsName } from '../../../config'

export enum ExpandType {
  BtnRedirect,
  ShowInPopup
}
/* share items */
export enum ShownMode {
  Btn,
  Content
}

export interface BaseItemConstraint {
  uiMode: UiMode

  sharedUrl: string

  isShowInModal: boolean // for btn shadow
  shownMode: ShownMode

  isShowing: boolean

  getAppTitle: () => string
  onItemClick: (name: ItemsName, ref: React.RefObject<any>, type: ExpandType, isUpdateUrl?: boolean) => void

  // jimu-builder
  intl: IntlShape
  theme: IMThemeVariables
  config: IMConfig

  // a11y
  a11yFocusElement?: any
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export default abstract class BaseItem<Props = unknown, State = unknown> extends React.PureComponent<BaseItemConstraint & Props, State> {
  abstract onClick (ref): void

  openInNewTab (url: string): void {
    const win = window.open(url, '_blank')
    focusElementInKeyboardMode(win, true)
  }

  // Messages
  getAppTitle (): string {
    return this.props.getAppTitle()
  }

  getMsgBy (): string {
    return ' by ArcGIS Experience Builder'
  }

  // styles
  getCommonStyle = () => {
    const inputVars = this.props.theme.components?.input?.sizes.default
    const borderColor = this.props.theme.ref.palette.neutral[500]

    return css`
      .separator-line {
        border-top: 1px solid ${borderColor};
        margin-bottom: 1rem;
      }

      .share-inputs-wrapper {
        border: 1px solid ${borderColor};
        border-radius: ${inputVars.borderRadius ?? 0};

        .input-wrapper { /* for jimu-inputs */
          border: none;
        }

        .share-link-input {
          border-right: 1px solid ${borderColor};
        }
        .embed-copy-btn-wrapper {
          border-top: 1px solid ${borderColor};
        }
      }
    `
  }
}
