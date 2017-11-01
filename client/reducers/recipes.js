function recipes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return [...action.recipes]
    default:
      return state
  }
}

export default recipes
