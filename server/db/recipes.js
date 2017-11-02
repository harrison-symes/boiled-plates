const defaultConn = require('./connection')

const getRecipes = (testConn) => {
  const db = testConn || defaultConn
  console.log('get me recipes')
  return db('recipes')
    .select()
}

const getRecipe = (id, testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .where('id', id)
}

const addRecipe = (r, testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .insert({
      name: r.name,
      instructions: r.instructions,
      image: r.image,
      ingredients: r.ingredients,
      profile_id: r.profile_id
    })
}

const editRecipe = (id, r, testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .where('id', id)
    .update({
      name: r.name,
      instructions: r.instructions,
      image: r.image,
      ingredients: r.ingredients,
      profile_id: r.profile_id
    })
}

const deleteRecipe = (id, testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .where('id', id)
    .del()
}

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe
}
