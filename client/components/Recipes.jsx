import React from 'react'
import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'

const renderRecipe = (recipe, key) => (
  <h1 key={key}>{recipe.text}</h1>
)

const Recipes = ({recipes, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getRecipes())}>Show Recipes</button>
    {recipes.map(renderRecipe)}
  </div>
)

const mapStateToProps = (state) => {
  return {recipes: state.recipes}

}

export default connect(mapStateToProps)(Recipes)
