/** @jsx jsx */
import { React, jsx, hooks, css, type ImmutableArray } from 'jimu-core'
import { defaultMessages as jimuUIMessages, Select } from 'jimu-ui'
import type { LayersConfig } from '../../config'

interface FeatureFormSelectProps {
  addLayersConfig: ImmutableArray<LayersConfig>
  activeId: string
  onChange: (dsId: string) => void
}

const getStyle = () => {
  return css`
    &.layer-selector{
      padding: 12px 15px;
    }
  `
}

const FeatureFormSelect = (props: FeatureFormSelectProps) => {
  const { activeId, addLayersConfig, onChange } = props
  const translate = hooks.useTranslation(jimuUIMessages)

  const handleChange = React.useCallback((evt) => {
    const selectedLayerId = evt?.target?.value
    onChange(selectedLayerId)
  }, [onChange])

  return (
    <div className='layer-selector' css={getStyle()}>
      <label className='esri-feature-form__label'>
        {translate('selectLayer')}
      </label>
      <Select
        value={activeId}
        onChange={handleChange}
      >
        {addLayersConfig.map(config => {
          return (
            <option key={config.id} value={config.id}>
              {config.name}
            </option>
          )
        })}
      </Select>
    </div>
  )
}

export default FeatureFormSelect
