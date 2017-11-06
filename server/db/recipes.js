const defaultConn = require('./connection')

const getRecipes = (testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .select()
}

const getRecipe = (id, testConn) => {
  const db = testConn || defaultConn
  return db('recipes')
    .where('id', id)
    .first()
}

const addRecipe = (r, testConn) => {
  const db = testConn || defaultConn
  // first promise
  const insertIntoRecipes = db('recipes')
    .insert({
      name: r.name,
      image: r.image,
      instructions: r.instructions,
      ingredients: r.ingredients,
      user_id: r.user_id
    })
    .then(id => getRecipe(id[0]))
    // second promise
  const insertIntoUserProgress = db('user_progress')
    .insert({
      user_id: r.user_id,
      post_type_id: 2
    })
    // combining them here
  return Promise.all([insertIntoRecipes, insertIntoUserProgress])
    .then((result) => {
      console.log(result)
      return result[0]
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

const createRecipe = (recipe, testConn) => {
  const db = testConn || defaultConn
  const newRecipe = {
    name: event.name,
    ingredients: event.ingredients,
    instructions: event.instructions
  }
  return db('recipes')
    .insert(newRecipe)
}

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe
}
