import {combineReducers} from 'redux'

import recipes from './recipes'
import auth from './auth'
import remoteRecipes from './remoteRecipes'

export default combineReducers({
  recipes,
  auth,
  remoteRecipes
})
