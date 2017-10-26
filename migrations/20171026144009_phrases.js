
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('phrases', (table) => {
    table.increments('id').primary()
    table.string('phrase')
    table.string('samoan_phrase')
    table.integer('scenario_id').references('scenarios.id')
    table.string('sound_file_slow')
    table.string('sound_file')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('phrases')
}
