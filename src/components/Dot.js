import dot from 'styles/dot.css'
import PropTypes from 'prop-types'
import React from 'react'

const Dot = ({
  origin,
  sideLength,
  color,
  onMouseOver,
  onMouseOut,
  onSelect
}) => {
  const pct = (n) => (`${n * 100}%`)

  return (
    <rect
      className={dot.basic}
      x={pct(origin.x)}
      y={pct(origin.y)}
      width={pct(sideLength)}
      height={pct(sideLength)}
      fill={color}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={(e) => {onSelect(e)}}
    />
  )
}

Dot.propTypes = {
  origin: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  sideLength: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onSelect: PropTypes.func.isRequired
}

export default Dot
