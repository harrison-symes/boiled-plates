import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {getRecipes} from '../../actions/recipes'
import Recipe from './Recipe'
import {searchRecipes} from '../../actions/remoteRecipes'
import {searchRecipeInfo} from '../../client-api/'
import RemoteRecipe from './RemoteRecipe'

class RecipeList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchIngredient: '',
      searchResult: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.addToSearch = this.addToSearch.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getRecipes())
  }

  addToSearch (e) {
    e.preventDefault()
    this.props.dispatch(searchRecipes(this.state.searchIngredient, (recipes) => {
      const f2fresult = recipes
      // console.log(f2fresult)
      this.setState({ searchIngredient: '' })
    }))
    this.handleAdd(this.state.searchIngredient)
  }

  handleAdd (result) {
    const {searchResult} = this.state
    searchResult.push(result)
    this.setState({searchResult, searchIngredient: ''})
  }
  handleOnChange (e) {
    this.setState({
      searchIngredient: e.target.value
    })
  }

  render () {
    const { remoteRecipes} = this.props
    const recipes = this.props.recipes
    // console.log(this.props.remoteRecipes)
    return (
      <div>
        <div className='recipe-banner'>
          Photo slide show?
        </div>

        <h3>Find a recipe</h3>
        <form onSubmit={this.addToSearch}>
          <input type='text' className='input-bar' placeholder="Search a recipe" value={this.state.searchIngredient} onChange={ this.handleOnChange}/>
          <input type='submit' value='Search' />
        </form>
        <div className='flex-container'>
          {remoteRecipes.map(({title, image, f2f}) => {
            return <div className='recipe-tickets'>
              <div className='user-recipe-title'>{title}</div>
              <img src={image} width='100%'/>
              <a href={f2f} >Checkout this recipe</a>
            </div>
          })}
        </div>

        <h3>User's recipe</h3>
        <div className='flex-container'>
          {recipes.map((recipe, i) => {
            return (
              <div className='recipe-tickets'>
                <Recipe key={i} recipe={recipe} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    remoteRecipes: state.remoteRecipes,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
