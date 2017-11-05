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

//first Async action I made didn't send back any errors
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

//second Async action, this one returns a 404 (Not found after execution)
export function addNewRecipe(event) {
  return (dispatch) => {
    dispatch(addRecipe())
    request('post', '/api/form', event)
      .then(res => {
        dispatch(receiveNewRecipe())
      })
      
  }
}