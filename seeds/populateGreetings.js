exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('greetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('greetings').insert([
        {id: 1, text: 'MEOW'},
        { id: 2, text: 'MEOW MEOW'},
        { id: 3, text: 'MEOW MEOW MEOW'}
      ])
    })
}
