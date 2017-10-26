
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenarios').insert([
        {id: 1, scenario: 'greeting'},
        {id: 2, scenario: 'coffee'},
        {id: 3, scenario: 'help'},
        {id: 4, scenario: 'family'},
        {id: 5, scenario: 'food'}
      ]);
    });
};
