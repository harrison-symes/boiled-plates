
const request = require('supertest')

const env = require('./test-environment')
const {getRecipes, getRecipe, addRecipe, editRecipe} = require('../../server/db/recipes')

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
      expect(recipes.length).toBe(4)
      expect(recipes[0].hasOwnProperty('name')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('instructions')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('image')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('ingredients')).toBeTruthy()
      expect(recipes[0].hasOwnProperty('profile_id')).toBeTruthy()
    })
})

test('read recipe db', () => {
  return getRecipe(2, testDb)
    .then(recipe => {
      expect(recipe.length).toBe(1)
      expect(recipe[0].id).toBe(2)
      expect(recipe[0].name).toBe('mushyroom spud')
    })
})

test('read specific recipe db', () => {
  return getRecipe(2, testDb)
    .then(recipe => {
      expect(recipe.length).toBe(1)
      expect(recipe[0].id).toBe(2)
      expect(recipe[0].name).toBe('mushyroom spud')
    })
})

// NOT SURE WHY RETURNS [5] //

test('add recipe to db', () => {
  let r = {name: 'Honey Sandwich', instructions: 'Spread butter and honey on bread', image: '', ingredients: 'bread, honey, butter', profile_id: 4}
  return addRecipe(r, testDb)
    .then(recipe => {
      expect(recipe[0]).toBe(5)
    })
})
// NOT SURE WHY RETURNS 1 //

test('edit recipe in db', () => {
  let r = {id: 4, name: 'Jam and Peanut Butter Sandwich', instructions: 'Spread peanut butter and jam on bread', image: '', ingredients: 'bread, jam, peanut butter', profile_id: 4}
  return editRecipe(r.id, r, testDb)
    .then(recipe => {
      expect(recipe).toBe(1)
    })
})