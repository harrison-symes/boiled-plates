
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
          email: 'aaron@gmail.com'
        },
        { id: 2,
          user_id: 2,
          firstname: 'Daz',
          lastname: 'Yang',
          image: './images/profile_images/GordonRamsay.jpg',
          email: 'daz@gmail.com'
        },
        { id: 3,
          user_id: 3,
          firstname: 'Skye',
          lastname: 'Simpson',
          image: '',
          email: 'skye@gmail.com'
        },
        { id: 4,
          user_id: 4,
          firstname: 'Rajal',
          lastname: 'Kumar',
          image: '',
          email: 'raj@gmail.com'
        },
        { id: 5,
          user_id: 5,
          firstname: 'Gordon',
          lastname: 'Ramsay',
          image: './images/profile_images/GordonRamsay.jpg',
          email: 'ramsay@gmail.com'
        }
      ])
    })
}
