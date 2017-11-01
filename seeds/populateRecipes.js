exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Rhubarb Soup', instructions: 'Add water, add rhubarb. Simmer. Season', image: '', ingredients: 'rhubarb, water, salt, pepper', profile_id: 1},
      ])
    })
}
