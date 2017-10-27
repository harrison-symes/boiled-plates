
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenarios').insert([
        {id: 1, scenario: 'Greeting', language_id: 1},
        {id: 2, scenario: 'Coffee', language_id: 1},
        {id: 3, scenario: 'Help', language_id: 1},
        {id: 4, scenario: 'Family', language_id: 1},
        {id: 5, scenario: 'Food', language_id: 1}
      ])
    })
}
