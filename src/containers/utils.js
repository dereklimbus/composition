import {isTouchScreen, newSelection} from 'utils'

export const selectionPreview = (selection, mouseOverDot) => {
  if (mouseOverDot === null) {
    return selection
  } else {
    return newSelection(selection, mouseOverDot)
  }
}

export const mouseListener = (listener) => (isTouchScreen() ? null : listener)
