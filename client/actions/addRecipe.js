import request from 'superagent'

const ADD_RECIPE = 'ADD_RECIPE'
const RECEIVE_NEW_RECIPE = 'RECEIVE_NEW_RECIPE'

export const addRecipe = () => {
  return {
    type: 'ADD_RECIPE'
  }
}

export const receiveNewRecipe = () => {
  return {
    type: "RECEIVE_NEW_RECIPE"
  }
}

export function addedRecipe() {
  return (dispatch) => {
    request
      .get(`/api/form`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addRecipe(res.body))
      })
  }
}

export function addNewRecipe(event) {
  return (dispatch) => {
    dispatch(addRecipe())
    request('post', '/form', event)
      .then(res => {
        dispatch(receiveNewRecipe())
      })
      
  }
}