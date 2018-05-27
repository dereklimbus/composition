import {PAINT} from 'actions/canvas'
import {TOTAL_SIDE_DOT_COUNT, INITIAL_COLOR} from 'settings'

const initialState = new Array(TOTAL_SIDE_DOT_COUNT).fill(
	new Array(TOTAL_SIDE_DOT_COUNT).fill(INITIAL_COLOR)
)

const dotColors = (state = initialState, action) => {
	switch (action.type) {
		case PAINT:
			const colors = JSON.parse(JSON.stringify(state))
			for (let x = action.from.x; x <= action.to.x; x++) {
				for (let y = action.from.y; y <= action.to.y; y++) {
					colors[x][y] = action.color
				}
			}
			return colors
		default:
			return state
	}
}

export default dotColors
