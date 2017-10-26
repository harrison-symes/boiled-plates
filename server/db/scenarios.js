const getScenarios = (db) => {
  return db('scenarios')
    .select()
}

module.exports = {
  getScenarios
}
