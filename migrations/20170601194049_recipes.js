exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('recipes', (table) => {
    table.increments('id')
    table.string('text')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}
