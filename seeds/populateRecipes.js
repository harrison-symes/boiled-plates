exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, name: 'Glorious Roasted Pumpkin Soup', instructions: 'Preheat the oven to 170°C/340°F. Half the pumpkin and remove the seeds (you can keep these for roasting), then chop into wedges. Place the pumpkin on two large baking trays and drizzle over a little olive oil. In a pestle and mortar, grind the chilli and coriander seeds with a pinch of salt until finely ground. Sprinkle the spices over the pumpkin with some black pepper. Roast the pumpkin for 1 hour, or until soft and slightly caramalised at the edges. Meanwhile, roughly chop the onion, garlic, carrot and celery. Heat a lug of olive oil over a medium heat in a large saucepan then add the vegetables and cook for 15 minutes, or until soft and sweet but not coloured.', image: './images/userRecipes/Pumpkin Soup.jpg', ingredients: '1.5kg edible pumpkin, Olive oil, 1 teaspoon dried chilli, 1 tablespoon coriander seeds, 1 large onion, 3 cloves garlic, 1 carrot, 1 stick of celery, 1 litre hot vegetable stock', profile_id: 1
        },

        {
          id: 2, name: 'Vegetable Curry', instructions: 'In a clean plastic bag, put half of the flour, curry powder and salt. Add the potato, kumara, onion and pumpkin and shake to coat. Tip into a roasting pan with the oil. Roast at 200 degrees Celsius for 30 minutes, turning every so often.Repeat with remaining ingredients and add to the roasting dish. Cook for a further 20- 30 minutes turning gently every so often. To make the sauce, heat oil in small saucepan. Add cumin seeds and cook for 20 seconds. Add garlic, chilli and ginger and fry for a minute. Sauté onion until tender before adding remaining ingredients and simmer for 10 minutes before serving. Toss the curry with 1/ 4 C chopped coriander and serve with rice and the sauce.', image: './images/userRecipes/VegetableCurry.jpg', ingredients: '1/3 C flour, 2 Tbsp curry powder, 3 tsp salt, 3 potatoes, cubed, 1 kumara, peeled & cubed, 1 onion, diced, 1/ 4 pumpkin, peeled & cubed, 1/2 cauliflower, cut into florets, 1 eggplant, cubed, 1 zucchini, cubed, 1 red pepper, cubed, 3 Tbsp oil, 1 tsp cumin seeds, 1 Tbsp oil, 3 garlic cloves, finely chopped, 1 red chilli, finely chopped, 1 knob of ginger, finely chopped, 1 onion, finely chopped, handful curry leaves (optional), 1 tsp salt, 1 can coconut cream', profile_id: 2
        },

        {
          id: 3, name: 'Creamy Advocado and Mayo Potato Salad', instructions: 'Wash and cook potatoes in lightly salted boiling water until tender. Drain. Set aside until potatoes are cold. Cut potatoes in half. Fry bacon until golden and crispy. Place potatoes in a bowl. Add spring onions and bacon. Mash the avocado flesh with a fork. Stir in Eta Thick N Creamy Mayo and lemon juice. Season with freshly ground black pepper. Carefully mix the avocado dressing through the potatoes, spring onions and bacon.Transfer to a serving bowl.Top with hardboiled egg quarters and sprinkle over chopped parsley.', image: './images/userRecipes/CreamyAvocado.jpg', ingredients: '700g bag baby gourmet potatoes (perla), 4 rashers streaky bacon, cut into small pieces, 3 spring onions, chopped, 1 ripe avocado, ½ cup Eta Thick‘N Creamy Mayo, Juice of ½ lemon or to taste, 3 eggs, hardboiled, peeled and cut into quarters, Handful fresh parsley leaves, chopped', profile_id: 3},
        {
          id: 4, name: 'Homemade Kumara Wedges', instructions: 'Preheat the oven to 200°C. Wash and dry kumara. Cut into thick wedges. Toss in olive oil and place on a baking tray lined with baking paper. Roast for 20- 25 minutes, turning once during cooking until golden and tender.Serve warm with Just Aioli Dip.', image: './images/userRecipes/Kumera.png', ingredients: 'Just Aioli Dip, 2 kumara, 2 Tbsp olive oil', profile_id: 4}
      ])
    })
}
