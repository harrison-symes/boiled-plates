const defaultConn = require('./connection')

const getProfile = (id, testConn) => {
  const db = testConn || defaultConn
  return db('users')
    .join('profiles', 'profiles.user_id', 'users.id')
    .join('recipes', 'recipes.user_id', 'users.id')
    .join('user_progress', 'user_progress.user_id', 'users.id')
    .select('users.id as userId', 'profiles.firstname', 'profiles.lastname', 'profiles.email', 'recipes.name', 'recipes.instructions', 'recipes.ingredients', 'recipes.image', 'recipes.id as recipeId', 'user_progress.post_type_id')
    .where({
      'users.id': id,
      'recipes.user_id': id,
      'user_progress.user_id': id
    })
    // .then(formatProfile)
}

// function formatProfile (objects) {
//   const profile = {
//     firstname: objects[0].firstname,
//     lastname: objects[0].lastname
//   }
//   return profile
// }

module.exports = {
  getProfile
}
