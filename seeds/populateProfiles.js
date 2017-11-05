
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { id: 1,
          user_id: 1,
          firstname: 'Aaron',
          lastname: 'Macdonald',
          image: '',
          email: 'aaron@gmail.com',
          user_progress: 0,
          user_posts: [{ Added_Recipe: '' }, { Host_A_Kai: '' }, { Share_Post: '' }, { Fav_List: '' }]
        },
        { id: 2,
          user_id: 2,
          firstname: 'Daz',
          lastname: 'Yang',
          image: '',
          email: 'daz@gmail.com',
          user_progress: 0,
          user_posts: [{ Added_Recipe: '' }, { Host_A_Kai: '' }, { Share_Post: '' }, { Fav_List: '' }]
        },
        { id: 3,
          user_id: 3,
          firstname: 'Skye',
          lastname: 'Simpson',
          image: '',
          email: 'skye@gmail.com',
          user_progress: 0,
          user_posts: [ {Added_Recipe: ''}, {Host_A_Kai: ''}, {Share_Post: ''}, {Fav_List: ''} ]
        },
        { id: 4,
          user_id: 4,
          firstname: 'Rajal',
          lastname: 'Kumar',
          image: '',
          email: 'raj@gmail.com',
          user_progress: 0,
          user_posts: [{ Added_Recipe: '' }, { Host_A_Kai: '' }, { Share_Post: '' }, { Fav_List: '' }]
        },
        { id: 5,
          user_id: 5,
          firstname: 'Gordon',
          lastname: 'Ramsey',
          image: '',
          email: 'ramsy@gmail.com',
          user_progress: 0,
          user_posts: [{ Added_Recipe: '' }, { Host_A_Kai: '' }, { Share_Post: '' }, { Fav_List: '' }]
        }
      ])
    })
}
