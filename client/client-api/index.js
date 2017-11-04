import request from 'superagent'

export function searchRecipeInfo (recipeId, callback) {
  request
    .get(`localhost:3000/api/v1/searchfood2fork/${recipeId}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}
// API Key:{04a1bbc8b9e4709129e5f7455aa51d17}