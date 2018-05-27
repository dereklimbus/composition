import {makeActionCreator} from 'actions/utils'
import {paint} from 'actions/canvas'
import ReduxThunk from 'redux-thunk'

export const MOUSE_OVER_PAINT = 'MOUSE_OVER_PAINT'
export const mouseOverPaint = makeActionCreator(MOUSE_OVER_PAINT, 'color')

export const MOUSE_OUT_PAINT = 'MOUSE_OUT_PAINT'
export const mouseOutPaint = makeActionCreator(MOUSE_OUT_PAINT)

export const selectPaint = (e, color) => (dispatch, getState) => {
  e.stopPropagation()

  const {selection} = getState()
  if (selection.from !== null) {
    dispatch(paint(selection.from, selection.to, color))
  }
}
