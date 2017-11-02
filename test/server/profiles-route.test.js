const request = require('supertest')

jest.mock('../../server/db/profiles', () => ({
  getProfiles: () => Promise.resolve([
    {id: 1, user_id: 1, firstname: 'Bill', lastname: 'Murray'},
    {id: 2, user_id: 2, firstname: 'Harry', lastname: 'Potter'}
  ])
}))

const server = require('../../server/server')

test('GET /profiles', () => {
  return request(server)
    .get('/api/profiles')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
