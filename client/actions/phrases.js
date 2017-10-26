import request from 'superagent'

export const receivePhrases = (phrases) => {
  return {
    type: 'RECEIVE_PHRASES',
    phrases
  }
}

export function getphrases () {
  return (dispatch) => {
    request
      .get(`/api/phrases`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePhrases(res.body))
      })
  }
}
