import {maxSideDotCount} from 'utils'
import {SET_SIDE_DOT_COUNT} from 'actions/canvas'

const initialState = maxSideDotCount()

const sideDotCount = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDE_DOT_COUNT:
      return action.count
    default:
      return state
  }
}

export default sideDotCount
