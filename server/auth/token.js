var jwt = require('jsonwebtoken')
var { getUserByName } = require('../db/users')
var verifyJwt = require('express-jwt')

function issue (req, res) {
  getUserByName(req.body.username)
    .then(user => {
      if (!user) res.status(403).json({message: 'User does not exist'})
      else {
        var token = createToken(user, process.env.JWT_SECRET)
        res.json({
          message: 'Authentication successful',
          token
        })
      }
    })
    .catch(err => res.sendStatus(500))
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
