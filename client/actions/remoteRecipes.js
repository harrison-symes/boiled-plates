import { searchRecipeInfo } from '../client-api'

export const RECEIVE_REMOTE_RECIPES = 'RECEIVE_REMOTE_RECIPES'

export const receiveRemoteRecipes = (recipes) => {
  // console.log('this is', recipes)
  return {
    type: RECEIVE_REMOTE_RECIPES,
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
        const recipes = results.recipes.slice(0, 5).map(recipe => {
          return {
            title: recipe.title,
            image: recipe.image_url,
            f2f: recipe.f2f_url,
            rank: recipe.social_rank
          }
        })
        // console.log('before', recipes)
        

        const objBuilder = 

        // forEach(function callback( )) {

        // }
        // console.log('after', objBuilder)
        callback(recipes)
        dispatch(receiveRemoteRecipes(recipes))
      } else {
        console.log(err)
      }
    })
  }
}
