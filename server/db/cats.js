const defaultConn = require('./connection')

const getCats = (testConn) => {
  const db = testConn || defaultConn
  return db('cats')
    .select()
}

module.exports = {
  getCats
}
