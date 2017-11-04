import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import SkyLight from 'react-skylight'

import { getRecipe } from '../../actions/recipes'
import SingleRecipe from './SingleRecipe.jsx'

const Recipe = (props) => {
  return (
    <div className=' '>
      <div className='user-recipe-title'>{props.recipe.name}</div>
      <img src={props.recipe.image} alt='' width='100%'/>
      <Link to={`/recipes/${props.recipe.id}`}>
        <div className='check-it-out'>Checkout "username's" recipe</div>
      </Link>

    </div>
  )
}

export default connect()(Recipe)
