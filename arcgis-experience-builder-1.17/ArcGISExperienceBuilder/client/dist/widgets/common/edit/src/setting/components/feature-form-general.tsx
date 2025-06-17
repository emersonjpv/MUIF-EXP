/** @jsx jsx */
import { React, jsx, hooks } from 'jimu-core'
import { defaultMessages as jimuUIMessages, TextArea } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../translations/default'
import type { IMConfig } from '../../config'

interface FeatureFormGeneralProps {
  config: IMConfig
  onPropertyChange: (name: string, value: any) => void
}

const FeatureFormGeneral = (props: FeatureFormGeneralProps) => {
  const { config, onPropertyChange } = props
  const { description, noDataMessage } = config

  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)

  return <SettingSection role='group' aria-label={translate('iconGroup_general')} title={translate('iconGroup_general')} >
    <SettingRow flow='wrap' label={translate('description')} >
      <TextArea
        className='w-100'
        height={90}
        aria-label={translate('description')}
        placeholder={translate('editFieldDescription')}
        defaultValue={description ?? ''}
        onBlur={evt => { onPropertyChange('description', evt.target.value) }}
      />
    </SettingRow>
    <SettingRow flow='wrap' label={translate('noDataMessage')} >
      <TextArea
        className='w-100'
        height={75}
        aria-label={translate('noDataMessage')}
        placeholder={translate('noDataMessageDefaultText')}
        defaultValue={noDataMessage}
        onBlur={evt => { onPropertyChange('noDataMessage', evt.target.value) }}
      />
    </SettingRow>
  </SettingSection>
}

export default FeatureFormGeneral
