var express = require('express')
var router = express.Router()
var phrasesDb = require('../db/languages')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  languagesDb.getLanguages(db)
    .then(languages => {
      res.json(languages)
    })
})

module.exports = router