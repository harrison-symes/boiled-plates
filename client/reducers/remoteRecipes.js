import { RECEIVE_REMOTE_RECIPES } from '../actions/remoteRecipes'

const initialState = {
  title: '',
  image: '',
  f2f: '',
  rank: ''
}

export default function remoteRecipes (state = [], action) {
  // console.log(action)
  switch (action.type) {
    case RECEIVE_REMOTE_RECIPES:
      return action.recipes

    default:
      return state
  }
}
