function phrases (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PHRASES':
      return [...action.phrases]
    default:
      return state
  }
}

export default phrases
