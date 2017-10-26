const getLanguages = (db) => {
  return db('languages')
    .select()
}

module.exports = {
  getLanguages
}
