import {paletteSize as size} from 'utils'
import {SET_PALETTE_SIZE} from 'actions/palette'

const initialState = size()

const paletteSize = (state = initialState, action) => {
  switch (action.type) {
    case SET_PALETTE_SIZE:
      return action.size
    default:
      return state
  }
}

export default paletteSize
