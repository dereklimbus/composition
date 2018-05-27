import Canvas from 'containers/Canvas'
import composition from 'styles/composition.css'
import Palette from 'containers/Palette'
import React from 'react'

const Composition = () => (
  <div className={composition.basic}>
    <Canvas/>
    <Palette/>
  </div>
)

export default Composition
