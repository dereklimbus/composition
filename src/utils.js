import {
  CANVAS_WINDOW_RATIO,
  TOUCH_DOT_MIN_SIDE_LENGTH,
  WHEEL_DOT_MIN_SIDE_LENGTH
} from 'settings'

export const maxSideDotCount = () => {
  const windowSideLength = Math.min(window.innerWidth, window.innerHeight)
	const canvasSideLength = windowSideLength * CANVAS_WINDOW_RATIO
  const dotMinSideLength =
    isTouchScreen() ? TOUCH_DOT_MIN_SIDE_LENGTH : WHEEL_DOT_MIN_SIDE_LENGTH
	const maxSideDotCount = Math.floor(canvasSideLength / dotMinSideLength)
  const evened =
    maxSideDotCount % 2 === 0 ? maxSideDotCount : maxSideDotCount - 1
  return evened
}

export const isTouchScreen = () => (
  "ontouchstart" in document.documentElement
)

export const newSelection = (selection, index) => {
  if (selection.from === null) {
    return {from: index, to: index}
  } else {
    return {
      from: {
        x: Math.min(selection.from.x, index.x),
        y: Math.min(selection.from.y, index.y)
      },
      to: {
        x: Math.max(selection.to.x, index.x),
        y: Math.max(selection.to.y, index.y)
      }
    }
  }
}

export const paletteSize = () => (
  (maxSideDotCount() >= 9) ? 'full' : 'basic'
)
