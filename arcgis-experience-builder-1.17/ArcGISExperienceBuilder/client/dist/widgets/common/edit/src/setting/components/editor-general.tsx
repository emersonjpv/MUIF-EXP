/** @jsx jsx */
import { jsx, hooks } from 'jimu-core'
import { defaultMessages as jimuUIMessages, Label, Switch, Checkbox } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../translations/default'
import type { IMConfig } from '../../config'

interface EditorGeneralProps {
  config: IMConfig
  onPropertyChange: (name: string, value: any) => void
  onMultiplePropertyChange: (changeArr: Array<{ name: string, value: any }>) => void
}

const EditorGeneral = (props: EditorGeneralProps) => {
  const { config, onPropertyChange, onMultiplePropertyChange } = props
  const { tooltip, defaultTooltipEnabled, templateFilter, relatedRecords, liveDataEditing, initialReshapeMode } = config

  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)

  const onTooltipToggle = (showTooltip: boolean) => {
    const changeArray = [
      { name: 'tooltip', value: showTooltip },
      { name: 'defaultTooltipEnabled', value: false }
    ]
    onMultiplePropertyChange(changeArray)
  }

  return <SettingSection role='group' aria-label={translate('iconGroup_general')} title={translate('iconGroup_general')} >
    <SettingRow tag='label' label={translate('tooltip')}>
      <Switch
        className='can-x-switch'
        checked={tooltip}
        data-key='tooltip'
        onChange={evt => { onTooltipToggle(evt.target.checked) }}
      />
    </SettingRow>
    {tooltip &&
      <SettingRow>
        <Label className='d-flex align-items-center'>
          <Checkbox
            checked={defaultTooltipEnabled}
            className='mr-1'
            onChange={evt => { onPropertyChange('defaultTooltipEnabled', evt.target.checked) }}
          />
          {translate('defaultEnabled')}
        </Label>
      </SettingRow>
    }
    <SettingRow tag='label' label={translate('templateFilter')}>
      <Switch
        className='can-x-switch'
        checked={templateFilter}
        data-key='templateFilter'
        onChange={evt => { onPropertyChange('templateFilter', evt.target.checked) }}
      />
    </SettingRow>
    <SettingRow tag='label' label={translate('relatedRecords')}>
      <Switch
        className='can-x-switch'
        checked={relatedRecords}
        data-key='relatedRecords'
        onChange={evt => { onPropertyChange('relatedRecords', evt.target.checked) }}
      />
    </SettingRow>
    <SettingRow tag='label' label={translate('runtimeDataEditing')}>
      <Switch
        className='can-x-switch'
        checked={liveDataEditing}
        data-key='liveDataEditing'
        onChange={evt => { onPropertyChange('liveDataEditing', evt.target.checked) }}
      />
    </SettingRow>
    <SettingRow tag='label' label={translate('initialReshapeMode')}>
      <Switch
        className='can-x-switch'
        checked={initialReshapeMode}
        data-key='initialReshapeMode'
        onChange={evt => { onPropertyChange('initialReshapeMode', evt.target.checked) }}
      />
    </SettingRow>
  </SettingSection>
}

export default EditorGeneral
