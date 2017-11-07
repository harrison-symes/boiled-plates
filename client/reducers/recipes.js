import { RECEIVE_RECIPES } from '../actions/recipes'
import { RECEIVE_NEW_COMMENT, ADD_COMMENT } from '../actions/addComment'

function recipes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return [...action.recipes]
    case 'RECEIVE_NEW_RECIPE':
      return [...state, action.recipe]
    case 'RECEIVE_NEW_COMMENT':
      return [...state, action.comment]
    case 'ADD_COMMENT':
      return [...action.comments]
    default:
      return state
  }
}

export default recipes
