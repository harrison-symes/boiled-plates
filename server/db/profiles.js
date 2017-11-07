const defaultConn = require('./connection')

const getProfile = (id, testConn) => {
  const db = testConn || defaultConn
  return db('users')
    .join('profiles', 'profiles.user_id', 'users.id')
    .join('recipes', 'recipes.user_id', 'users.id')
    .join('user_progress', 'user_progress.user_id', 'users.id')
    .join('post_types', 'post_types.id', 'user_progress.post_type_id')
    .select('users.id as userId', 'profiles.firstname', 'profiles.lastname',
      'profiles.image as profile_image',
      'profiles.email', 'recipes.name', 'recipes.instructions', 'recipes.ingredients', 'recipes.image', 'recipes.id as recipeId', 'user_progress.post_type_id as postTypeId', 'post_types.value as postValue')
    .where({
      'users.id': id,
      'recipes.user_id': id,
      'user_progress.user_id': id
    })
    .then((objects) => formatProfile(objects, id))
    .catch(err => console.log(err))
}

function formatProfile (objects, id) {
  // loop through the object and print out users info

  if (objects.length == 0) {
    return defaultConn('users')
      .where('users.id', id)
      .join('profiles', 'users.id', 'profiles.user_id')
      .first()
      .then(profile => {
        profile.recipes = []
        return profile
      })
  } else {
    const {firstname, lastname, email, postTypeId, profile_image, postValue} = objects[0]
    const profile = {firstname, lastname, email, postTypeId, profile_image, postValue, recipes: []}
    objects.forEach(object => {
      const existing = profile.recipes.find((recipe) => {
        return recipe && recipe.recipeId === object.recipeId
      })
      if (!existing) {
        const {name, instructions, ingredients, image, recipeId} = object

        profile.recipes.push({name, instructions, ingredients, image, recipeId})
      }
    })

    return profile
  }
}

module.exports = {
  getProfile
}
