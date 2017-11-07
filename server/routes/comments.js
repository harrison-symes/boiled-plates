const express = require('express')
const router = express.Router()
const { decode } = require('../auth/token')

const commentsDb = require('../db/comments')

router.get('/', decode, (req, res) => {
  commentsDb.getComment(req.user.id)
    .then(comments => {
      console.log(comments)
      res.json(comments)
    })
})

module.exports = router
