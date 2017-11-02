import React from 'react'
import { Link } from 'react-router-dom'

import SingleRecipe from './SingleRecipe.jsx'

function Recipe(props) {
  const recipe = props.recipe

  return (
    <div className=' '>
        <Link to={`/${props.recipe.id}/view`}><img src={recipe.image} alt=''></img></Link>
        <hr />
        <Link to={`/${props.recipe.id}/view`}><p>{props.recipe.name}</p></Link>
    </div>
  )
}

Recipe.defaultProps = {
  car: {
    name: '',
    image: ''
  }
}
export default Recipe