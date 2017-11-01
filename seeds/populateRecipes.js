exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, text: 'Hello There'},
        {id: 2, text: 'Greetings Friend'},
        {id: 3, text: 'Well Met'}
      ])
    })
}
