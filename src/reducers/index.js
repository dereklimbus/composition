import {combineReducers} from 'redux'
import dotColors from 'reducers/dotColors'
import mouseOverDot from 'reducers/mouseOverDot'
import mouseOverPaint from 'reducers/mouseOverPaint'
import paletteSize from 'reducers/paletteSize'
import selection from 'reducers/selection'
import sideDotCount from 'reducers/sideDotCount'

const composition = combineReducers({
  dotColors,
  mouseOverDot,
  mouseOverPaint,
  paletteSize,
  selection,
  sideDotCount
})

export default composition
