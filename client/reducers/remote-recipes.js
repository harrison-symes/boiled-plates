import { RECEIVE_REMOTE_RECIPES } from '../actions'

export default () => {
  switch (action.type) {
    case RECIEVE_REMOTE_RECIPES:
      return action.recipes

    default:
      return recipes
  }
}
