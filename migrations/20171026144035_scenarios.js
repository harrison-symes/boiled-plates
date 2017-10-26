
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('scenarios', (table) => {
    table.increments('id').primary()
    table.string('scenario')
    table.integer('language_id').references('languages.id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('scenarios')
};