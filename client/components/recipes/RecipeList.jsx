import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {getRecipes} from '../../actions/recipes'
import Recipe from './Recipe'
import {searchRecipes} from '../../actions/remote-recipes'

class RecipeList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchIngredient: ''
    }
    this.getRemoteRecipe = this.getRemoteRecipe.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getRecipes())
  }

  getRemoteRecipe (e) {
    this.setState({
      searchIngredient: e.target.value
    })
    this.props.dispatch(searchRecipes(e.target.value))
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
        <form>
          <input type='text' onChange = {(e) => this.getRemoteRecipe(e)} value = {this.state.searchIngredient} placeholder="Search a recipe" className="search-bar"/>
          {/* <button onClick={this.getRemoteRecipe}>
            Search
          </button> */}
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({recipes}) => {
  // console.log({recipes})
  return {
    recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
