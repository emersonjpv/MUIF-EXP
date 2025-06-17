/** @jsx jsx */
import { jsx, classNames, css } from 'jimu-core'
import { Button } from 'jimu-ui'
import { classNameMap } from './utils'
import type { ControlButton } from './feature-form-component'

interface FeatureFormButtonsProps {
  buttons: ControlButton[]
}

const getStyle = () => css`
  &.form-buttons{
    border-top: 1px solid rgba(110,110,110,.3);
    padding: 12px 15px;
    display: flex;
    .single-button {
      flex: 1;
    }
    .multi-buttons {
      width: 49%;
    }
  }
`

const FeatureFormButtons = (props: FeatureFormButtonsProps) => {
  const { buttons } = props
  return (
    <div className='d-flex justify-content-between form-buttons' css={getStyle()}>
      {buttons.map(({ disabled = false, label, type, clickHandler }, index) =>
        <Button
          key={index}
          className={classNames({
            'single-button': buttons.length === 1,
            'multi-buttons': buttons.length > 1,
            [classNameMap.buttonDisabled]: disabled
          })}
          type={type}
          disabled={disabled}
          onClick={clickHandler}
        >
          {label}
        </Button>
      )}
    </div>
  )
}

export default FeatureFormButtons
