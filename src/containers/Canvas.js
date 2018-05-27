import {connect} from 'react-redux'
import {TOTAL_SIDE_DOT_COUNT} from 'settings'
import {wheel, touchStart, touchMove, touchEnd} from 'actions/canvas'
import ZoomableCanvas from 'components/ZoomableCanvas'

const mapStateToProps = (state) => ({
	range: {
		from: (TOTAL_SIDE_DOT_COUNT - state.sideDotCount) / 2,
		to: (TOTAL_SIDE_DOT_COUNT + state.sideDotCount) / 2
	}
})

const mapDispatchToProps = (dispatch) => ({
	onWheel: (e) => {dispatch(wheel(e))},
	onTouchStart: (e) => {touchStart(e)},
	onTouchMove: (e) => {dispatch(touchMove(e))},
	onTouchEnd: () => {touchEnd()}
})

const Canvas = connect(mapStateToProps, mapDispatchToProps)(ZoomableCanvas)

export default Canvas
