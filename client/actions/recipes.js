import request from 'superagent'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'

export const receiveRecipes = (recipes) => {
  return {
    type: 'RECEIVE_RECIPES',
    recipes
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
