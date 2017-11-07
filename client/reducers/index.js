import {combineReducers} from 'redux'

import profile from './profile'
import recipes from './recipes'
import auth from './auth'
import remoteRecipes from './remoteRecipes'
import comments from './comments'

export default combineReducers({
  recipes,
  auth,
  remoteRecipes,
  profile,
  comments
})
