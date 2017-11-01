var hash = require('../auth/hash')
const connection = require('./connection')

function createUser (username, password, testDb) {
  const db = testDb || connection
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({ username, hash })
        .then(id => resolve(id))
    })
  })
}
function userExists (username, testDb) {
  const db = testDb || connection
  console.log( 'exists', username )
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, testDb) {
  console.log('getbyname', username)
  const db = testDb || connection
  return db('users')
    .where('username', username)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}
