
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_progress', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.string('post_type_id').references('postTypes.id')
    table.integer('count')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_progress')
};
