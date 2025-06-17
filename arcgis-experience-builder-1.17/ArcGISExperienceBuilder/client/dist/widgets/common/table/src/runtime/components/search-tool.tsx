/** @jsx jsx */
import { React, jsx, type IMThemeVariables, css, hooks, defaultMessages as jimuCoreMessages } from 'jimu-core'
import { Button, Popper, TextInput } from 'jimu-ui'
import { useTheme } from 'jimu-theme'
import { SearchOutlined } from 'jimu-icons/outlined/editor/search'
import { ArrowLeftOutlined } from 'jimu-icons/outlined/directional/arrow-left'

export interface Props {
  // This value is true when widget width is less than SEARCH_TOOL_MIN_SIZE, and tool will display the mode that pops up when clicked by the button
  searchToolTowed: boolean
  hint?: string
  tableLoaded: boolean
  searchText: string
  handleSearchChange: (searchText: string) => void
  closeSuggestionAndSearch: () => void
}

const getStyles = (theme: IMThemeVariables) => css`
  &.table-search-div{
    .table-search{
      .search-icon{
        z-index: 2;
      }
      .search-input{
        border: 1px solid ${theme.ref.palette.neutral[500]};
        border-radius: 2px;
        .input-wrapper{
          height: 30px;
          border: none;
        }
      }
    }
  }
`

const SearchTool = (props: Props) => {
  const { searchToolTowed, hint, tableLoaded, searchText, handleSearchChange, closeSuggestionAndSearch } = props
  const [isSearchPopperOpen, setIsSearchPopperOpen] = React.useState(false)
  const searchPopupRef = React.useRef<HTMLDivElement>()
  const translate = hooks.useTranslation(jimuCoreMessages)
  const theme = useTheme()
  const searchHint = hint || translate('search')

  const handleKeyDown = evt => {
    if (!evt || !evt.target) return
    if (evt.key === 'Enter') {
      closeSuggestionAndSearch()
    }
  }

  const getTextInputPrefixElement = () => {
    return (
      <Button
        type='tertiary'
        icon
        size='sm'
        onClick={closeSuggestionAndSearch}
        className='search-icon'
      >
        <SearchOutlined color={theme.ref.palette.neutral[700]} />
      </Button>
    )
  }

  return (
    <div className='table-search-div' css={getStyles(theme)}>
      {searchToolTowed
        ? (
          <div
            className='float-right'
            ref={searchPopupRef}
          >
            <Button
              type='tertiary'
              icon
              size='sm'
              className='tools-menu'
              title={translate('search')}
              onClick={evt => {
                setIsSearchPopperOpen(!isSearchPopperOpen)
              }}
            >
              <SearchOutlined />
            </Button>
            <Popper
              placement='right-start'
              reference={searchPopupRef.current}
              offsetOptions={[-10, -30]}
              open={isSearchPopperOpen}
              arrowOptions={false}
              toggle={e => {
                setIsSearchPopperOpen(!isSearchPopperOpen)
              }}
            >
              <div className='d-flex align-items-center table-popup-search m-2'>
                <Button
                  type='tertiary'
                  icon
                  size='sm'
                  onClick={evt => {
                    setIsSearchPopperOpen(false)
                  }}
                  className='search-back mr-1'
                >
                  <ArrowLeftOutlined color={theme.ref.palette.neutral[1100]} />
                </Button>
                <TextInput
                  className='popup-search-input'
                  placeholder={searchHint}
                  onChange={e => { handleSearchChange(e.target.value) }}
                  value={searchText || ''}
                  onKeyDown={e => { handleKeyDown(e) }}
                  prefix={getTextInputPrefixElement()}
                  allowClear
                  title={searchHint}
                  disabled={!tableLoaded}
                />
              </div>
            </Popper>
          </div>
          )
        : (
          <div className='d-flex align-items-center table-search'>
            <TextInput
              className='search-input'
              placeholder={searchHint}
              onChange={e => { handleSearchChange(e.target.value) }}
              value={searchText || ''}
              onKeyDown={e => { handleKeyDown(e) }}
              prefix={getTextInputPrefixElement()}
              allowClear
              title={searchHint}
              disabled={!tableLoaded}
            />
          </div>
          )}
    </div>
  )
}

export default SearchTool
