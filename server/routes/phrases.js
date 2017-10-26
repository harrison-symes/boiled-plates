var express = require('express')
var router = express.Router()
var phrasesDb = require('../db/phrases')

router.get('/:languageId/:scenarioId', (req, res) => {
  let languageId = Number(req.params.languageId)
  let scenarioId = Number(req.params.scenarioId)
  phrasesDb.getPhrases(languageId, scenarioId)
    .then(phrase => {
      console.log(phrase)
      res.json(phrase)
    })
})

module.exports = router
