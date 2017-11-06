import request from '../utils/api'

const ADD_RECIPE = 'ADD_RECIPE'
const RECEIVE_NEW_RECIPE = 'RECEIVE_NEW_RECIPE'

export const addRecipe = () => {
  return {
    type: 'ADD_RECIPE'
  }
}

export const receiveNewRecipe = (recipe) => {
  return {
    type: "RECEIVE_NEW_RECIPE",
    recipe
  }
}

export function addNewRecipe(recipe) {
  return (dispatch) => {
    console.log({recipe})
    request('post', 'recipes', {recipe})
      .then(res => {
        dispatch(receiveNewRecipe(res.body))
      })
      
  }
}