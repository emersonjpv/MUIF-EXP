/** @jsx jsx */
import { React, jsx, hooks, css, type IMThemeVariables } from 'jimu-core'
import { Button, Icon, defaultMessages as jimuUIMessages, Tooltip } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../translations/default'
import { TableArrangeType, type IMConfig } from '../../config'
import { useTheme } from 'jimu-theme'

interface ArrangementStyleProps {
  config: IMConfig
  onPropertyChange: (name: string, value: any) => void
}

const getStyle = (theme: IMThemeVariables) => css`
  &.arrange-style-container {
    .arrange_container {ß
      margin-top: 10px;
      display: flex;
      .jimu-btn {
        padding: 0;
        background: ${theme.ref.palette.neutral[300]};
        &.active {
          border: 2px solid ${theme.sys.color.primary.light};
        }
      }
      .icon-size {
        width: 109px;
        height: 70px;
      }
    }
  }
`

const ArrangementStyle = (props: ArrangementStyleProps) => {
  const { config, onPropertyChange } = props
  const { arrangeType } = config
  const theme = useTheme()
  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)

  return <SettingSection
    role='group'
    className='arrange-style-container'
    title={translate('sheetStyle')}
    aria-label={translate('sheetStyle')}
    css={getStyle(theme)}
  >
    <SettingRow className='arrange_container'>
      <Tooltip title={translate('tabs')} placement='bottom'>
        <Button
          onClick={() => { onPropertyChange('arrangeType', TableArrangeType.Tabs) }}
          icon
          size='sm'
          type='tertiary'
          active={arrangeType === TableArrangeType.Tabs}
          aria-pressed={arrangeType === TableArrangeType.Tabs}
        >
          <Icon
            autoFlip
            className='icon-size'
            icon={require('../assets/image_table_tabs.svg')}
          />
        </Button>
      </Tooltip>
      <Tooltip
        title={translate('dropdown')}
        placement='bottom'
      >
        <Button
          onClick={() => { onPropertyChange('arrangeType', TableArrangeType.Dropdown) }}
          className='ml-2'
          icon
          size='sm'
          type='tertiary'
          active={arrangeType === TableArrangeType.Dropdown}
          aria-pressed={arrangeType === TableArrangeType.Dropdown}
        >
          <Icon
            autoFlip
            className='icon-size'
            icon={require('../assets/image_table_dropdown.svg')}
          />
        </Button>
      </Tooltip>
    </SettingRow>
  </SettingSection>
}

export default ArrangementStyle
