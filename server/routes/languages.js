var express = require('express')
var router = express.Router()
var langDb = require('../db/languages')
var scenDb = require('../db/scenarios')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  langDb.getLanguages(db)
    .then(languages => {
      res.json(languages)
    })
})

router.get('/:id/scenarios', (req, res) => {
  const langId = Number(req.params.id)
  let db = req.app.get('db')
  scenDb.getScenarios(langId, db)
    .then(scenarios => {
      res.json(scenarios)
    })
})

module.exports = router
