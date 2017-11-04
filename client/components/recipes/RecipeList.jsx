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
      <div className='recipe-list'>
        <h1>Recipes Galore</h1>
        {recipes.map(recipe => {
          return (
            <Recipe recipe={recipe} />
          )
        })}
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
