const defaultConn = require('./connection')

const getProfiles = (testConn) => {
  const db = testConn || defaultConn
  return db('profiles')
    .select()
}

module.exports = {
  getProfiles
}
