const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

const getPhrases = (langId, scenId) => {
  return knex('phrases')
    .select('id', 'phrase', 'is_slow as isSlow', 'sound_file as soundFile')
    .where('language_id', langId)
    .where('scenario_id', scenId)
}

module.exports = {
  getPhrases
}
