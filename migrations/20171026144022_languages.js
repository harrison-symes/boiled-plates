
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('languages', (table) => {
    table.increments('id').primary()
    table.string('language')
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('languages')
}
