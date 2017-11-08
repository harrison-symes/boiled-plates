
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comments: 'An amazing array of ingredients, the process of full stack cooking lets you appreciate the fully developed flavours making this a wonderful dish to enjoy anytime', user_id: 1, recipe_id: 2},
        {id: 2, comments: 'A delicious concatination of items within this recipe object. Cannot wait to test this in my own pot.', user_id: 2, recipe_id: 3},
        {id: 3, comments: 'The asynchronous actions involved in making this dish let you sort the aoili while waiting on the oven to return the reduced kmumera', user_id: 3, recipe_id: 4}
      ])
    })
}
