import { searchRecipeInfo } from '../client-api'

const RECEIVE_REMOTE_RECIPES = 'RECEIVE_REMOTE_RECIPES'

export const receiveRemoteRecipes = (recipes) => {
  return {
    type: 'RECEIVE_REMOTE_RECIPES',
    recipes
  }
}

const objBuilder = ({ image_url, recipe_id, title, social_rank, f2f_url }) => {
  return {
    image: image_url,
    recipeId: recipe_id,
    title: title,
    rank: social_rank,
    f2f: f2f_url
  }
}

// const yourRecipe = ({ recipes }) => {
//   // console.log({ recipes })
//   return {
//     recipes: objBuilder.recipes
//   }
// }

export function searchRecipes (ingredient, callback) {
  return (dispatch) => {
    searchRecipeInfo(ingredient, (err, results) => {
      if (!err) {
        console.log('before', results.recipes)
        const recipes = results.recipes.map(recipe => {
          return objBuilder(recipe)
        })
        console.log('after', recipes)

        callback(recipes)
        dispatch(receiveRemoteRecipes(recipes))
      } else {
        console.log(err)
      }
    })
  }
}
