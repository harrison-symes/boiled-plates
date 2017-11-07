import request from '../utils/api'

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

export const receiveProfile = (profile) => {
  // console.log(profile)
  return {
    type: 'RECEIVE_PROFILE',
    profile
  }
}

export function getProfile () {
  return (dispatch) => {
    request('get', 'profiles')
      .then(res => {
        // console.log(res.body)
        dispatch(receiveProfile(res.body))
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}
