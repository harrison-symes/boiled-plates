
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phrases').del()
    .then(function () {
      // Inserts seed entries
      return knex('phrases').insert([
        { id: 1, phrase: 'Hello, how are you?', scenario_id: 1, is_slow: false, sound_file: '/audio/hello-normal.mp3' },
        { id: 2, phrase: 'Can I please have a coffee?', scenario_id: 2, is_slow: false, sound_file: '/audio/coffee-normal.mp3' },
        { id: 3, phrase: 'Can you help me?', scenario_id: 3, is_slow: false, sound_file: '/audio/help-normal.mp3' },
        { id: 4, phrase: 'How is your family?', scenario_id: 4, is_slow: false, sound_file: '/audio/family-normal.mp3' },
        { id: 5, phrase: 'Have you eaten? ', scenario_id: 5, is_slow: false, sound_file: '/audio/food-normal.mp3' },
        { id: 6, phrase: 'Hello, how are you?', scenario_id: 1, is_slow: true, sound_file: '/audio/hello-slow.mp3' },
        { id: 7, phrase: 'Can I please have a coffee?', scenario_id: 2, is_slow: true, sound_file: '/audio/coffee-slow.mp3' },
        { id: 8, phrase: 'Can you help me?', scenario_id: 3, is_slow: true, sound_file: '/audio/help-slow.mp3' },
        { id: 9, phrase: 'How is your family?', scenario_id: 4, is_slow: true, sound_file: '/audio/family-slow.mp3' },
        { id: 10, phrase: 'Have you eaten? ', scenario_id: 5, is_slow: true, sound_file: '/audio/food-slow.mp3' }
      ])
    })
}
