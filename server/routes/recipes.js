const express = require('express')
const router = express.Router()

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

module.exports = router
