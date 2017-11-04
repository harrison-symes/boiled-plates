import { RECEIVE_REMOTE_RECIPES } from '../../actions/remote-recipes.js'

export default (searchING = '', action) => {
  switch (action.type) {
    case RECEIVE_REMOTE_RECIPES:
      return action.recipes

    default:
      return searchING
  }
}
