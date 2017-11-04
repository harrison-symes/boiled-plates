import { searchRecipeInfo } from '../client-api'

const RECEIVE_REMOTE_RECIPES = 'RECEIVE_REMOTE_RECIPES'

export const receiveRemoteRecipes = (recipes) => {
  return {
    type: 'RECEIVE_REMOTE_RECIPES',
    recipes
  }
}

const objBuilder = ({ image_url, source_url, title, social_rank, f2f_url }) => {
  return {
    image: image_url,
    source: source_url,
    title: title,
    rank: social_rank,
    f2f: f2f_url
  }
}

const yourRecipe = ({ recipes }) => {
  return {
    recipes: objBuilder.recipes
  }
}

export function searchRecipes (ingredient) {
  return (dispatch) => {
    searchRecipeInfo(ingredient, (err, recipes) => {
      if (!err) {
        console.log({ recipes })
        const recipeObj = {
          name: recipes.name,
          recipe: yourRecipe(recipes.recipe[0])
        }
        console.log(recipeObj)
        dispatch(receiveRemoteRecipes(recipeObj))
      }
    })
  }
}
