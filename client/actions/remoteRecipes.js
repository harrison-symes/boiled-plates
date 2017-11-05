import { searchRecipeInfo } from '../client-api'

const RECEIVE_REMOTE_RECIPES = 'RECEIVE_REMOTE_RECIPES'

export const receiveRemoteRecipes = (recipes) => {
  console.log('this is', recipes)
  return {
    type: 'RECEIVE_REMOTE_RECIPES',
    recipes
  }
}

// const objBuilder = ({ image_url, recipe_id, title, social_rank, f2f_url }) => {
//   return {
//     title: title,
//     image: image_url,
//     f2f: f2f_url,
//     rank: social_rank
//   }
// }

// const recipes = results.recipes.map(recipe => {
//   return objBuilder(recipe)
// })

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
        const recipes = results.recipes[0]
        // console.log('before', recipes)
        const objBuilder = {
          title: recipes.title,
          image: recipes.image_url,
          f2f: recipes.f2f_url,
          rank: recipes.social_rank
        }
        // console.log('after', recipes)
        // console.log('this is', objBuilder)

        callback(recipes)
        dispatch(receiveRemoteRecipes(objBuilder))
      } else {
        console.log(err)
      }
    })
  }
}
