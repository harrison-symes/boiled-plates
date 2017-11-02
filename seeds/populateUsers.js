
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'aaron', hash: ''},
        {id: 2, username: 'daz', hash: ''},
        {id: 3, username: 'skye', hash: ''},
        {id: 4, username: 'rajal', hash: ''}
      ])
    })
}
