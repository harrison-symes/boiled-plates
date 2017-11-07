import {combineReducers} from 'redux'

import recipes from './recipes'
import auth from './auth'
import remoteRecipes from './remoteRecipes'
import comments from './addComment'

export default combineReducers({
  recipes,
  auth,
  remoteRecipes, 
  comments
})
