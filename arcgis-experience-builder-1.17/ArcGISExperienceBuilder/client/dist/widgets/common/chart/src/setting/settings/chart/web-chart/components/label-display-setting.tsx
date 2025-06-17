import { React, classNames, hooks } from 'jimu-core'
import { Checkbox, Label, defaultMessages as jimuUiDefaultMessage } from 'jimu-ui'
import defaultMessages from '../../../../translations/default'
import { styled } from 'jimu-theme'

export interface LabelDisplaySettingProps {
  className?: string
  displayNumericValueOnLabel?: boolean
  displayPercentageOnLabel?: boolean
  onDisplayNumericValueChange: (value: boolean) => void
  onDisplayPercentageChange: (value: boolean) => void
}

const Root = styled('div')((props) => ({
  display: 'flex',
  padding: '8px',
  width: '100%',
  flexDirection: 'column',
  backgroundColor: props.theme.ref.palette.neutral[300]
}))

export const LabelDisplaySetting = (props: LabelDisplaySettingProps): React.ReactElement => {
  const { className, displayNumericValueOnLabel, displayPercentageOnLabel, onDisplayNumericValueChange, onDisplayPercentageChange } = props

  const translate = hooks.useTranslation(defaultMessages, jimuUiDefaultMessage)

  return (
    <Root className={classNames(className, 'label-display-setting')}>
       <Label check centric className='justify-content-start align-items-center title3 hint-default'>
            <Checkbox
              aria-label={translate('value')}
              checked={displayNumericValueOnLabel}
              onChange={(_, checked: boolean) => { onDisplayNumericValueChange(checked) }}
            />
            <span className='ml-2'>{translate('value')}</span>
          </Label>
          <Label check centric className='justify-content-start align-items-center mt-2 title3 hint-default'>
            <Checkbox
              aria-label={translate('percentage')}
              checked={displayPercentageOnLabel}
              onChange={(_, checked: boolean) => { onDisplayPercentageChange(checked) }}
            />
            <span className='ml-2'>{translate('percentage')}</span>
          </Label>
    </Root>
  )
}
