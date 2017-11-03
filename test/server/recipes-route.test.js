const request = require('supertest')

jest.mock('../../server/db/recipes', () => ({
  getRecipes: () => Promise.resolve([
    {id: 1, name: 'mushyroom spud', instructions: 'cook spuds and mushrooms, combine', image: '', ingredients: 'spuds, mushrooms', profile_id: 1},
    {id: 2, name: 'mushyroom peas', instructions: 'cook peas and mushrooms, combine', image: '', ingredients: 'peas, mushrooms', profile_id: 2}
  ]),
  getRecipe: () => Promise.resolve([
    {id: 3, name: 'kumara pie', instructions: 'cook kumura, make pastry, combine, put in oven', image: '', ingredients: 'kumara, flour, water', profile_id: 3}
  ]),
  addRecipe: () => Promise.resolve([
    {name: 'Jam Sandwich', instructions: 'Spread butter and jam on bread', image: '', ingredients: 'bread, jam, butter', profile_id: 4}
  ]),
  editRecipe: () => Promise.resolve([
    {id: 3, name: 'kumara pie', instructions: 'cook kumura, make pastry, combine, put in oven', image: '', ingredients: 'kumara, flour, water, SALT', profile_id: 3}
  ]),
  deleteRecipe: () => Promise.resolve([
    {id: 2, name: 'mushyroom peas', instructions: 'cook peas and mushrooms, combine', image: '', ingredients: 'peas, mushrooms', profile_id: 2}
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

test('GET /recipes/:id', () => {
  return request(server)
    .get('/api/recipes/3')
    .expect(200)
    .then(res => {
      expect(res.body[0].name).toBe('kumara pie')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
test('POST /recipes/add', () => {
  return request(server)
    .post('/api/recipes/add')
    .expect(200)
    .then(res => {
      expect(res.body[0].name).toBe('Jam Sandwich')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
test('PUT /recipes/:id', () => {
  return request(server)
    .put('/api/recipes/:1')
    .expect(200)
    .then(res => {
      expect(res.body[0].ingredients).toBe('kumara, flour, water, SALT')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
test('DELETE /recipes/:id', () => {
  return request(server)
    .delete('/api/recipes/:1')
    .expect(200)
    .then(res => {
      expect(res.body[0].id).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})