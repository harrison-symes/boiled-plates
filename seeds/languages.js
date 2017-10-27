
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {id: 1, language: 'Samoan', image: '/images/Samoa.png'},
        { id: 2, language: 'Tongan', image: '/images/Tongan.jpg'},
        { id: 3, language: 'Fijian', image: '/images/Fiji.png'},
        { id: 4, language: 'Maori', image: '/images/Maori.jpg'},
        { id: 5, language: 'Vanuatu', image: '/images/Vanuatu.png'}
      ])
    })
}
