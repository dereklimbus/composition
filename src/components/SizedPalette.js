import Paint from 'containers/Paint'
import palette from 'styles/palette.css'
import PropTypes from 'prop-types'
import React from 'react'

const SizedPalette = ({size, colors}) => {
	return (
		<div className={palette[size]}>
	    {colors.map((color) => (<Paint key={color} color={color} />))}
	  </div>
	)
}

SizedPalette.propTypes = {
	size: PropTypes.string.isRequired,
	colors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SizedPalette
