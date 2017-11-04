import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRecipe } from '../../actions/recipes'
import SingleRecipe from './SingleRecipe.jsx'

const Recipe = (props) => {
  console.log(props)
  return (
    <Link to={`/recipes/${props.recipe.id}`}>

      <img src={props.recipe.image} alt='' />
      <br />
      <p>{props.recipe.name}</p>
    </Link>
  )
}

export default connect()(Recipe)
