
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_progress').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_progress').insert([
        {user_id: 1, post_type_id: 2},
        {user_id: 2, post_type_id: 2},
        {user_id: 2, post_type_id: 2},
        {user_id: 2, post_type_id: 2},
        {user_id: 2, post_type_id: 2},
        {user_id: 2, post_type_id: 2},
        {user_id: 2, post_type_id: 2},
        {user_id: 3, post_type_id: 2},
        {user_id: 3, post_type_id: 2},
        {user_id: 3, post_type_id: 2},
        {user_id: 3, post_type_id: 2},
        {user_id: 3, post_type_id: 2},
        {user_id: 4, post_type_id: 2},
        {user_id: 5, post_type_id: 2}
      ])
    })
}
