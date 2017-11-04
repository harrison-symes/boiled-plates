
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', (table) => {
    table.increments('id')
    table.string('user_id')
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.string('user_progress')
    table.string('user_posts')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
}