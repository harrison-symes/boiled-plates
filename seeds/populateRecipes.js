exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, name: 'Glorious Roasted Pumpkin Soup', instructions: 'Preheat the oven to 170°C/340°F. Half the pumpkin and remove the seeds (you can keep these for roasting), then chop into wedges. Place the pumpkin on two large baking trays and drizzle over a little olive oil. In a pestle and mortar, grind the chilli and coriander seeds with a pinch of salt until finely ground. Sprinkle the spices over the pumpkin with some black pepper. Roast the pumpkin for 1 hour, or until soft and slightly caramalised at the edges. Meanwhile, roughly chop the onion, garlic, carrot and celery. Heat a lug of olive oil over a medium heat in a large saucepan then add the vegetables and cook for 15 minutes, or until soft and sweet but not coloured.', image: './images/userRecipes/Pumpkin Soup.jpg', ingredients: '1.5kg edible pumpkin, Olive oil, 1 teaspoon dried chilli, 1 tablespoon coriander seeds, 1 large onion, 3 cloves garlic, 1 carrot, 1 stick of celery, 1 litre hot vegetable stock', profile_id: 1
        },

        {id: 2, name: 'mushyroom spud', instructions: 'cook spuds and mushrooms, combine', image: '', ingredients: 'spuds, mushrooms', profile_id: 2},
        {id: 3, name: 'kumara pie', instructions: 'cook kumura, make pastry, combine, put in oven', image: '', ingredients: 'kumara, flour, water', profile_id: 3},
        {id: 4, name: 'Jam Sandwich', instructions: 'Spread butter and jam on bread', image: '', ingredients: 'bread, jam, butter', profile_id: 4}
      ])
    })
}
