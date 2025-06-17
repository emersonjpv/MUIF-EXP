/** @jsx jsx */
import { React, jsx, hooks } from 'jimu-core'
import { Checkbox, defaultMessages as jimuUIMessages, Label, Switch } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../translations/default'
import type {  IMConfig } from '../../config'

interface MapModeToolProps {
  config: IMConfig
  onPropertyChange: (name: string, value: any) => void
}

const MapModeTool = (props: MapModeToolProps) => {
  const { config, onPropertyChange } = props
  const { enableMapExtentFilter, defaultExtentFilterEnabled, enableAttachments } = config
  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)

  return <SettingSection
    role='group'
    title={translate('tools')}
    aria-label={translate('tools')}
  >
    <SettingRow tag='label' label={translate('enableMapExtentFilter')} >
      <Switch
        className='can-x-switch'
        checked={enableMapExtentFilter}
        data-key='enableMapExtentFilter'
        onChange={(evt) => { onPropertyChange('enableMapExtentFilter', evt.target.checked) }}
        aria-label={translate('enableMapExtentFilter')}
      />
    </SettingRow>
    {enableMapExtentFilter &&
      <SettingRow>
        <Label className='d-flex align-items-center'>
          <Checkbox
            checked={defaultExtentFilterEnabled}
            className='mr-1'
            onChange={evt => { onPropertyChange('defaultExtentFilterEnabled', evt.target.checked) }}
          />
          {translate('defaultEnabled')}
        </Label>
      </SettingRow>
    }
    <SettingRow tag='label' label={translate('enableAttachments')} >
      <Switch
        className='can-x-switch'
        checked={enableAttachments}
        data-key='enableAttachments'
        onChange={(evt) => { onPropertyChange('enableAttachments', evt.target.checked) }}
        aria-label={translate('enableAttachments')}
      />
    </SettingRow>
  </SettingSection>
}

export default MapModeTool
