import {MOUSE_OVER_PAINT, MOUSE_OUT_PAINT} from 'actions/paint'

const initialState = null

const mouseOverPaint = (state = initialState, action) => {
	switch (action.type) {
		case MOUSE_OVER_PAINT:
			return action.color
		case MOUSE_OUT_PAINT:
			return null
		default:
			return state
	}
}

export default mouseOverPaint
