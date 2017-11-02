const express = require('express')
const router = express.Router()

const profilesDb = require('../db/profiles')

router.get('/', (req, res) => {
  profilesDb.getProfiles()
    .then(profiles => {
      res.json(profiles)
    })
})

module.exports = router
