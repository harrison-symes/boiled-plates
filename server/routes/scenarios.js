var express = require('express')
var router = express.Router()
var scenariosDb = require('../db/scenarios')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  scenariosDb.getScenarios(db)
    .then(scenarios => {
      res.json(scenarios)
    })
})

module.exports = router