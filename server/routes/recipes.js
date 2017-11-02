const express = require('express')
const router = express.Router()

const recipesDb = require('../db/recipes')

router.get('/', (req, res) => {
  recipesDb.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
})

module.exports = router
