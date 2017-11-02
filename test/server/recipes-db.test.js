
const request = require('supertest')

const env = require('./test-environment')
const {getRecipes, getRecipe} = require('../../server/db/recipes')

// Manage the test database

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

// Tests - Adjust recipes.length when more recipes added to seeds.

test('read recipes db', () => {
  return getRecipes(testDb)
    .then(recipes => {
      expect(recipes.length).toBe(1)
      expect(recipes[0].hasOwnProperty('name')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('instructions')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('image')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('ingredients')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('profile_id')).toBeTruthy()
    })
})

test('read recipe db', () => {
  return getRecipe(1, testDb)
    .then(recipe => {
      expect(recipe.length).toBe(1)
      expect(recipe[0].id).toBe(1)
      expect(recipe[0].name).toBe('Rhubarb Soup')
    })
})

