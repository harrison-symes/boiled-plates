
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'aaron', hash: 'aaron'},
        {id: 2, username: 'daz', hash: 'daz'},
        {id: 3, username: 'skye', hash: 'skye'},
        {id: 4, username: 'rajal', hash: 'rajal'},
        {id: 5, username: 'ramsey', hash: 'ramsey'}
      ])
    })
}
