var express = require('express')
var router = express.Router()
var scenariosDb = require('../db/scenarios')
var phraseDb = require('../db/phrases')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  scenariosDb.getScenarios(db)
    .then(scenarios => {
      res.json(scenarios)
    })
})

router.get('/:id/phrases', (req, res) => {
  const scenarioId = Number(req.params.id)
  let db = req.app.get('db')
  phraseDb.getPhrases(scenarioId, db)
    .then(scenarios => {
      res.json(scenarios)
    })
})

module.exports = router