
const getPhrases = (scenId, db) => {
  return db('phrases')
    .select('id', 'phrase', 'sound_file_slow as soundFileSlow', 'sound_file as soundFile', 'samoan_phrase as samoanPhrase')
    .where('scenario_id', scenId)
}

module.exports = {
  getPhrases
}
