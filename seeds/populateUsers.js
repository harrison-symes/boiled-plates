var bcrypt = require('bcrypt')

const userNames = ['aaron', 'daz', 'skye', 'rajal', 'ramsey']

// This is not your typical seed file because we need to create
// the hashes for each user's password and creating them is an
// async operation.

exports.seed = function (knex, Promise) {
  const insertUsers = insert.bind(null, knex)
  return knex('users').del()
    .then(createHashes)
    .then(getUserObjects)
    .then(insertUsers)
}

function createHashes () {
  const hashPromises = userNames.map((user, i) => {
    return bcrypt.hash(user, 12)
  })
  return Promise.all(hashPromises)
}

function getUserObjects (hashes) {
  return userNames.map((user, i) => {
    return {id: i + 1, username: user, hash: hashes[i]}
  })
}

function insert (knex, users) {
  return knex('users').insert(users)
}
