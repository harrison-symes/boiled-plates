import {combineReducers} from 'redux'

import phrases from './phrases'
import languages from './languages'
import scenarios from './scenarios'

export default combineReducers({
  phrases,
  languages,
  scenarios
})
