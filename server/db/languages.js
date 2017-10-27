const getLanguages = (db, image) => {
  return db('languages')
    .select('language', 'image')
}

module.exports = {
  getLanguages
}
