/** @jsx jsx */
import { React, jsx, css, uuidv1, DataSourceTypes, loadArcGISJSAPIModule, getAppStore, defaultMessages as jimuCoreMessages, hooks, polished, focusElementInKeyboardMode } from 'jimu-core'
import { Loading, LoadingType, Input, Label, Icon, Button, Alert, CollapsablePanel } from 'jimu-ui'

import { PlusOutlined } from 'jimu-icons/outlined/editor/plus'

import defaultMessages from '../../translations/default'
import type { DataOptions, FeatureCollection, LayerInFeatureCollection } from '../../types'
import { getNextAddedDataId, isIOSDevice, preventDefault } from '../../utils'
import { useTheme } from 'jimu-theme'

export interface DataFileUploadProps {
  className?: string
  widgetId: string
  portalUrl: string
  multiDataOptions: DataOptions[]
  nextOrder: number
  onChange: (multiDataOptions: DataOptions[]) => void
  setErrorMsg: (msg: string) => void
}

interface FileInfo {
  id: string
  name: string
  type: SupportedFileTypes
  data: FormData
  size: number //bytes
}

enum SupportedFileTypes {
  CSV = 'csv',
  GeoJson = 'geojson',
  Shapefile = 'shapefile',
  KML = 'kml',
  GPX = 'gpx'
}

const MaxFileSize: { [key in SupportedFileTypes]: number /** bytes */ } = {
  [SupportedFileTypes.CSV]: 10485760,
  [SupportedFileTypes.GeoJson]: 10485760,
  [SupportedFileTypes.Shapefile]: 2097152,
  // KML size limitaion: https://doc.arcgis.com/en/arcgis-online/reference/kml.htm
  [SupportedFileTypes.KML]: 10485760,
  [SupportedFileTypes.GPX]: 10485760
}

const MaxFileNumber = 30

// value is translate key
enum UploadFileError {
  NotSupportedType = 'notSupportedFileTypeError',
  FailedToUpload = 'failedToUploadError',
  ExceedMaxSize = 'exceedMaxSizeError',
  ExceedMaxRecords = 'exceedMaxRecordsError',
  NoValidData = 'fileHasNoValidData',
  ExceedMaxFileNumber = 'exceedMaxFileNumberError'
}

const UploadFileErrorToMultiFilesError = new Map([
  [UploadFileError.NotSupportedType, 'multiFilesNotSupportedFileTypeError'],
  [UploadFileError.FailedToUpload, 'multiFilesFailedToUploadError'],
  [UploadFileError.ExceedMaxSize, 'multiFilesExceedMaxSizeError'],
  [UploadFileError.ExceedMaxRecords, 'multiFilesExceedMaxRecordsError'],
  [UploadFileError.NoValidData, 'multiFilesHasNoValidData']
])

const { useState, useEffect, useMemo, useRef } = React

const INPUT_ACCEPT = isIOSDevice() ? undefined : Object.values(SupportedFileTypes).map(t => getFileExtension(t)).join(',')

export const DataFileUpload = (props: DataFileUploadProps) => {
  const { className = '', onChange, setErrorMsg, nextOrder, portalUrl, widgetId, multiDataOptions } = props
  const translate = hooks.useTranslation(jimuCoreMessages, defaultMessages)
  const dragToUploadBtnId = useMemo(() => `${widgetId}-drag-to-upload`, [widgetId])
  const clickToUploadBtnId = useMemo(() => `${widgetId}-click-to-upload`, [widgetId])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const uploadingFileInfo = useRef<FileInfo[]>(null)
  const toRemoveFilesInfo = useRef<FileInfo[]>([])

  useEffect(() => {
    onChange(multiDataOptions)
  }, [multiDataOptions, onChange])

  const uploadRef = useRef()

  const handleFileUpload = async (fileInfo: FileInfo) => {
    if (!fileInfo.type) {
      throw new Error(UploadFileError.NotSupportedType)
    }

    if (fileInfo.size > MaxFileSize[fileInfo.type]) {
      throw new Error(UploadFileError.ExceedMaxSize)
    }

    const featureCollection = await generateFeatureCollection(fileInfo, portalUrl)
    const layers = featureCollection?.layers?.filter((ly) => ly?.featureSet?.features?.length > 0)

    if (layers?.length > 0) {
      return layers.map((l: LayerInFeatureCollection, i) => ({
        dataSourceJson: {
          id: getNextAddedDataId(widgetId, nextOrder + i),
          type: DataSourceTypes.FeatureLayer,
          sourceLabel: l.layerDefinition?.name || (i === 0 ? fileInfo.name : `${fileInfo.name} ${i}`)
        },
        order: nextOrder + i,
        restLayer: { ...l, layerDefinition: { ...l.layerDefinition, capabilities: 'Query, Editing, Create, Delete, Update, Extract' } }
      } as DataOptions))
    } else {
      throw new Error(UploadFileError.NoValidData)
    }
  }

  const handleUploadError = (err: any) => {
    if (err.message === UploadFileError.NotSupportedType) {
      return UploadFileError.NotSupportedType
    } else if (err.message === UploadFileError.ExceedMaxSize || err.details?.messages?.[0]?.includes('max size')) { // File exceeds the max size allowed of 10MB.
      return UploadFileError.ExceedMaxSize
    } else if (err.message === UploadFileError.ExceedMaxRecords || err.message?.includes('maximum number')) { // The maximum number of records allowed (1000) has been exceeded.
      return UploadFileError.ExceedMaxRecords
    } else if (err.message === UploadFileError.NoValidData) {
      return UploadFileError.NoValidData
    } else {
      return UploadFileError.FailedToUpload
    }
  }

  const [errors, setErrors] = useState<Array<{ errStr: string, details?: string[], open: boolean }>>(null)

  const onFileChange = async (e) => {
    if (!e.target.files) {
      return
    }

    setIsLoading(true)
    setErrors(null)

    let dataOptions: DataOptions[] = []
    const errorInfos = new Map<UploadFileError, string[]>()

    const files: File[] = Array.from(e.target.files)
    if (files.length > MaxFileNumber) {
      errorInfos.set(UploadFileError.ExceedMaxFileNumber, [])
    } else {
      const fileInfos = files.map(f => getFileInfo(f))
      uploadingFileInfo.current = fileInfos

      await Promise.allSettled(fileInfos.map((fileInfo) => handleFileUpload(fileInfo))).then((results) => {
        results.forEach((result, i) => {
          // Break the process if uploading of the file is canceled.
          const fileInfo = fileInfos[i]
          const fileIsCanceled = toRemoveFilesInfo.current.some(f => f.id === fileInfo.id)
          if (fileIsCanceled) {
            toRemoveFilesInfo.current = toRemoveFilesInfo.current.filter(f => f.id !== fileInfo.id)
            return
          }
          if (result.status === 'fulfilled') {
            if (result.value?.length) {
              dataOptions = dataOptions.concat(result.value)
            }
          } else {
            const errType = handleUploadError(result.reason)
            errorInfos.set(errType, errorInfos.has(errType) ? errorInfos.get(errType).concat(fileInfo.name) : [fileInfo.name])
          }
        })
      })
    }

    if (dataOptions?.length > 0) {
      onChange(multiDataOptions.concat(dataOptions))
    }

    if (errorInfos.size > 0) {
      const errorDetails = Array.from(errorInfos.keys()).map((errType) => {
        const files = errorInfos.get(errType)
        // ExceedMaxFileNumber error
        if (!files.length) {
          return { errStr: translate(errType) }
        }
        // single file has error
        if (files.length === 1 && errorInfos.size === 1) {
          return { errStr: translate(errType, { fileName: files[0] }) }
        }
        // multiple files
        return {
          errStr: translate(UploadFileErrorToMultiFilesError.get(errType), { number: files.length }),
          details: files
        }
      })
      // only one error and describe the error for single file upload
      if (errorDetails.length === 1 && !errorDetails[0].details) {
        setErrorMsg(errorDetails[0].errStr)
      } else {
        setErrors(errorDetails.map((err) => ({ ...err, open: true })))
      }
    }

    setIsLoading(false)
    uploadingFileInfo.current = null
    // Clear value to allow to upload the same file again.
    e.target.value = null

    if (uploadRef.current) {
      focusElementInKeyboardMode(uploadRef.current as HTMLInputElement)
    }
  }

  const onFileRemove = () => {
    toRemoveFilesInfo.current = toRemoveFilesInfo.current.concat(uploadingFileInfo.current)
    uploadingFileInfo.current = null
    setIsLoading(false)
  }

  const [uploadInputFocused, setUploadInputFocused] = useState(false)
  const theme = useTheme()

  const hideErrorsTimer = useRef<NodeJS.Timeout>(null)
  useEffect(() => {
    if (errors?.length) {
      const newTimer = setTimeout(() => {
        if (hideErrorsTimer.current === newTimer) {
          setErrors(null)
          hideErrorsTimer.current = null
        }
      }, 5000)
      hideErrorsTimer.current = newTimer
    }
  }, [errors])

  const closeErrorAlert = (index: number) => {
    const newErrors = [...errors]
    newErrors[index].open = false
    if (newErrors.every(e => !e.open)) {
      setErrors(null)
    } else {
      setErrors(newErrors)
    }
  }

  const getFileUploadingString = (needStyledDynamicText = false) => {
    const uploadingFileNumber = uploadingFileInfo.current?.length
    const isUploadingMultiFiles = uploadingFileNumber > 1
    const stringKey = isUploadingMultiFiles ? 'filesAreUploading' : 'fileIsUploading'
    const dynamicStringKey = isUploadingMultiFiles ? 'number' : 'fileName'
    const dynamicStringValue = isUploadingMultiFiles ? uploadingFileNumber : uploadingFileInfo.current?.[0]?.name
    return translate(stringKey, {
      [dynamicStringKey]: !isUploadingMultiFiles && needStyledDynamicText
        ? <div className='w-100 multiple-lines-truncate font-16'>{dynamicStringValue}</div>
        : dynamicStringValue
    })
  }

  return <div className={`data-file-upload w-100 h-100 pb-4 pt-6 px-4 d-flex ${className}`} css={style}>
    <div className='supported-type-icons d-flex justify-content-around align-items-center px-6 mb-4'>
      <Icon width={13} height={16} icon={require('../../assets/file.svg')} />
      <Icon width={24} height={24} icon={require('../../assets/file1.svg')} />
      <Icon width={32} height={32} icon={require('../../assets/file2.svg')} />
      <Icon width={24} height={24} icon={require('../../assets/file3.svg')} />
      <Icon width={13} height={16} icon={require('../../assets/file.svg')} />
    </div>

    <div className='supported-types'>{translate('supportedTypesHint')}</div>

    <div className='mt-4 drag-area-container'>
      <Label for={dragToUploadBtnId} className='drag-area text-center d-flex'>
        <div className='font-14'>{translate('dropOrBrowseToUpload')}</div>
        <div className='upload-btn-container' title={translate('upload')}>
          <Label for={clickToUploadBtnId} className='upload-btn text-center mt-4 mb-0 text-truncate' css={uploadInputFocused ? css`outline: ${polished.rem(2)} solid ${theme.sys.color.primary.dark}` : ''}>
            <PlusOutlined size={15} className='mr-2' />
            <span>{translate('upload')}</span>
          </Label>
          <Input id={clickToUploadBtnId} title='' className='upload-btn-file-input' type='file' accept={INPUT_ACCEPT} onChange={onFileChange} tabIndex={isLoading ? -1 : 0} ref={uploadRef}
          onFocus={() => { setUploadInputFocused(true) }} onBlur={() => { setUploadInputFocused(false) }} multiple />
        </div>
      </Label>
      <Input id={dragToUploadBtnId} onClick={preventDefault} title='' className='drag-area-file-input' type='file' accept={INPUT_ACCEPT} onChange={onFileChange} tabIndex={-1} />
    </div>

    {
      isLoading &&
      <div className='upload-loading-container' title={getFileUploadingString()}>
        <div className='upload-loading-content'>
          <Loading className='upload-loading' type={LoadingType.Primary} width={30} height={28} />
          <div className='upload-loading-file-name d-flex justify-content-center align-items-center'>
            <div className='w-100 font-14 text-center'>
              {getFileUploadingString(true)}
            </div>
          </div>
          <div className='upload-loading-btn d-flex justify-content-center'>
            <Button type='danger' onClick={onFileRemove}>{translate('cancel')}</Button>
          </div>
        </div>
      </div>
    }
    {
      errors?.length && <div className='errors-container'>
        {errors.map((err, index) => {
          return <Alert
            className='w-100 mb-2' closable withIcon form='basic' type='warning'
            title={err.errStr} open={err.open} key={err.errStr}
            onClose={() => {
              closeErrorAlert(index)
            }}>
              {err.details?.length && <div className='collapse-panel-container'>
                <CollapsablePanel label={translate('details')}>
                  {err.details.map((detail, i) => <p key={i} className='mb-1'>{detail}</p>)}
                </CollapsablePanel>
              </div>}
            </Alert>
        })}
      </div>
    }
  </div>
}

function getFileInfo (file: File): FileInfo {
  const type = getFileType(file.name)
  const name = file.name.replace(`.${type}`, '')
  const data = new FormData()
  data.set('file', file)
  data.set('filetype', type)
  data.set('f', 'json')
  return {
    id: uuidv1(),
    type,
    name,
    data,
    size: file.size
  }
}

function readFileAsText (fileInfo: FileInfo) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader()
    reader.onload = (event: any) => {
      resolve(event.target.result)
    }
    reader.readAsText(fileInfo.data.get('file') as File)
  })
}

function getKmlServiceUrl () {
  const isPortal = getAppStore().getState()?.portalSelf?.isPortal
  if (isPortal) {
    const portalUrl = getAppStore().getState()?.portalUrl
    return `${portalUrl}/sharing/kml`
  }
  const env = window.jimuConfig.hostEnv
  const envHost = env === 'dev' ? 'devext' : env === 'qa' ? 'qa' : ''
  return `https://utility${envHost}.arcgis.com/sharing/kml`
}

async function generateFeatureCollection (fileInfo: FileInfo, portalUrl: string): Promise<FeatureCollection> {
  const esriRequest: typeof __esri.request = await loadArcGISJSAPIModule('esri/request')

  if (fileInfo.type === SupportedFileTypes.KML) {
    const serviceUrl = getKmlServiceUrl()
    const kmlString = await readFileAsText(fileInfo)
    const res = await esriRequest(serviceUrl, {
      query: {
        kmlString: encodeURIComponent(kmlString),
        model: 'simple',
        folders: ''
        // outSR: JSON.stringify(outSpatialReference)
      },
      responseType: 'json'
    })
    return res?.data?.featureCollection as FeatureCollection
  }

  let publishParameters = {}

  // GPX file does not need publishParameters
  if (fileInfo.type !== SupportedFileTypes.GPX) {
    const isPortal = getAppStore().getState()?.portalSelf?.isPortal
    // GeoJSON file in portal does not need analyze
    if (isPortal && fileInfo.type === SupportedFileTypes.GeoJson) {
      publishParameters = {
        targetSR: {
          wkid: 102100,
          latestWkid: 3857
        },
        type: fileInfo.type,
        maxRecordCount: 4000
      }
    } else {
      // 1. Use REST API analyze to get `publishParameters` which is needed in REST API generate.
      const analyzeUrl = `${portalUrl}/sharing/rest/content/features/analyze`
      fileInfo.data.set('analyzeParameters', JSON.stringify({
        enableGlobalGeocoding: true,
        sourceLocale: getAppStore().getState().appContext?.locale ?? 'en' // TODO: use org geocode service
      }))
      const analyzeResponse = await esriRequest(analyzeUrl, {
        body: fileInfo.data,
        method: 'post'
      })
      fileInfo.data.delete('analyzeParameters')
      publishParameters = analyzeResponse?.data?.publishParameters
    }
  }

  // 2. Use REST API generate to get features from the uploaded file.
  const generateUrl = `${portalUrl}/sharing/rest/content/features/generate`
  fileInfo.data.set('publishParameters', JSON.stringify({
    ...publishParameters,
    name: fileInfo.name
  }))
  const generateResponse = await esriRequest(generateUrl, {
    body: fileInfo.data,
    method: 'post'
  })
  fileInfo.data.delete('publishParameters')

  if (generateResponse?.data?.featureCollection) {
    (generateResponse?.data?.featureCollection as FeatureCollection)?.layers?.forEach((ly) => {
      ly.featureSet?.features?.forEach((feature) => {
        ly.layerDefinition?.fields?.forEach((field) => {
          const attrValue = feature.attributes?.[field.name]
          if (field.type === 'esriFieldTypeSmallInteger') {
            if (typeof attrValue === 'boolean') {
              feature.attributes[field.name] = attrValue ? 1 : 0
              return
            }
            if (typeof attrValue !== 'number') {
              feature.attributes[field.name] = null
            }
          }
        })
      })

      // if file name is not included in the layerDefinition, the layer name could be general,
      // like: "points", "polygons", which is not readable when there are too many layers,
      // so we can add the file name as prefix here to increase recognition of the layer name
      if (!ly.layerDefinition?.name?.includes(fileInfo.name)) {
        ly.layerDefinition.name = `${fileInfo.name} - ${ly.layerDefinition.name}`
      }
    })
  }

  return generateResponse?.data?.featureCollection as FeatureCollection
}

function getFileType (name: string): SupportedFileTypes {
  return Object.values(SupportedFileTypes).find(t => name?.endsWith(getFileExtension(t)))
}

function getFileExtension (supportedFileType: SupportedFileTypes): string {
  return supportedFileType === 'shapefile' ? '.zip' : `.${supportedFileType}`
}

const style = css`
  position: relative;
  flex-direction: column;
  color: var(--ref-palette-neutral-1000);

  .font-14 {
    font-size: 14px;
  }

  .font-16 {
    font-size: 16px;
    font-weight: 500;
  }

  .upload-loading-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--ref-palette-white);
    z-index: 2;
  }
  .upload-loading-content {
    position: absolute;
    top: 0;
    bottom: 60px;
    right: 0;
    left: 0;
  }
  .upload-loading-file-name {
    position: absolute;
    width: 200px;
    height: 100px;
    right: calc(50% - 100px);
    top: 80px;
    word-break: break-all;
    overflow: hidden;
  }
  .upload-loading-btn {
    position: absolute;
    width: 200px;
    height: 32px;
    right: calc(50% - 100px);
    top: calc(50% + 80px);
    button.btn-danger {
      background-color: var(--sys-color-error-main);
      border: 0;
    }
  }

  .supported-types {
    font-size: 13px;
  }

  .drag-area-container {
    width: 100%;
    flex: 1
  }
  .drag-area {
    border: 1px dashed var(--ref-palette-neutral-500);
    width: 100%;
    height: 100%;
    user-select: none;
    flex-direction: column;
    justify-content: center;
  }
  .upload-btn {
    border: 1px solid var(--ref-palette-neutral-500);
    color: var(--ref-palette-neutral-1100);
    background-color: var(--ref-palette-white);
    border-radius: 2px;
    line-height: 28px;
    padding-left: 16px;
    padding-right: 16px;
    height: 30px;
    user-select: none;
    max-width: 100%;
  }
  .upload-btn-container:hover {
    .upload-btn {
      background-color: var(--ref-palette-neutral-300) !important;
    }
  }
  .drag-area-container, .upload-btn-container {
    position: relative;
    display: inline-block;
    z-index: 1;
  }
  .upload-btn-file-input, .drag-area-file-input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  .upload-btn-file-input {
    cursor: pointer;
  }

  .errors-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    max-height: 100%;
    overflow-y: auto;
    .jimu-alert-panel-title {
      font-size: 13px;
      font-weight: 400;
    }
    .collapse-label {
      font-size: 13px;
    }
    .collapse-panel-container {
      border-top: 1px solid var(--sys-color-divider-tertiary);
    }
  }

`
