import React from 'react'
import { useDispatch } from 'react-redux'

import './GameTile.css'
import * as actions from '../../actions'

const GameTile = ({ row, col, value }) => {
  const dispatch = useDispatch()

  const onClick = ev => {
    if (value) return
    dispatch(actions.markTile({ row, col }))
    // patch game state with row, col; send 'C', backend will replace with appropriate value
  }

  return (
    <div className='game-tile' onClick={onClick}>
      {value}
    </div>
  )
}

export default GameTile
