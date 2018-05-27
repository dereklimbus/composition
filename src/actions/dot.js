import {makeActionCreator} from 'actions/utils'

export const MOUSE_OVER_DOT = 'MOUSE_OVER_DOT'
export const mouseOverDot = makeActionCreator(MOUSE_OVER_DOT, 'index')

export const MOUSE_OUT_DOT = 'MOUSE_OUT_DOT'
export const mouseOutDot = makeActionCreator(MOUSE_OUT_DOT)

export const SELECT_DOT = 'SELECT_DOT'
export const selectDot = (e, index) => {
  e.stopPropagation()
  return {type: SELECT_DOT, index}
}

export const DESELECT = 'DESELECT'
export const deselect = makeActionCreator(DESELECT)
