/** @jsx jsx */
import {
  React, jsx, Immutable, polished, css, hooks, type IMDataSourceJson, type ImmutableObject,
  type UseDataSource, type ImmutableArray, DataSourceManager, dataSourceUtils, ReactRedux, type IMState,
  DataSourceTypes
} from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput, defaultMessages as jimuUIMessages, PanelHeader, LoadingType, Loading, Switch } from 'jimu-ui'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import type { ILayerDefinition } from '@esri/arcgis-rest-feature-service'
import type { LayersConfig } from '../../config'
import defaultMessages from '../translations/default'
import { constructConfig, getTableDataSource, sameOriginUpdateConfig, type SupportedDataSource, supportedDsTypes } from '../../utils'
import LayerConfigField from './layer-config-field'
import TableOptions from './table-options'
import TableTools from './table-tools'

export interface LayerConfigProps {
  widgetId: string
  layerConfig: ImmutableObject<LayersConfig>
  isMapMode: boolean
  layerDefinition: ILayerDefinition
  layerEditingEnabled: boolean
  isDsAutoRefresh: boolean
  isEditableDs: boolean
  isNewAdd?: boolean
  handleBatchAdd?: (newConfigs: ImmutableArray<LayersConfig>) => void
  onConfigSaved?: () => void
  getLayerModeConfigId?: (dsId: string) => string
  filterDs?: (dsJson: IMDataSourceJson) => boolean
  onChange: (layerConfig: ImmutableObject<LayersConfig>) => void
  onClose: () => void
}

const getStyle = () => {
  return css`
    .layer-config-panel {
      .panel-inner {
        .title {
          max-width: 70%;
        }
      }
      .setting-container {
        height: calc(100% - ${polished.rem(58)});
        overflow: auto;
      }
    }
  `
}

const LayerConfig = (props: LayerConfigProps) => {
  const {
    widgetId, layerConfig, isMapMode, layerDefinition, isEditableDs, isNewAdd,
    handleBatchAdd, onConfigSaved, getLayerModeConfigId, filterDs, onChange, onClose
  } = props
  const [itemLabel, setItemLabel] = React.useState('')
  const [tempUseDs, setTempUseDs] = React.useState<ImmutableArray<UseDataSource>>(null)
  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)
  // isDsAutoRefresh
  const isAutoRefresh = ReactRedux.useSelector((state: IMState) => {
    const appConfig = state?.appStateInBuilder?.appConfig
    const dsInfos = appConfig?.dataSources
    const currentDsId = layerConfig?.useDataSource?.dataSourceId
    if (!currentDsId) return false
    const splitIndex = currentDsId.indexOf('-')
    if (splitIndex < 0) return false
    const rootDsIdFromUseDs = currentDsId.substring(0, splitIndex)
    const layerId = currentDsId.substring(splitIndex + 1)
    const currentRootDsId = layerConfig?.useDataSource?.rootDataSourceId || rootDsIdFromUseDs
    const currentInfo = dsInfos?.[currentRootDsId]?.childDataSourceJsons?.[layerId]
    if (!currentInfo) return false
    const isRefresh = currentInfo?.query?.refreshInterval > 0
    return isRefresh
  })

  const prevIsAutoRefresh = hooks.usePrevious(isAutoRefresh)

  React.useEffect(() => {
    setItemLabel(layerConfig?.name || '')
  }, [layerConfig?.name])

  React.useEffect(() => {
    if (prevIsAutoRefresh !== isAutoRefresh && layerConfig) {
      onChange(layerConfig.set('updateText', isAutoRefresh))
    }
  }, [prevIsAutoRefresh, isAutoRefresh, onChange, layerConfig])

  const layerUseDs = layerConfig?.useDataSource ? Immutable([layerConfig.useDataSource]) : Immutable([])

  const handleDsChange = React.useCallback(async (useDss: UseDataSource[]) => {
    const isBatch = useDss?.length > 1
    if (isBatch) {
      const newConfigs: LayersConfig[] = []
      for (const [index, useDs] of useDss.entries()) {
        if (index === 0) setTempUseDs(Immutable([useDss[0]]))
        try {
          const ds = await DataSourceManager.getInstance().createDataSourceByUseDataSource(useDs) as SupportedDataSource
          const originalIsScene = ds?.type === DataSourceTypes.SceneLayer || ds?.type === DataSourceTypes.BuildingComponentSubLayer
          const dataSource = getTableDataSource(ds)
          const newLayerConfig = constructConfig(dataSource, isMapMode, getLayerModeConfigId, originalIsScene ? ds : undefined)
          newConfigs.push(newLayerConfig)
        } catch (err) {
          console.error(err)
        }
        if (index === useDss.length -1) setTempUseDs(null)
      }
      handleBatchAdd(Immutable(newConfigs))
      onConfigSaved()
    } else {
      const useDs = useDss?.[0]
      if (!useDs) return
      // Same-origin ds, that is, toggle data view or selection view，keep config
      const isSameMainDs = layerConfig && dataSourceUtils.areDerivedFromSameMain(useDs.dataSourceId, layerConfig.useDataSource.dataSourceId)
      try {
        setTempUseDs(Immutable(useDss))
        const ds = await DataSourceManager.getInstance().createDataSourceByUseDataSource(useDs) as SupportedDataSource
        const originalIsScene = ds?.type === DataSourceTypes.SceneLayer || ds?.type === DataSourceTypes.BuildingComponentSubLayer
        const dataSource = getTableDataSource(ds)
        const newLayerConfig = isSameMainDs
          ? sameOriginUpdateConfig(dataSource, layerConfig, getLayerModeConfigId, originalIsScene ? ds : undefined)
          : constructConfig(dataSource, isMapMode, getLayerModeConfigId, originalIsScene ? ds : undefined)
        onChange(Immutable(newLayerConfig))
        onConfigSaved()
      } catch (err) {
        console.error(err)
      } finally {
        setTempUseDs(null)
      }
    }
  }, [isMapMode, layerConfig, getLayerModeConfigId, handleBatchAdd, onChange, onConfigSaved])

  const nameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setItemLabel(value)
  }, [])

  const nameAccept = React.useCallback((value: string) => {
    value = value?.trim()
    value = value === '' ? layerConfig?.name : value
    if (value !== itemLabel) {
      setItemLabel(value)
    }
    onChange(layerConfig.set('name', value))
  }, [itemLabel, layerConfig, onChange])

  return (
    <div className='w-100 h-100' css={getStyle()}>
      {tempUseDs && <Loading type={LoadingType.Secondary} />}
      <div className='w-100 h-100 layer-config-panel'>
        <div className="w-100 d-flex px-4 py-0">
          <PanelHeader
            level={1}
            className='px-0 py-4 panel-inner'
            showClose={!!onClose}
            onClose={onClose}
            title={translate('layerConfig')}>
          </PanelHeader>
        </div>
        <div className='setting-container'>
          <SettingSection title={translate('data')} className="pt-0">
            <SettingRow>
              <DataSourceSelector
                types={supportedDsTypes}
                disableRemove={() => true}
                disableDataSourceList={isMapMode}
                hideDataView={isMapMode}
                useDataSources={tempUseDs || layerUseDs}
                mustUseDataSource
                onChange={handleDsChange}
                closeDataSourceListOnChange
                hideDs={filterDs}
                isMultiple={isNewAdd}
                isBatched={true}
              />
            </SettingRow>
            {(tempUseDs || layerUseDs) && isAutoRefresh &&
              <SettingRow tag='label' label={translate('updateText')}>
                <Switch
                  className='can-x-switch'
                  checked={layerConfig?.updateText === undefined ? true : layerConfig.updateText}
                  onChange={evt => { onChange(layerConfig.set('updateText', evt.target.checked)) }}
                  aria-label={translate('updateText')}
                />
              </SettingRow>
            }
          </SettingSection>
          {layerConfig &&
            <React.Fragment>
              <SettingSection title={translate('label')}>
                <SettingRow>
                  <TextInput
                    size='sm'
                    type='text'
                    className='w-100'
                    value={itemLabel}
                    onChange={nameChange}
                    onAcceptValue={nameAccept}
                    aria-label={translate('label')}
                  />
                </SettingRow>
              </SettingSection>

              <LayerConfigField
                layerConfig={layerConfig}
                layerDefinition={layerDefinition}
                isEditableDs={isEditableDs}
                onChange={onChange}
              />

              <TableOptions layerConfig={layerConfig} onChange={onChange}/>
              <TableTools
                widgetId={widgetId}
                layerConfig={layerConfig}
                layerDefinition={layerDefinition}
                isEditableDs={isEditableDs}
                onChange={onChange}
              />
            </React.Fragment>
          }
        </div>
      </div>
    </div>
  )
}

export default LayerConfig
