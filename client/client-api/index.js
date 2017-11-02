import request from 'superagent'

export function searchRecipeInfo (ingredient, callback) {
  request
    .get(`http://food2fork.com/api/search?key=04a1bbc8b9e4709129e5f7455aa51d17&q=${ingredient}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function getRecipeIn
// API Key: 04a1bbc8b9e4709129e5f7455aa51d17 