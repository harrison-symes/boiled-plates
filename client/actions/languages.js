import request from 'superagent'

export const receiveLanguages = (languages) => {
  return {
    type: 'RECEIVE_LANGUAGES',
    languages
  }
}

export function fetchLanguages () {
  return (dispatch) => {
    request
      .get(`/api/v1/languages`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveLanguages(res.body))
      })
  }
}
