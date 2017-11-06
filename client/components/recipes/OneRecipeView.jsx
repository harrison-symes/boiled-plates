import React from 'react'
import { connect } from 'react-redux'

import SingleRecipe from './SingleRecipe'

function OneRecipeView(props) {
  const recipes = props.recipes
  return (
    <div className='recipe'>
      {recipes.map(recipe => {
        return (
          <SingleRecipe recipe={recipe} />
        )
      })}
    </div>
  )
}

export default connect()(OneRecipeView)