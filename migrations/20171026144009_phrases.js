
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('phrases', (table) => {
    table.increments('id').primary()
    table.string('phrase')
    table.integer('scenario_id').references('scenarios.id')
    table.integer('language_id').references('languages.id')
    table.string('is_slow')
    table.string('sound_file')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('phrases')
};