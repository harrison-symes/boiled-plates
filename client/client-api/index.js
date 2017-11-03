import request from 'superagent'

export function searchRecipeInfo (recipeID, callback) {
  console.log(recipeID)
  request
    .get(`http://food2fork.com/api/get?key=04a1bbc8b9e4709129e5f7455aa51d17&rId=${recipeID}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function getRecipeInfo
// API Key: 04a1bbc8b9e4709129e5f7455aa51d17 