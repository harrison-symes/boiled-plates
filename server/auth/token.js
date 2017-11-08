var jwt = require('jsonwebtoken')
var { getUserByName } = require('../db/users')
var verifyJwt = require('express-jwt')
var hash = require('./hash')

function issue (req, res) {
  getUserByName(req.body.username)
    .then(user => {
      hash.compare(req.body.password, user.hash, (err, match) => {
        if (err) {
          res.status(500).json({ message: err.message })
        } else if (!match) {
          res.status(400).json({ message: 'username/password match not found' })
        } else {
          var token = createToken(user, process.env.JWT_SECRET)
          res.json({
            message: 'Authentication successful',
            token
          })
        }
      })
    })
    .catch(() => res.status(500).end())
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '24h'
  })
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function decode (req, res, next) {
  verifyJwt({ secret: getSecret })(req, res, next)
}

module.exports = {
  issue,
  createToken,
  decode
}
