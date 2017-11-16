exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'fluffy', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'Full of shit', colour: 'black', lives: '9'},
        {id: 2, name: 'tick', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'Steals shit', colour: 'red', lives: '5'},
        {id: 3, name: 'rick', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'Lost heaps of weight like rick ross', colour: 'blue', lives: '3'},
        {id: 4, name: 'stick', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'Has a lanky dick', colour: 'yellow', lives: '1'},
        {id: 5, name: 'prick', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'A snitching backstabber', colour: 'should be orange, but has been burnt so blackish now', lives: '0.5'},
        {id: 6, name: 'brick', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'Has a short but fat dick', colour: 'no hair, so pink', lives: '10000'},
        {id: 7, name: 'rajal', image: 'http://i9.photobucket.com/albums/a92/DanLeCrinque/beforemarriage.jpg', lifestory: 'I dominate ', colour: 'black', lives: '9000'}
      ])
    })
}
