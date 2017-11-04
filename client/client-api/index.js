import request from 'superagent'

export function searchRecipeInfo (ingredient, callback) {
  console.log(ingredient)
  request
    .get(`http://localhost:3000/api/v1/search/${ingredient}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}
