import request from 'superagent'


export function getRecipeInfo (id, callback) {
  request
    .get(`http://localhost:3000/api/v1/getfood2fork/${id}`)
    .set('Accept', 'application/json')
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

export function searchRecipeInfo (ingredient, callback) {
  request
    .get(`http://localhost:3000/api/v1/searchfood2fork/${ingredient}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}
