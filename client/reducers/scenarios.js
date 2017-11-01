function scenarios (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SCENARIOS':
      return action.scenarios
    default:
      return state
  }
}

export default scenarios
