import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Gameboard from '../Gameboard'

const Home = () => {
  const { lobbyId } = useParams()
  const storedLobbyId = useSelector(state => state.lobbyId)

  if (!lobbyId && !storedLobbyId) {
    // create lobby
  }

  return (
    <>
      <Gameboard />
    </>
  )
}
  
export default Home
