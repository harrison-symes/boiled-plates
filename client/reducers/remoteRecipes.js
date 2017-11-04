import { RECEIVE_REMOTE_RECIPES } from '../actions/remoteRecipes'

const initialState = {
  forecast: {
    base: {},
    mid: {},
    upper: {}
  }
}

export default (recipe = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REMOTE_RECIPES:
      return action.recipe

    default:
      return recipe
  }
}
