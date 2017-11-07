import { RECEIVE_NEW_COMMENT, ADD_COMMENT } from '../actions/addComment'

function comments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...action.comments]
    case 'RECEIVE_NEW_COMMENT':
      return [...state, action.comment]
    case 'RECEIVE_COMMENTS':
      return action.comments
    default:
      return state
  }
}

export default comments
