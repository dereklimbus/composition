import {makeActionCreator} from 'actions/utils'
import {paletteSize} from 'utils'
import ReduxThunk from 'redux-thunk'

export const resize = () => (dispatch, getState) => {
  const size = paletteSize()
  if (size !== getState().paletteSize) {
    dispatch(setPaletteSize(size))
  }
}

export const SET_PALETTE_SIZE = 'SET_PALETTE_SIZE'
const setPaletteSize = makeActionCreator(SET_PALETTE_SIZE, 'size')
