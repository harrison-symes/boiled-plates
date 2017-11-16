const express = require('express')
const router = express.Router()

const catsDb = require('../db/cats')

router.get('/', (req, res) => {
  catsDb.getCats()
    .then(cats => {
      res.json(cats)
    })
})

module.exports = router
