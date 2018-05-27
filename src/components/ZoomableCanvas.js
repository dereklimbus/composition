import canvas from 'styles/canvas.css'
import IndexedDot from 'containers/IndexedDot'
import PropTypes from 'prop-types'
import React from 'react'

const ZoomableCanvas = ({
	range,
	onWheel,
	onTouchStart,
	onTouchMove,
	onTouchEnd
}) => {
	let dots = []
  for (let i = range.from; i < range.to; i++) {
    for (let j = range.from; j < range.to; j++) {
    	dots.push(<IndexedDot key={`${i}:${j}`} index={{x: i, y: j}}/>)
    }
  }

  return (
  	<svg
      className={canvas.basic}
      onWheel={(e) => {onWheel(e)}}
      onTouchStart={(e) => {onTouchStart(e)}}
      onTouchMove={(e) => {onTouchMove(e)}}
      onTouchEnd={onTouchEnd}
    >
      {dots}
    </svg>
  )
}

ZoomableCanvas.propTypes = {
	range: PropTypes.shape({
		from: PropTypes.number.isRequired,
		to: PropTypes.number.isRequired,
	}),
	onWheel: PropTypes.func.isRequired,
	onTouchStart: PropTypes.func.isRequired,
	onTouchMove: PropTypes.func.isRequired,
	onTouchEnd: PropTypes.func.isRequired
}

export default ZoomableCanvas
