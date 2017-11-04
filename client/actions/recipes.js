import request from 'superagent'

export const receiveRecipes = (recipes) => {
  return {
    type: 'RECEIVE_RECIPES',
    recipes
  }
}
export const submitRecipe = (form) => {
  return {
    type: 'SUBMIT_RECIPE',
    form
  }
}

export function getRecipes () {
  return (dispatch) => {
    request
      .get(`/api/recipes`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveRecipes(res.body))
      })
  }
}

export function addRecipe () {
  return (dispatch) => {
    request
      .get(`/api/form`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(submitRecipe(res.body))
      })
  }
}