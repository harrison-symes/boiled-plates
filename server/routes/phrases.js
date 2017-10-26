var express = require('express')
var router = express.Router()
var phrasesDb = require('../db/phrases')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  phrasesDb.getPhrases(db)
    .then(phrases => {
      res.json(phrases)
    })
})

module.exports = router
