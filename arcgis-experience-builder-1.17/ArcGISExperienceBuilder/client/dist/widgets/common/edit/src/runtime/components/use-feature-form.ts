/** @jsx jsx */
import { React, dataSourceUtils, type FeatureDataRecord } from 'jimu-core'
import FeatureForm from 'esri/widgets/FeatureForm'
import type FormTemplate from 'esri/form/FormTemplate'
import Graphic from 'esri/Graphic'
import { getTimezone } from './utils'
import { getDataSourceById, getEditDataSource } from '../../utils'

interface UseFeatureFormOptions {
  activeId: string
  activeLayer: __esri.SubtypeSublayer | __esri.FeatureLayer
  activeFeature: FeatureDataRecord['feature']
  formTemplate: FormTemplate
  editContainer: React.RefObject<HTMLDivElement>
  onValueChange: (change: boolean, submittable: boolean) => void
}

const useFeatureForm = (options: UseFeatureFormOptions) => {
  const { activeId, activeLayer, activeFeature, formTemplate, editContainer, onValueChange } = options

  const featureForm = React.useRef<FeatureForm>(null)
  const destroyFeatureForm = React.useCallback(() => {
    if (featureForm.current?.destroy && !featureForm.current?.destroyed) {
      featureForm.current.destroy()
    }
  }, [])
  const renderFeatureForm = React.useCallback(async () => {
    try {
      destroyFeatureForm()
      const ds = getDataSourceById(activeId)
      const dataSource = getEditDataSource(ds)
      const container = document && document.createElement('div')
      editContainer.current.appendChild(container)
      let feature: __esri.Graphic
      if (!activeFeature) {
        feature = new Graphic({ layer: activeLayer })
      } else {
        const objectIdField = dataSource.getIdField() || 'OBJECTID'
        const recordQuery = `${objectIdField} IN (${activeFeature.attributes[objectIdField]})`
        const result = await dataSource.query({
          where: recordQuery,
          returnGeometry: true,
          notAddFieldsToClient: true,
          outFields: ['*']
        })
        const fullRecord = result?.records?.[0] as FeatureDataRecord
        if (!fullRecord) return
        feature = await dataSourceUtils.changeToJSAPIGraphic(fullRecord.feature)
      }
      if (!activeLayer.fields) {
        await activeLayer.load()
      }
      featureForm.current = new FeatureForm({
        container: container,
        feature,
        layer: activeLayer,
        formTemplate,
        timeZone: getTimezone(dataSource)
      })

      featureForm.current.on('value-change', (changedValue) => {
        const idField = dataSource.getIdField()
        const { feature, fieldName } = changedValue
        // Exclude cases where the 'value-change' is caused by dataSource select.
        // If the changed field has an idField, the change is caused by dataSource select change.
        if (fieldName === idField) return
        const submittable = featureForm.current.viewModel.submittable
        const originalFormValues = feature.attributes
        const newFormValues = featureForm.current.viewModel.getValues()
        let change = false
        if (newFormValues) {
          for (const key in newFormValues) {
            if (originalFormValues?.[key] !== newFormValues[key]) {
              change = true
              break
            }
          }
        }
        onValueChange(change, submittable)
      })
    } catch (err) {
      console.error(err)
    }
  }, [activeFeature, activeId, activeLayer, destroyFeatureForm, editContainer, formTemplate, onValueChange])

  const timer = React.useRef<number>(null)
  React.useEffect(() => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      if (activeId && activeLayer && editContainer.current) {
        renderFeatureForm()
      } else {
        destroyFeatureForm()
      }
    }, 500)
  }, [activeId, activeLayer, editContainer, destroyFeatureForm, renderFeatureForm])

  return featureForm
}

export default useFeatureForm
