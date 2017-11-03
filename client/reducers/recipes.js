import { RECEIVE_RECIPES } from '../actions/recipes'

function recipes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      // console.log({action})
      return [...action.recipes]
    default:
      return state
  }
}

export default recipes
