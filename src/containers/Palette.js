import {BASIC_PALETTE, FULL_PALETTE} from 'settings'
import {connect} from 'react-redux'
import {maxSideDotCount} from 'utils'
import SizedPalette from 'components/SizedPalette'

const mapStateToProps = (state, ownProps) => ({
  size: state.paletteSize,
  colors: (state.paletteSize === 'full') ? FULL_PALETTE : BASIC_PALETTE
})

const Palette = connect(mapStateToProps)(SizedPalette)

export default Palette
