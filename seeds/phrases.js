
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phrases').del()
    .then(function () {
      // Inserts seed entries
      return knex('phrases').insert([
        { id: 1, phrase: 'Hello, how are you?', samoan_phrase: 'Malo, o a mae oe?', scenario_id: 1, sound_file_slow: '/audio/hello-slow.mp3', sound_file: '/audio/hello-normal.mp3' },
        { id: 2, phrase: 'Can I please have a coffee?', samoan_phrase: 'E mafai ona aumai se ta kofe, fa\'amole?', scenario_id: 2, sound_file_slow: '/audio/coffee-slow.mp3', sound_file: '/audio/coffee-normal.mp3' },
        { id: 3, phrase: 'Can you help me?', samoan_phrase: 'E mafai ga e fesoasoani mai, fa\'amolemole?', scenario_id: 3, sound_file_slow: '/audio/help-slow.mp3', sound_file: '/audio/help-normal.mp3' },
        { id: 4, phrase: 'How is your family?', samoan_phrase: 'Ua mai le tou aiga?', scenario_id: 4, sound_file_slow: '/audio/family-slow.mp3', sound_file: '/audio/family-normal.mp3' },
        { id: 5, phrase: 'Have you eaten? ', samoan_phrase: 'Ua e \'ai?', scenario_id: 5, sound_file_slow: '/audio/food-slow.mp3', sound_file: '/audio/food-normal.mp3' }
      ])
    })
}
