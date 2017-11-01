
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id:  1, firstname: 'Aaron', lastname: 'Macdonald'},
        {id: 2, user_id:  2, firstname: 'Daz', lastname: 'Yang'},   
        {id: 3, user_id:  3, firstname: 'Skye', lastname: 'Simpson'},
        {id: 4, user_id:  4, firstname: 'Rajal', lastname: 'Kumar'},
      ]);
    });
};
