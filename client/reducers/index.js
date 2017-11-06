import {combineReducers} from 'redux'

import profile from './profile'
import recipes from './recipes'
import auth from './auth'
import remoteRecipes from './remoteRecipes'

export default combineReducers({
  recipes,
  auth,
  remoteRecipes,
  profile
})
