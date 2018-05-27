import {SELECT_DOT, DESELECT} from 'actions/dot'
import {newSelection} from 'utils'

const initialState = {from: null, to: null}

const selection = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DOT:
      return newSelection(state, action.index)
    case DESELECT:
      return {...initialState}
    default:
      return state
  }
}

export default selection
