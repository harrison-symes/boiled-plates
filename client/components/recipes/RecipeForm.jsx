import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addNewRecipe} from '../../actions/addRecipe'

class RecipeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      ingredients: '',
      instructions: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Legit cannot remember why this is commented out anymore, but it sends back errors.
  // onChange(event) {
  //   const state = this.state
  //   state[event.target.]
  // }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Unsure if this is set up right?
  handleSubmit (event) {
    const { name, image, ingredients, instructions } = this.state
    const newRecipe = { name, image, ingredients, instructions }
    this.props.dispatch(addNewRecipe(newRecipe))
    alert('Your recipie has been submitted')
    event.preventDefault()
    console.log({name: this.state.name, image: this.state.image, ingredients: this.state.ingredients, instructions: this.state.instructions})
  }

  render () {
    return (
      <div className='recipe-form'>
        <Link to='/profile'>Back to profile</Link>
        <form className='form' onSubmit={this.handleSubmit}>
          <label>
              Name:
            <input type='text' name='name' placeholder='Recipe name' onChange={this.handleChange} />
          </label>
          <label>
              Image:
            <input type='text' name='image' placeholder='insert an image URL :)' onChange={this.handleChange} />
          </label>
          <label>
              Ingredients:
            <input type='text' name='ingredients' placeholder='Ingredients required' onChange={this.handleChange} />
          </label>
          <label>
              Instructions:
            <input type='text' name='instructions' placeholder='Instructions to make' onChange={this.handleChange} />
          </label>
          <button type='submit'>submit recipe</button>
        </form>
      </div>
    )
  }
}

export default connect()(RecipeForm)
