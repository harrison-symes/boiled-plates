const express = require('express')
const router = express.Router()
const request = require('superagent')

const {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe} = require('../db/recipes')

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

router.post('/add', (req, res) => {
  let {recipe} = req.body
  addRecipe(recipe)
    .then(result => res.json(result))
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
//   var newName = req.body.name
//   var newIngredients = req.body.ingredients
//   var newInstructions = req.body.instructions

//   var result = {newName, newIngredients, newInstructions}

//   addRecipe(result, req.body)
//     .then(result => res.json(result))
//     .catch(err => res.status(err).end)
// })

module.exports = router
