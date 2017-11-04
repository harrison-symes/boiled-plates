import { RECEIVE_RECIPES } from '../actions/recipes'

function recipes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return [...action.recipes]
    default:
      return state
  }
}

function form (state = [], action) {
  switch (action.type) {
    case 'SUBMIT_RECIPE':
      return [...action.recipes]
    default:
      return state
  }
} 

export default recipes
