import React from 'react'
import { Link } from 'react-router-dom'
// import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'
import RecipeList from './recipes/RecipeList'
// import {getRecipes} from '../actions/recipes'

const Recipes = () => {
  const recipes = props.recipes
  return (
    <div className='link-recipe'>
      <div className='title-box'>
        Find recipes
      </div>
      <Link to={`/${props.recipes.id}/recipe`}>
        <div className='recipe-description'>
          <p id='recipe-d'>Add this, drain that, cook it up</p>
        </div>
      </Link>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {recipes: state.recipes}

// }

// export default connect(mapStateToProps)(Recipes)
export default Recipes

// const renderRecipe = (recipe, key) => (
//   <h1 key={key}>{recipe.text}</h1>
// )

// const Recipes = ({recipes, dispatch}) => (
//   <div>
//     <button onClick={() => dispatch(getRecipes())}>Show Recipes</button>
//     {recipes.map(renderRecipe)}
//   </div>
// )

