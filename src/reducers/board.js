import * as actionTypes from '../constants/actionTypes'

const initialState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const copyBoard = board => {
  const copy = []
  board.forEach(row => {
    copy.push([...row])
  })
  return copy
}

const board = (state = initialState, action) => {
  if (action.type === actionTypes.MARK_TILE) {
    const copy = copyBoard(state)
    copy[action.row][action.col] = 'x'
    return copy
  }
  return state
}

export default board
