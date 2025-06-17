/** @jsx jsx */
import { React, jsx, classNames, css } from 'jimu-core'
import { Button } from 'jimu-ui'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { classNameMap } from './utils'

interface FeatureFormDeleteProps {
  title: string
  message: string
  confirmText: string
  cancelText: string
  onConfirm: () => void
  onCancel: () => void
}

const getModalStyle = () => {
  return css`
    &.confirm-scrim{
      position: absolute;
      background-color: var(--calcite-scrim-background);
      width: 100%;
      height: 100%;
      top: 0;
    }
  `
}
const getStyle = () => {
  return css`
    &.confirm-scrim{
      position: absolute;
      background-color: var(--calcite-scrim-background);
      width: 100%;
      height: 100%;
      top: 0;
    }
    .esri-editor__prompt__actions{
      .esri-editor__warning-option--primary,
      .esri-editor__warning-option--positive{
        text-align: center;
        padding: 4px 16px;
        line-height: 22px;
        border: 1px solid var(--calcite-ui-danger);
        border-radius: 0;
        flex: 1;
      }
      .esri-editor__warning-option--primary{
        background-color: transparent;
        color: var(--calcite-ui-danger);
        :hover{
          border-color: var(--calcite-ui-danger-hover);
          color: var(--calcite-ui-danger-hover);
          box-shadow: inset 0 0 0 1px var(--calcite-ui-danger-hover);
        }
      }
      .esri-editor__warning-option--positive{
        background-color: var(--calcite-ui-danger);
        color: var(--ref-palette-white);
        :hover{
          border-color: var(--calcite-ui-danger-hover);
          background-color: var(--calcite-ui-danger-hover);
        }
      }
    }
  `
}

const FeatureFormDelete = (props: FeatureFormDeleteProps) => {
  const { title, message, confirmText, cancelText, onConfirm, onCancel } = props

  return <React.Fragment>
    <div className='confirm-scrim' css={getModalStyle()} />
    <div className={classNameMap.promptDanger} css={getStyle()}>
      <div className={classNameMap.promptHeader}>
        <WarningOutlined width={24} height={24} />
        <h4 className={classNames(classNameMap.widgetHeading, classNameMap.promptHeaderHeading)}>{title}</h4>
      </div>
      <div className={classNameMap.promptMessage}>{message}</div>
      <div className={classNameMap.promptDivider}></div>
      <div className={classNameMap.promptActions}>
        <Button
          className={classNames(classNameMap.warningOption, classNameMap.warningOptionPrimary)}
          onClick={onCancel}
        >
          {cancelText}
        </Button>
        <Button
          className={classNames(classNameMap.warningOption, classNameMap.warningOptionPositive)}
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      </div>
    </div>
  </React.Fragment>
}

export default FeatureFormDelete
