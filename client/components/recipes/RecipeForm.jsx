import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import ImageUploader from 'react-images-upload'

class RecipeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pictures: [],
      ingredients: '',
      instructions: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  // onChange(event) {
  //   const state = this.state
  //   state[event.target.]
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  }
    
  handleSubmit(event) {
    event.preventDefault()
    alert('Your recipie has been submitted')
    console.log({name: this.state.name, ingredients: this.state.ingredients, instructions: this.state.instructions})
  }

  render() {
    return (
      <div className='recipe-form'>
        <Link to='/profile'>Back to profile</Link>
          <form className='form' onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type='text' name='name' placeholder='Recipe name' onChange={this.handleChange} />
            </label>
            {/* <ImageUploader withIcon={true} buttonText='Choose images' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880} /> */}
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