import request from 'superagent'

export const receiveScenarios = (scenarios) => {
  return {
    type: 'RECEIVE_SCENARIOS',
    scenarios
  }
}

export function fetchScenarios (languageId) {
  return (dispatch) => {
    request
      .get(`/api/v1/languages/${languageId}/scenarios`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveScenarios(res.body))
      })
  }
}
