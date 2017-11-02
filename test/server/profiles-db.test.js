const request = require('supertest')

const env = require('./test-environment')
const recipesDb = require('../../server/db/profiles')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests - Adjust recipes.length when more recipes added to seeds.

test('read profiles db', () => {
  return recipesDb.getProfiles(testDb)
    .then(profiles => {
      expect(profiles.length).toBe(4)
      expect(profiles[0].hasOwnProperty('user_id')).toBeTruthy()
      expect(profiles[0].hasOwnProperty('firstname')).toBeTruthy()
      expect(profiles[0].hasOwnProperty('lastname')).toBeTruthy()
    })
})
