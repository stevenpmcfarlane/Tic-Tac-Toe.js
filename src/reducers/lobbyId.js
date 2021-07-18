let initialState = ''

if (typeof localStorage !== 'undefined') {
  initialState = localStorage.getItem('lobbyId') || ''
}

const lobbyId = (state = initialState, action) => {
  return state
}

export default lobbyId
