const getScenarios = (langId, db) => {
  return db('scenarios')
    .select()
    .where('language_id', langId)
}

module.exports = {
  getScenarios
}
