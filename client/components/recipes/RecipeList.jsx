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
    // this.getRemoteRecipe = this.getRemoteRecipe.bind(this),
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
      console.log(f2fresult)
      // this.setState({ searchIngredient: f2fresult })
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
    const {title, image} = this.props.remoteRecipes
    console.log(title)
    return (
      <div>
        <div className='recipe-banner'>
          Photo slide show?
        </div>

        <h3>Find a recipe</h3>
        <form onSubmit={this.addToSearch}>
          <input type='text' className='input-bar' placeholder="Search a recipe" value={this.state.searchIngredient} onChange={(e) => this.handleOnChange(e)}/>
          <input type='submit' value='Search' />
        </form>
        <div className='flex-container'>
          <div className='recipe-tickets'>
            {title}
            {image}
          </div>
          <div className='recipe-tickets'>
            Result two
          </div>
        </div>

        {/* <h3>User's recipe</h3>
        <div className='flex-container'>
          {recipes.map(recipe => {
            return (
              <div className='recipe-tickets'>
                <Recipe recipe={recipe} />
              </div>
            )
          })}
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = ({remoteRecipes}) => {
  return {
    remoteRecipes
  }
}

export default connect(mapStateToProps)(RecipeList)
