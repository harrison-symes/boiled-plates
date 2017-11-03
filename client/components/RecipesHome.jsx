import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'
import RecipeList from './recipes/RecipeList'

const Recipes = ({recipes, dispatch}) => {
  return (
    <div className='link-recipe'>
      <div className='title-box'>
        Find recipes
      </div>
        <div className='recipe-description'>
          <p id='recipe-d'>Add this, drain that, cook it up</p>
        </div>
      <div>
        <Link to="/recipes">
          Recipes
        </Link>
      </div>
    </div>
  )
}

export default connect()(Recipes)