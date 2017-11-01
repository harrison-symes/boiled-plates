const defaultConn = require('./connection')

const getRecipes = (testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .select()
}

module.exports = {
  getRecipes
}
