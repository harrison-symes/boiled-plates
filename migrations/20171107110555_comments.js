
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments('id').primary()
    table.string('comments')
    table.integer('user_id').references('users.id')
    table.integer('recipe_id').references('recipes.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}
