import { combineReducers } from 'redux'

import lobbyId from './lobbyId'
import board from './board'

const reducers = combineReducers({
  lobbyId,
  board
})

export default reducers
