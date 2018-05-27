import {connect} from 'react-redux'
import {mouseListener} from 'containers/utils'
import {mouseOverDot, mouseOutDot, selectDot} from 'actions/dot'
import {NORMAL_HOVER_RATIO, TOTAL_SIDE_DOT_COUNT} from 'settings'
import {selectionPreview} from 'containers/utils'
import Dot from 'components/Dot'
import PropTypes from 'prop-types'

const isSelected = (index, selection) => (
  selection.from !== null &&
  index.x >= selection.from.x &&
  index.x <= selection.to.x &&
  index.y >= selection.from.y &&
  index.y <= selection.to.y
)

const origin = (index, selection, sideDotCount, mouseOverDot) => {
  const origin = {
    x: (index.x - (TOTAL_SIDE_DOT_COUNT - sideDotCount) / 2) / sideDotCount,
    y: (index.y - (TOTAL_SIDE_DOT_COUNT - sideDotCount) / 2) / sideDotCount
  }

  if (!isSelected(index, selectionPreview(selection, mouseOverDot))) {
    origin.x += (1 - NORMAL_HOVER_RATIO) / 2 / sideDotCount
    origin.y += (1 - NORMAL_HOVER_RATIO) / 2 / sideDotCount
  }

  return origin
}

const sideLength = (index, selection, sideDotCount, mouseOverDot) => {
  if (!isSelected(index, selectionPreview(selection, mouseOverDot))) {
    return 1 / sideDotCount * NORMAL_HOVER_RATIO
  } else {
    return 1 / sideDotCount
  }
}

const color = (index, dotColors, mouseOverPaint, selection) => {
  let color = dotColors[index.x][index.y]
  if (isSelected(index, selection) && (mouseOverPaint !== null)) {
    color = mouseOverPaint
  }
  return color
}

const mapStateToProps = (state, ownProps) => {
  const {
    dotColors,
    mouseOverDot,
    mouseOverPaint,
    selection,
    sideDotCount
  } = state
  const {index} = ownProps

  return {
    origin: origin(index, selection, sideDotCount, mouseOverDot),
    sideLength: sideLength(index, selection, sideDotCount, mouseOverDot),
    color: color(index, dotColors, mouseOverPaint, selection)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseOver: mouseListener(() => {dispatch(mouseOverDot(ownProps.index))}),
  onMouseOut: mouseListener(() => {dispatch(mouseOutDot())}),
  onSelect: (e) => {dispatch(selectDot(e, ownProps.index))}
})

const IndexedDot = connect(mapStateToProps, mapDispatchToProps)(Dot)

IndexedDot.propTypes = {
  index: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
}

export default IndexedDot
