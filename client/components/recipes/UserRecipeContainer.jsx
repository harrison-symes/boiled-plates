import React from 'react'
import { connect } from 'react-redux'

import Recipe from './Recipe'

function UserRecipeContainer (props) {
  const recipes = props.recipes
  return (
    <div className='recipe'>
      {recipes.map(recipe => {
        return (
          <Recipe recipe={recipe} />
        )
      })}
    </div>
  )
}

export default connect()(UserRecipeContainer)
