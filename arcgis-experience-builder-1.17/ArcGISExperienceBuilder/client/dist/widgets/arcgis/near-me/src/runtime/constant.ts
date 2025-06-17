import defaultMessages from './translations/default'

export const unitOptions = [
  { value: 'miles', label: defaultMessages.miles },
  { value: 'meters', label: defaultMessages.meters },
  { value: 'kilometers', label: defaultMessages.kilometers },
  { value: 'feet', label: defaultMessages.feet },
  { value: 'yards', label: defaultMessages.yards }
]

export const distanceUnitWithAbbr = [
  {
    value: 'meters',
    abbreviation: 'metersAbbreviation'
  },
  {
    value: 'feet',
    abbreviation: 'feetAbbreviation'
  },
  {
    value: 'kilometers',
    abbreviation: 'kilometersAbbreviation'
  },
  {
    value: 'miles',
    abbreviation: 'milesAbbreviation'
  },
  {
    value: 'yards',
    abbreviation: 'yardsAbbreviation'
  }
]

export const defaultPageOptions = [
  { value: 'a3Portrait', height: 16.50, width: 11.70},
  { value: 'a3Landscape', height: 11.70, width: 16.50},
  { value: 'a4Portrait', height: 11.70, width: 8.30},
  { value: 'a4Landscape', height: 8.30, width: 11.70},
  { value: 'letterAnsiAPortrait', height: 11.00, width: 8.50},
  { value: 'letterAnsiALandscape', height: 8.50, width: 11.00},
  { value: 'tabloidAnsiBPortrait', height: 17.00, width: 11.00},
  { value: 'tabloidAnsiBLandscape', height: 11.00, width: 17.00}
]

export const enum PageOrientation {
  Portrait = 'Portrait',
  Landscape = 'Landscape'
}