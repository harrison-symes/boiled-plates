
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {id: 1, language: 'samoan'},
        {id: 2, language: 'tongan'},
        {id: 3, language: 'fijian'},
        {id: 4, language: 'maori'},
        {id: 5, language: 'tokelau'}
      ])
    })
};
