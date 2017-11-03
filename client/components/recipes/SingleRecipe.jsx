import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

function SingleRecipe(props) {
  const recipe = props.recipe

  return (
    <div className=''>
        <img src={recipe.image} alt=''></img>
        <hr />
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
    </div>
  )
}

export default SingleRecipe