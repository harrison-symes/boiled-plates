var express = require('express')
var router = express.Router()
var langDb = require('../db/languages')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  langDb.getLanguages(db)
    .then(languages => {
      res.json(languages)
    })
})

module.exports = router