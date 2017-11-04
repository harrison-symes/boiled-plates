
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('post_types', (table) => {
    table.increments('id').primary()
    table.string('post_type')
    table.integer('value')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('post_types')
};
