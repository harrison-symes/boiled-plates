
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_progress').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_progress').insert([
        {id: 1, user_id: 1, post_type_id: 1, count: 5},
        {id: 2, user_id: 2, post_type_id: 2, count: 4},
        {id: 3, user_id: 3, post_type_id: 3, count: 7},
        {id: 4, user_id: 4, post_type_id: 4, count: 6},
        {id: 5, user_id: 5, post_type_id: 5, count: 1},

      ])
    })
}
