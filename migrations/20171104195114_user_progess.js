
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_progress', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('post_type_id').references('post_types.id')
    table.integer('count')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_progress')
};
