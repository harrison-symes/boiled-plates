import React from 'react'
import { Link } from 'react-router-dom'

import Recipe from './Recipe'

function RecipeList(props) {
  const recipes = props.recipes
  return (
    <div className='recipe-list'>
      {recipes.map(recipe => {
        return (
          <Recipe recipe={recipe} />
        )
      })}
    </div>
  )
}

export default RecipeList


