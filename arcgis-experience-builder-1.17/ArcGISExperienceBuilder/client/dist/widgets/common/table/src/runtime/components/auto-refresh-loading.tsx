/** @jsx jsx */
import { React, jsx, polished, type IMThemeVariables, css, hooks } from 'jimu-core'
import { Button, Tooltip, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { useTheme } from 'jimu-theme'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'

export interface Props {
  needRefresh: boolean
  showLoading: boolean
  interval: number
  isMobile: boolean
  bottomResponsive: boolean
  onRefresh: () => void
}

const getStyles = (theme: IMThemeVariables, isMobile: boolean) => css`
  &.refresh-loading-con {
    height: 16px;
    .auto-refresh-loading {
      background: ${polished.rgba(theme?.ref.palette?.neutral?.[200], 0.65)};
      color: ${theme.ref.palette?.black};
      font-size: ${polished.rem(12)};
      line-height: ${polished.rem(16)};
      ${!isMobile && `padding: 0 ${polished.rem(7)};`}
      .icon-btn{
        padding: ${polished.rem(1)};
      }
    }
  }
`

const AutoRefreshLoading = (props: Props) => {
  const { needRefresh, showLoading, interval, isMobile, bottomResponsive, onRefresh } = props
  const translate = hooks.useTranslation(jimuUIMessages)
  const [autoRefreshLoadingString, setAutoRefreshLoadingString] = React.useState(translate('lastUpdateAFewTime'))
  const autoRefreshInterval = React.useRef(0)

  const getLoadingString = React.useCallback((time: number): string => {
    let loadingString = translate('lastUpdateAFewTime')
    if (time > 1 && time <= 2) {
      loadingString = translate('lastUpdateAMinute')
    } else if (time > 2) {
      loadingString = translate('lastUpdateTime', { updateTime: time })
    }
    return loadingString
  }, [translate])

  React.useEffect(() => {
    if (interval <= 0) {
      setAutoRefreshLoadingString(translate('lastUpdateAFewTime'))
      window.clearInterval(autoRefreshInterval.current)
      autoRefreshInterval.current = null
    } else if (needRefresh) {
      onRefresh()
      setAutoRefreshLoadingString(translate('lastUpdateAFewTime'))
      let time = 0
      autoRefreshInterval.current = window.setInterval(() => {
        time++
        setAutoRefreshLoadingString(getLoadingString(time))
      }, 60000)
    }

    return () => {
      window.clearInterval(autoRefreshInterval.current)
      autoRefreshInterval.current = null
    }
  }, [needRefresh, interval, getLoadingString, translate, onRefresh])

  const theme = useTheme()

  return (
    <div className='refresh-loading-con d-flex align-items-center' css={getStyles(theme, isMobile)}>
      {showLoading && <div className='loading-con' />}
      {interval > 0 && (
        <div className='flex-grow-1 auto-refresh-loading text-truncate' title={bottomResponsive ? '' : autoRefreshLoadingString}>
          {bottomResponsive
            ? <Tooltip title={autoRefreshLoadingString} showArrow placement='top-end'>
              <Button icon size='sm' type='tertiary' className='d-inline jimu-outline-inside border-0 p-0'>
                <InfoOutlined size={14}/>
              </Button>
            </Tooltip>
            : autoRefreshLoadingString
          }
        </div>
      )}
    </div>
  )
}

export default AutoRefreshLoading
