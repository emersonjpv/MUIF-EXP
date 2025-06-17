import type { IMConfig, ScaleRange } from './config'

export type CustomPopupDockPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export type PopupDockPosition = 'auto' | CustomPopupDockPosition

export const CustomDockPositionArray: CustomPopupDockPosition[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']

export function getValidPopupDockPosition (config: IMConfig): PopupDockPosition {
  let result: PopupDockPosition = null

  if (config && config.popupDockPosition) {
    if (config.popupDockPosition === 'auto' || CustomDockPositionArray.includes(config.popupDockPosition)) {
      result = config.popupDockPosition
    }
  }

  return result
}

export interface FinalScaleRange {
  isScaleRangeValid: boolean
  finalMinScale: number
  finalMaxScale: number
}

/**
 * This method will calculate the final scale range for the view, the result is definitely not empty.
 * @param view
 * @param configScaleRange
 * @returns
 */
export function getFinalScaleRangeForView (view: __esri.View, configScaleRange: ScaleRange): FinalScaleRange {
  // If minScale/maxScale is 0, means there is no limit for minScale/maxScale.
  let result: FinalScaleRange = null

  if (view.type === '2d' && configScaleRange) {
    // Note, minScale >= maxScale
    const lodScaleRange = getMinScaleAndMaxScaleByLods(view)
    const lodMinScale = lodScaleRange?.minScale
    const lodMaxScale = lodScaleRange?.maxScale
    const currScale = (view as __esri.MapView).scale
    result = getFinalScaleRange(currScale, lodMinScale, lodMaxScale, configScaleRange)
  }

  if (!result) {
    result = {
      isScaleRangeValid: true,
      finalMinScale: 0,
      finalMaxScale: 0
    }
  }

  return result
}

// This method maybe return { minScale: null, maxScale: null } if no lods.
export function getMinScaleAndMaxScaleByLods (view: __esri.View): ScaleRange {
  // Note, minScale >= maxScale
  let minScale: number = null
  let maxScale: number = null

  const lods = (view as any)?.constraintsInfo?.lods as __esri.LOD[]

  if (lods && lods.length > 0) {
    const scales: number[] = []

    lods.forEach(lod => {
      const scale = lod?.scale

      if (typeof scale === 'number' && scale > 0) {
        scales.push(scale)
      }
    })

    if (scales.length > 0) {
      minScale = Math.max(...scales)
      maxScale = Math.min(...scales)
    }
  }

  const scaleRange: ScaleRange = {
    minScale,
    maxScale
  }

  return scaleRange
}

export function getFinalScaleRange (currScale: number, lodMinScale: number, lodMaxScale: number, configScaleRange: ScaleRange): FinalScaleRange {
  // If minScale/maxScale is 0, means there is no limit for minScale/maxScale.
  const result: FinalScaleRange = {
    isScaleRangeValid: true,
    finalMinScale: 0,
    finalMaxScale: 0
  }

  if (configScaleRange) {
    // Note, minScale(bigScale) > maxScale(smallScale)
    // LOD scales:        small [lodMaxScale, lodMinScale] big
    // scaleRange scales: small [configMaxScale, configMinScale] big

    const configMinScale = configScaleRange.minScale
    const configMaxScale = configScaleRange.maxScale
    const configBigScale = isValidScale(configMinScale) ? configMinScale : Infinity
    const configSmallScale = isValidScale(configMaxScale) ? configMaxScale : 0
    const lodBigScale = isValidScale(lodMinScale) ? lodMinScale : Infinity
    const lodSmallScale = isValidScale(lodMaxScale) ? lodMaxScale : 0

    // config range: configSmallScale____________________configBigScale
    // lod range:    lodSmallScale____________________lodBigScale
    const intersection = getRangeIntersection([configSmallScale, configBigScale], [lodSmallScale, lodBigScale])

    if (intersection) {
      const [intersectionSmallScale, intersectionBigScale] = intersection
      result.isScaleRangeValid = true
      result.finalMinScale = getValidScale(intersectionBigScale)
      result.finalMaxScale = getValidScale(intersectionSmallScale)

      if (result.finalMinScale === lodMinScale) {
        result.finalMinScale = 0
      }

      if (result.finalMaxScale === lodMaxScale) {
        result.finalMaxScale = 0
      }
    } else {
      result.isScaleRangeValid = false
      result.finalMinScale = currScale
      result.finalMaxScale = currScale
    }
  }

  return result
}

function isValidScale(scale: number): boolean {
  // don't use >=
  return typeof scale === 'number' && isFinite(scale) && scale > 0
}

function getValidScale(scale: number): number {
  // return 0 if scale is Infinity
  return isFinite(scale) ? scale : 0
}

// getRangeIntersection([0, 2], [1, 3]) => [1, 2]
// getRangeIntersection([0, 4], [1, 3]) => [1, 3]
// getRangeIntersection([0, 1], [1, 2]) => [1, 1]
// getRangeIntersection([0, 2], [3, 4]) => null
function getRangeIntersection(range1: [number, number], range2: [number, number]): [number, number] | null {
  const min1 = Math.min(...range1)
  const max1 = Math.max(...range1)
  const min2 = Math.min(...range2)
  const max2 = Math.max(...range2)

  const start = Math.max(min1, min2);
  const end = Math.min(max1, max2);

  if (start > end) {
    return null;
  }

  return [start, end];
}