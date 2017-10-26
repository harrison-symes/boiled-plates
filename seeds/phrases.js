
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phrases').del()
    .then(function () {
      // Inserts seed entries
      return knex('phrases').insert([
        {id: 1, phrase: 'hello, how are you?', scenario_id: 1, language_id: 1, is_slow: false, sound_file: '/audio/hello-normal.mp3'},
        {id: 2, phrase: 'can I please have a coffee?', scenario_id: 2, language_id: 1, is_slow: false, sound_file: '/audio/coffee-normal.mp3'},
        {id: 3, phrase: 'can you help me?', scenario_id: 3, language_id: 1, is_slow: false, sound_file: '/audio/help-normal.mp3'},
        {id: 4, phrase: 'tell me about your family', scenario_id: 4, language_id: 1, is_slow: false, sound_file: '/audio/family-normal.mp3'},
        {id: 5, phrase: 'My favourite food is: ', scenario_id: 5, language_id: 1, is_slow: false, sound_file: '/audio/food-normal.mp3'},
        { id: 6, phrase: 'hello, how are you?', scenario_id: 1, language_id: 1, is_slow: true, sound_file: '/audio/hello-slow.mp3' },
        { id: 7, phrase: 'can I please have a coffee?', scenario_id: 2, language_id: 1, is_slow: true, sound_file: '/audio/coffee-slow.mp3' },
        { id: 8, phrase: 'can you help me?', scenario_id: 3, language_id: 1, is_slow: true, sound_file: '/audio/help-slow.mp3' },
        { id: 9, phrase: 'tell me about your family', scenario_id: 4, language_id: 1, is_slow: true, sound_file: '/audio/family-slow.mp3' },
        { id: 10, phrase: 'My favourite food is: ', scenario_id: 5, language_id: 1, is_slow: true, sound_file: '/audio/food-slow.mp3' }
      ])
    })
}
