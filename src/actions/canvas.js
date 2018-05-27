import {maxSideDotCount} from 'utils'
import {makeActionCreator} from 'actions/utils'
import {
  MIN_SIDE_DOT_COUNT,
  MIN_ZOOM_PAN_DELTA,
  ZOOM_PAN_RESET_WAIT
} from 'settings'
import ReduxThunk from 'redux-thunk'

let timeoutID = null
let deltaY = null
let clientY = null

export const wheel = (e) => (dispatch, getState) => {
  if (timeoutID !== null) {
    window.clearTimeout(timeoutID)
  }
  timeoutID = window.setTimeout(
    () => {deltaY = timeoutID = null},
    ZOOM_PAN_RESET_WAIT
  )

  dispatch(updateDeltaY(e.deltaY))
}

export const touchStart = (e) => {
  if (e.targetTouches.length === 1) {
    clientY = e.targetTouches[0].clientY
    deltaY = 0
  } else {
    clientY = deltaY = null
  }
}

export const touchMove = (e) => (dispatch, getState) => {
  if (clientY !== null) {
    const touchClientY = e.targetTouches[0].clientY
    const touchDeltaY = clientY - touchClientY
    dispatch(updateDeltaY(touchDeltaY))
    clientY = touchClientY
  }
}

export const touchEnd = () => {clientY = deltaY = null}

const updateDeltaY = (eventDeltaY) => (dispatch, getState) => {
  if (eventDeltaY * deltaY < 0) {
    deltaY = 0
  }
  deltaY += eventDeltaY

  if (Math.abs(deltaY) > MIN_ZOOM_PAN_DELTA) {
    const sign = deltaY / Math.abs(deltaY)
    const delta = Math.floor(Math.abs(deltaY) / MIN_ZOOM_PAN_DELTA) * sign
    dispatch(zoom(delta))
    deltaY -= delta * MIN_ZOOM_PAN_DELTA
  }
}

const zoom = (delta) => (dispatch, getState) => {
  const {sideDotCount} = getState()
  dispatch(
    setSideDotCount(
      Math.min(
        maxSideDotCount(),
        Math.max(MIN_SIDE_DOT_COUNT, sideDotCount + delta * 2)
      )
    )
  )
}

export const SET_SIDE_DOT_COUNT = 'SET_SIDE_DOT_COUNT'
const setSideDotCount = makeActionCreator(SET_SIDE_DOT_COUNT, 'count')

export const PAINT = 'PAINT'
export const paint = makeActionCreator(PAINT, 'from', 'to', 'color')

export const resize = () => (dispatch, getState) => {
  const {sideDotCount} = getState()
  const max = maxSideDotCount()
  if (sideDotCount > max) {
    dispatch(setSideDotCount(max))
  }
}

export const pressKey = (key) => (dispatch, getState) => {
  if (key === '=') {
    dispatch(zoom(-1))
  } else if (key === '-') {
    dispatch(zoom(1))
  }
}
