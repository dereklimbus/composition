import paint from 'styles/paint.css'
import PropTypes from 'prop-types'
import React from 'react'

const PaintButton = ({
  color,
  selected,
  onMouseOver,
  onMouseOut,
  onSelect
}) => (
  <button
    className=
      {`${paint.basic} ${selected ? paint.selected : null}`}
    style={{backgroundColor: color}}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onClick={(e) => {onSelect(e)}}
  />
)

PaintButton.propTypes = {
	color: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	onMouseOver: PropTypes.func,
	onMouseOut: PropTypes.func,
	onSelect: PropTypes.func.isRequired
}

export default PaintButton
