
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'aaronmac989@gmail.com', hash:''},
        {id: 2, email: 'daz@gmail.com', hash:''},
        {id: 3, email: 'skye@gmail.com', hash:''},
        {id: 4, email: 'rajal@gmail.com', hash:''},
      ]);
    });
};
