import { RECEIVE_RECIPES } from '../actions/recipes'

function recipes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return [...action.recipes]
    case 'RECEIVE_NEW_RECIPE':
      return [...state, action.recipe]
    default:
      return state
  }
}


export default recipes
