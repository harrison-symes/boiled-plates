
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_types').insert([
        {id: 1, post_type: 'Share-The-Day', value: 1},
        {id: 2, post_type: 'Add-A-Recipe', value: 3},
        {id: 3, post_type: 'Host-A-Kai', value: 5}
      ])
    })
}
