import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {getRecipes} from '../../actions/recipes'
import Recipe from './Recipe'

class RecipeList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getRecipes())
  }
  render () {
    const {recipes} = this.props
    return (
      <div>
        <div className='recipe-banner'>
          Photo slide show?
        </div>

        <h3>Find a recipe</h3>
        <input type='text' className='input-bar' placeholder='Search a recipe by ingredients...'/>
        <div className='flex-container'>
          Search result flys in here 
          <div className='recipe-tickets'>
            Result one
          </div>
          <div className='recipe-tickets'>
            Result two
          </div>
        </div>

        <h3>Check our user's recipe</h3>
        <div className='flex-container'>
          {recipes.map(recipe => {
            return (
              <div className='recipe-tickets'>
                <Recipe recipe={recipe} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({recipes}) => {
  return {
    recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
