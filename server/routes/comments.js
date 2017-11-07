const express = require('express')
const router = express.Router()

const { decode } = require('../auth/token')
const commentsDb = require('../db/comments')

const {getComment, addComment} = require('../db/comments')

router.get('/', decode, (req, res) => {
  getComment(req.user.id)
    .then(comments => {
      console.log(comments)
      res.json(comments)
    })
})

router.get('/', (req, res) => {
  getComment()
    .then(result => res.json(result))
    .catch(err => res.status(err).end)
})

router.post('/:id', decode, (req, res) => {
  let {comment} = req.body
  comment.user_id = req.user.id
  comment.recipe_id = req.params.id
  addComment(comment)
    .then(newComment => res.json(newComment))
    .catch(err => res.status(500).end())
})

module.exports = router
