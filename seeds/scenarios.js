
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenarios').insert([
        {id: 1, scenario: 'greeting', language_id: 1},
        {id: 2, scenario: 'coffee', language_id: 1},
        {id: 3, scenario: 'help', language_id: 1},
        {id: 4, scenario: 'family', language_id: 1},
        {id: 5, scenario: 'food', language_id: 1}
      ]);
    });
};
