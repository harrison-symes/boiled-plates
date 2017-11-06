import React from 'react'
import { connect } from 'react-redux'

import SingleRecipe from './SingleRecipe'

function UserRecipeContainer() {
  const recipes = props.recipes
  return (
    <div>
      {recipes.map(recipe => {
        return (
          <SingleRecipe recipe={recipe} />
        )
      })}
    </div>
  )
}