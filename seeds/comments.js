
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comments: 'yummy', user_id: 1, recipe_id: 2},
        {id: 2, comments: 'delicious', user_id: 2, recipe_id: 3},
        {id: 3, comments: 'yucky', user_id: 3, recipe_id: 4}
      ])
    })
}
