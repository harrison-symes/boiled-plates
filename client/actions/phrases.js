import request from 'superagent'

export const receivePhrases = (phrases) => {
  return {
    type: 'RECEIVE_PHRASES',
    phrases
  }
}

export function fetchPhrases (scenarioId) {
  return (dispatch) => {
    request
      .get(`/api/v1/scenarios/${scenarioId}/phrases`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePhrases(res.body))
      })
  }
}
