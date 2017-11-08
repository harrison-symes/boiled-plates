import { RECEIVE_PROFILE } from '../actions/profile'

function profile (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile

    default:
      return state
  }
}

export default profile
