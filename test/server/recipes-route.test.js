const request = require('supertest')

jest.mock('../../server/db/recipes', () => ({
  getRecipes: () => Promise.resolve([
    {id: 1, name: 'mushyroom spud', instructions: 'cook spuds and mushrooms, combine', image: '', ingredients: 'spuds, mushrooms', profile_id: 1},
    {id: 1, name: 'mushyroom peas', instructions: 'cook peas and mushrooms, combine', image: '', ingredients: 'peas, mushrooms', profile_id: 1}
  ])
}))

const server = require('../../server/server')

test('GET /recipes', () => {
  return request(server)
    .get('/api/recipes')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
