import request from 'superagent'

const ADD_RECIPE = 'ADD_RECIPE'

export const addRecipe = (name, ingredients, instructions) => {
  return {
    type: 'ADD_RECIPE',
    name, ingredients, instructions
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