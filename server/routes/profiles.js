const express = require('express')
const router = express.Router()
const { decode } = require('../auth/token')

const profilesDb = require('../db/profiles')

router.get('/', decode, (req, res) => {
  profilesDb.getProfile(req.user.id)
    .then(profiles => {
      console.log(profiles)
      res.json(profiles)
    })
})

module.exports = router
