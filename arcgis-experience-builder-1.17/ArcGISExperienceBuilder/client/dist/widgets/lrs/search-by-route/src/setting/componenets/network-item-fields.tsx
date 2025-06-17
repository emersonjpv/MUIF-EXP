/** @jsx jsx */
import { React, jsx, type ImmutableObject, hooks } from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import type { NetworkItem } from '../../config'
import { Checkbox, Switch } from 'jimu-ui'
import { derivedFields, distanceField, measureFields, stationField, toRouteField } from '../../constants'
import defaultMessages from '../translations/default'

interface Props {
  networkItem?: ImmutableObject<NetworkItem>
  networkItems?: ImmutableObject<NetworkItem[]>
  onPropertyChanged: (prop: string, value: any, dsUpdateRequired?: boolean) => void
  onPropertiesChanged: (prop: string[], value: any[], dsUpdateRequired?: boolean) => void
}

export function NetworkItemFields (props: Props) {
  const { networkItem, networkItems, onPropertyChanged, onPropertiesChanged } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages)
  const [isShowFields, setShowFields] = React.useState<boolean>(false)
  const [isCheckAllLrsFields, setCheckAllLrsFields] = React.useState<boolean>(false)
  const [isCheckAllAdditionalFields, setCheckAllAdditionalFields] = React.useState<boolean>(false)
  const [hasDerivedNetwork, setDerivedNetwork] = React.useState<boolean>()

  React.useEffect(() => {
    const lrsNetworkId = networkItem.lrsNetworkId
    const derivedNetInfo = networkItems.find(item => (lrsNetworkId === item.derivedFromNetworkId) && item.isDerived)
    if (derivedNetInfo?.isDerived) setDerivedNetwork(true)
    else setDerivedNetwork(false)
    const checkedFieldsLrs = []
    const checkedFieldsNonLrs = []

    const savedLrsFields = networkItem.lrsFields
    const savedNonLrsFields = networkItem.additionalFields
    if (savedLrsFields) {
      savedLrsFields.forEach((field) => {
        checkedFieldsLrs.push(field)
      })
    } else {
      const defaultChecked = networkItem.defaultChecked
      if (!defaultChecked) return
      defaultChecked.forEach((field) => {
        checkedFieldsLrs.push(field)
      })
    }

    if (savedNonLrsFields) {
      savedNonLrsFields.forEach((field) => {
        checkedFieldsNonLrs.push(field)
      })
    } else {
      const defaultChecked = getAdditionalFields()
      if (!defaultChecked) return
      defaultChecked.forEach((field) => {
        checkedFieldsNonLrs.push(field.value)
      })
    }

    if (networkItem?.lrsFields?.length === networkItem?.layerFields?.length) {
        // Set checkAllLrsFields to true if all fields are checked
        setCheckAllLrsFields(true)
        const fields = networkItem.layerFields
        fields.forEach((field) => {
          setPropValLrs(field.jimuName, true)
        })
    } else {
      setCheckAllLrsFields(false)
    }

    if (networkItem?.additionalFields?.length === getAdditionalFields()?.length) {
      // Set checkAllAdditioalFields to true if all fields are checked
      setCheckAllAdditionalFields(true)
      const fields1 = getAdditionalFields()
      fields1.forEach((field) => {
        setPropValNonLrs(field.value, true)
      })
    } else {
      setCheckAllAdditionalFields(false)
    }

    setShowFields(networkItem.showAdditionalFields)
    const props = ['lrsFields', 'additionalFields']
    const values = [checkedFieldsLrs, checkedFieldsNonLrs]
    onPropertiesChanged(props, values, true)
  }, [networkItem.name, hasDerivedNetwork])

  const setPropValLrs = (fieldName, value) => {
    const updatedFields = networkItem.lrsFields.asMutable()
    if (fieldName) {
      if (value && !networkItem.lrsFields?.includes(fieldName)) {
        updatedFields.push(fieldName)
      } else if (!value && networkItem.lrsFields?.includes(fieldName)) {
        const index = updatedFields.indexOf(fieldName)
        if (index !== -1) {
          updatedFields.splice(index, 1)
        }
      }
    }
    onPropertyChanged('lrsFields', updatedFields, true)
    if (updatedFields.length === networkItem.layerFields.length) {
      setCheckAllLrsFields(true)
    } else {
      setCheckAllLrsFields(false)
    }
  }

  const setPropValNonLrs = (fieldName, value) => {
    const updatedFields = networkItem.additionalFields.asMutable()
    if (fieldName) {
      if (value && !networkItem.additionalFields?.includes(fieldName)) {
        updatedFields.push(fieldName)
      } else if (!value && networkItem.additionalFields?.includes(fieldName)) {
        const index = updatedFields.indexOf(fieldName)
        if (index !== -1) {
          updatedFields.splice(index, 1)
        }
      }
    }
    onPropertyChanged('additionalFields', updatedFields, true)
    if (updatedFields.length === getAdditionalFields().length) {
      setCheckAllAdditionalFields(true)
    } else {
      setCheckAllAdditionalFields(false)
    }
  }

  const renderNetworkFields = () => {
    const fields = networkItem.layerFields
    if (!fields) return
    const results = []
    fields.forEach((field) => {
      results.push(
        <div>
          <Checkbox
            checked={networkItem.lrsFields?.includes(field.jimuName)}
            onClick={(e) => {
              setPropValLrs(field.jimuName, e.currentTarget.checked)
            }}
          />
          <span style={{ paddingLeft: '0.5rem' }}>{field.alias}</span>
        </div>
      )
    })
    return results
  }

  const getAdditionalFields = () => {
    const fields = []
    fields.push({
      label: measureFields.at(0).label,
      value: measureFields.at(0).value
    })
    fields.push({
      label: measureFields.at(1).label,
      value: measureFields.at(1).value
    })
    if (hasDerivedNetwork) {
      fields.push({
        label: derivedFields.at(0).label,
        value: derivedFields.at(0).value
      })
      fields.push({
        label: derivedFields.at(1).label,
        value: derivedFields.at(1).value
      })
      fields.push({
        label: derivedFields.at(2).label,
        value: derivedFields.at(2).value
      })
      fields.push({
        label: derivedFields.at(3).label,
        value: derivedFields.at(3).value
      })
    }
    fields.push({
      label: distanceField.label,
      value: distanceField.value
    })
    fields.push({
      label: stationField.at(0).label,
      value: stationField.at(0).value
    })
    fields.push({
      label: stationField.at(1).label,
      value: stationField.at(1).value
    })
    fields.push({
      label: stationField.at(2).label,
      value: stationField.at(2).value
    })

    if (networkItem?.supportsLines) {
      fields.push({
        label: toRouteField.at(0).label,
        value: toRouteField.at(0).value
      })
      fields.push({
        label: toRouteField.at(1).label,
        value: toRouteField.at(1).value
      })
      fields.push({
        label: toRouteField.at(2).label,
        value: toRouteField.at(2).value
      })
      fields.push({
        label: toRouteField.at(3).label,
        value: toRouteField.at(3).value
      })
      fields.push({
        label: toRouteField.at(4).label,
        value: toRouteField.at(4).value
      })
    }
    return fields
  }

  const renderAdditionalFields = () => {
    const results = []
    const fields = getAdditionalFields()
    fields.forEach((field) => {
      results.push(
        <div>
          <Checkbox
            checked={networkItem.additionalFields?.includes(field.value)}
            onClick={(e) => {
              setPropValNonLrs(field.value, e.currentTarget.checked)
            }}
          />
          <span style={{ paddingLeft: '0.5rem' }}>{field.label}</span>
        </div>
      )
    })
    return results
  }

  const onToggleAdditionalFields = (e) => {
    onPropertyChanged('showAdditionalFields', e.target.checked, true)
    setShowFields(e.target.checked)
  }

  const onChangeCheckAllLrsFields = (checked) => {
    setCheckAllLrsFields(checked)
    const updatedFields = networkItem.lrsFields.asMutable()
    const fields = networkItem.layerFields
    if (!fields) return
    fields.forEach((field) => {
      const fieldName = field.jimuName
      const value = checked
      if (fieldName) {
        if (value && !networkItem.lrsFields?.includes(fieldName)) {
          updatedFields.push(fieldName)
        } else if (!value && networkItem.lrsFields?.includes(fieldName)) {
          const index = updatedFields.indexOf(fieldName)
          if (index !== -1) {
            updatedFields.splice(index, 1)
          }
        }
      }
    })
    onPropertiesChanged(['lrsFields', 'checkAllLrsFields'], [updatedFields, checked], true)
  }

  const onChangeCheckAllAdditionalFields = (checked) => {
    setCheckAllAdditionalFields(checked)
    const updatedFields = networkItem.additionalFields.asMutable()
    const fields = getAdditionalFields()
    if (!fields) return
    fields.forEach((field) => {
      const fieldName = field.value
      const value = checked
      if (fieldName) {
        if (value && !networkItem.additionalFields?.includes(fieldName)) {
          updatedFields.push(fieldName)
        } else if (!value && networkItem.additionalFields?.includes(fieldName)) {
          const index = updatedFields.indexOf(fieldName)
          if (index !== -1) {
            updatedFields.splice(index, 1)
          }
        }
      }
    })
    onPropertiesChanged(['additionalFields', 'checkAllAdditionalFields'],[updatedFields, checked], true)
  }

  const networkFields = renderNetworkFields()
  const additionalFields = renderAdditionalFields()

  return (
    <SettingSection role='group'>
        <SettingRow tag='label' aria-label={getI18nMessage('advancedFieldDisplay')} flow='no-wrap' label={getI18nMessage('advancedFieldDisplay')}>
          <Switch
            checked={isShowFields}
            onChange={onToggleAdditionalFields}
          />
        </SettingRow>
        {isShowFields && (
          <div style={{ paddingTop: '1rem' }}>
            <SettingRow aria-label={getI18nMessage('networkFields')} flow='no-wrap'
            label={getI18nMessage('networkFields')}>
              <Checkbox
                checked={isCheckAllLrsFields}
                onClick={(e) => {
                  onChangeCheckAllLrsFields(e.currentTarget.checked)
                }}
              />
            </SettingRow>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.7rem', marginBottom: '0.7rem', marginLeft: '0.7rem' }}>{networkFields}</div>
            <SettingRow aria-label={getI18nMessage('additionalFields')} flow='no-wrap'
              label={getI18nMessage('additionalFields')}>
                <Checkbox
                  checked={isCheckAllAdditionalFields}
                  onClick={(e) => {
                    onChangeCheckAllAdditionalFields(e.currentTarget.checked)
                  }}
                />
            </SettingRow>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.7rem', marginLeft: '0.7rem' }}>{additionalFields}</div>
          </div>
        )}
    </SettingSection>
  )
}
