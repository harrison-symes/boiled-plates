function languages(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_LANGUAGES':
      return action.languages
    default:
      return state
  }
}

export default languages
