exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('recipes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('instructions')
    table.string('image')
    table.string('ingredients')
    table.integer('profile_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}
