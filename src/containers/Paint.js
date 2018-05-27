import {connect} from 'react-redux'
import {mouseListener} from 'containers/utils'
import {mouseOverPaint, mouseOutPaint, selectPaint} from 'actions/paint'
import {selectionPreview} from 'containers/utils'
import PaintButton from 'components/PaintButton'
import PropTypes from 'prop-types'

const isSelected = (color, selection, dotColors, mouseOverDot) => {
  const preview = selectionPreview(selection, mouseOverDot)
  if (preview.from === null) {
    return false
  }

  for (let x = preview.from.x; x <= preview.to.x; x++) {
    for (let y = preview.from.y; y <= preview.to.y; y++) {
      if (dotColors[x][y] !== color) {
        return false
      }
    }
  }

  return true
}

const mapStateToProps = (state, ownProps) => {
  const {selection, dotColors, mouseOverDot} = state
  const {color} = ownProps

  return {
    color,
    selected: isSelected(color, selection, dotColors, mouseOverDot)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseOver: mouseListener(() => {dispatch(mouseOverPaint(ownProps.color))}),
  onMouseOut: mouseListener(() => {dispatch(mouseOutPaint())}),
  onSelect: (e) => {dispatch(selectPaint(e, ownProps.color))}
})

const Paint = connect(mapStateToProps, mapDispatchToProps)(PaintButton)

Paint.propTypes = {color: PropTypes.string.isRequired}

export default Paint
