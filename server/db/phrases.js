const getPhrases = (db) => {
  return db('phrases')
    .select('*')
}

module.exports = {
  getPhrases
}
