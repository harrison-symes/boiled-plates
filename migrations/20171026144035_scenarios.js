
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('scenarios', (table) => {
    table.increments('id').primary()
    table.string('scenario')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('scenarios')
};