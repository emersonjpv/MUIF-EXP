import type { SettingInfo } from '../config'

export const settingsInfo: SettingInfo[] = [
  {
    name: 'viewerToolsEnabled',
    labelKey: 'viewerToolsToggleLabel',
    subTools: [
      {
        name: 'imageGalleryEnabled',
        labelKey: 'imageGalleryToolToggleLabel'
      },
      {
        name: 'imageEnahncementEnabled',
        labelKey: 'imageEnhancementToolToggleLabel'
      },
      {
        name: 'mapImageConversionToolEnabled',
        labelKey: 'mapImageConversionToolToggleLabel'
      },
      {
        name: 'showPopupsActionEnabled',
        labelKey: 'showPopupsActionToggleLabel'
      },
      {
        name: 'navigationToolEnabled',
        labelKey: 'navigationToolToggleLabel'
      },
      {
        name: 'measurementToolsEnabled',
        labelKey: 'measurementToolsToggleLabel'
      },
      {
        name: 'imageOverlaysEnabled',
        labelKey: 'imageOverlaysToggleLabel',
        subTools: [
          {
            name: 'dataCaptureEnabled',
            labelKey: 'digitizationToggleLabel'
          }
        ]
      }
    ]
  }
]
