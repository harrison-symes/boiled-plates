const express = require('express')
const router = express.Router()
const request = require('superagent')

const {decode} = require('../auth/token')

const {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, createRecipe} = require('../db/recipes')

router.get('/', (req, res) => {
  getRecipes()
    .then(result => res.json(result))
    .catch(err => res.status(err).end)
})

router.get('/:id', (req, res) => {
  let {id} = req.params
  getRecipe(id)
    .then(result => res.json(result))
    .catch(err => res.status(err).end)
})

router.get('/search/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient
  request
    .get(`http://food2fork.com/api/search?key=04a1bbc8b9e4709129e5f7455aa51d17&q=${ingredient}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        res.json(res.body)
      }
    })
})

router.post('/', decode, (req, res) => {
  let {recipe} = req.body
  recipe.profile_id = req.user.id
  console.log({recipe})
  addRecipe(recipe)
    .then(newRecipe => res.json(newRecipe))
    .catch(err => res.status(err).end)
})

router.put('/:id', (req, res) => {
  let {id} = req.params
  editRecipe(id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(err).end)
})

router.delete('/:id', (req, res) => {
  let {id} = req.params
  deleteRecipe(id)
    .then(result => res.json(result))
    .catch(err => res.status(err).end)
})

// router.post('/', (req, res) => {
//   createRecipe(req.body)
//     .then(() => {
//       res.status(201).end()
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

module.exports = router
