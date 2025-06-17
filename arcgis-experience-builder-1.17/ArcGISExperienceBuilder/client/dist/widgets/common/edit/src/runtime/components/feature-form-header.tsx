/** @jsx jsx */
import { jsx, classNames, hooks, type FeatureDataRecord, css, useIntl } from 'jimu-core'
import defaultMessages from '../translations/default'
import { classNameMap, getDisplayField } from './utils'
import type { FeatureFormStep, LayerInfo } from './feature-form-component'
import { Button } from 'jimu-ui'
import { PlusOutlined } from 'jimu-icons/outlined/editor/plus'

interface FeatureFormHeaderProps {
  widgetLabel: string
  description: string
  hasTableLayerAdd: boolean
  featureFormStep: FeatureFormStep
  activeLayerInfo: LayerInfo
  activeFeature: FeatureDataRecord['feature']
  editCount: number
  onBack: () => void
  onNew: () => void
}

const getStyle = () => {
  return css`
    border-bottom: 1px solid var(--ref-palette-neutral-300);
    .esri-feature-form__input:focus,
    calcite-input:focus{
      outline: unset !important;
      outline-offset: unset !important;
    }
    .esri-feature-form{
      background-color: unset;
      .esri-feature-form__form-header{
        margin: 0;
        .esri-feature-form__description-text{
          font-weight: 500;
          font-size: 13px;
          margin: 0;
        }
      }
    }
    .esri-editor__header{
      min-height: 56px;
      .esri-widget__heading{
        font-weight: 600;
        font-size: 16px;
        margin: 0 8px;
        text-align: left;
        padding: 1px 0;
        height: 56px;
        line-height: 54px
      }
    }
    .back-button{
      width: 32px;
      padding-inline: 8px;
      padding-block: 4px;
      line-height: 16px;
      color: var(--ref-palette-black);
      border-top: 0px !important;
      border-left: 0px !important;
      border-bottom: 0px !important;
      border-style: solid;
      border-color: var(--calcite-ui-border-3);
      border-inline-end-width: 1px;
    }
    .add-feature-btn {
      position: absolute;
      right: 15px;
      top: 12px;
      button{
        width: 32px;
        height: 32px;
      }
    }
  `
}

const FeatureFormHeader = (props: FeatureFormHeaderProps) => {
  const { activeLayerInfo, widgetLabel, description, activeFeature, editCount, hasTableLayerAdd, featureFormStep, onBack, onNew } = props
  const isList = featureFormStep === 'list' || featureFormStep === 'empty'
  const isFormOrNew = featureFormStep === 'form' || featureFormStep === 'new'
  let addEditLabel = ''
  const translate = hooks.useTranslation(defaultMessages)
  if (featureFormStep === 'new') {
    addEditLabel = translate('addFeature')
  } else if (featureFormStep === 'form' && activeLayerInfo && activeFeature) {
    const { dataSource } = activeLayerInfo
    const displayField = getDisplayField(dataSource)
    addEditLabel = activeFeature.attributes[displayField] || ''
  }

  const intl = useIntl()
  const countLabel = editCount > 1 ? ` (${intl.formatNumber(editCount)})` : ''

  return <div className={classNames({'d-flex': isFormOrNew})} css={getStyle()}>
    {isFormOrNew &&
      <button
        id='back_home'
        className={classNames('back-button surface-1', classNameMap.backButton)}
        title={translate('back')}
        onClick={onBack}
      >&lt;</button>
    }
    {isList && <div className={classNameMap.featureForm}>
      <div className={classNameMap.formHeader}>
        <h2 className={classNameMap.heading}>{widgetLabel + countLabel}</h2>
        {description && <p className={classNames(`text-truncate ${classNameMap.description}`)} title={description}>
          {description}
        </p>}
      </div>
    </div>}
    {isFormOrNew &&
      <header className={classNameMap.header}>
        <h4 className={classNames('text-truncate', classNameMap.heading)} title={addEditLabel}>
          {addEditLabel}
        </h4>
      </header>
    }
    {hasTableLayerAdd && isList &&
      <Button
        size='sm'
        icon
        type='tertiary'
        className='add-feature-btn'
        onClick={onNew}
        title={translate('addFeature')}
        aria-label={translate('addFeature')}
      >
        <PlusOutlined className='mr-1'/>
        {translate('add')}
      </Button>
    }
  </div>
}

export default FeatureFormHeader
