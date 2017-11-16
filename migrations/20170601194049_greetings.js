exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('lifestory')
    table.string('colour')
    table.string('lives')
                
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
}
