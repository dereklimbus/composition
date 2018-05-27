import {MOUSE_OVER_DOT, MOUSE_OUT_DOT} from 'actions/dot'

const initialState = null

const mouseOverDot = (state = initialState, action) => {
	switch (action.type) {
		case MOUSE_OVER_DOT:
			return action.index
		case MOUSE_OUT_DOT:
			return null
		default:
			return state
	}
}

export default mouseOverDot
