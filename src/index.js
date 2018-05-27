import 'index.css'
import {compose, createStore, applyMiddleware} from 'redux'
import {deselect} from 'actions/dot'
import {isTouchScreen} from 'utils'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {resize as resizeCanvas, pressKey} from 'actions/canvas'
import {resize as resizePalette} from 'actions/palette'
import {throttle} from 'underscore'
import {WINDOW_RESIZE_WAIT} from 'settings'
import Composition from 'components/Composition'
import composition from 'reducers'
import React from 'react'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	composition,
	composeEnhancers(applyMiddleware(thunk))
)

window.addEventListener('resize', throttle(() => {
	store.dispatch(resizeCanvas())
	store.dispatch(resizePalette())
}, WINDOW_RESIZE_WAIT))

document.addEventListener((isTouchScreen() ? 'touchstart' : 'click'), (e) => {
	let className = e.target.className
	if (className.baseVal !== undefined) {
		className = className.baseVal
	}

	if (!className.includes('dot') && !className.includes('paint')) {
		store.dispatch(deselect())
	}
})

document.addEventListener('keypress', (e) => {
  store.dispatch(pressKey(e.key))
})

document.addEventListener('wheel', (e) => {
	e.preventDefault()
}, {passive:false})
document.addEventListener('touchmove', (e) => {
	e.preventDefault()
}, {passive:false})

render(
  <Provider store={store}>
    <Composition />
  </Provider>,

  document.getElementById('root')
)
