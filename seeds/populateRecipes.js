exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Rhubarb Soup', instructions: 'Add water, add rhubarb. Simmer. Season', image: '', ingredients: 'rhubarb, water, salt, pepper', profile_id: 1},
        {id: 2, name: 'mushyroom spud', instructions: 'cook spuds and mushrooms, combine', image: '', ingredients: 'spuds, mushrooms', profile_id: 2},
        {id: 3, name: 'kumara pie', instructions: 'cook kumura, make pastry, combine, put in oven', image: '', ingredients: 'kumara, flour, water', profile_id: 3},
        {id: 4, name: 'Jam Sandwich', instructions: 'Spread butter and jam on bread', image: '', ingredients: 'bread, jam, butter', profile_id: 4}
      ])
    })
}
