import React from 'react'
import { connect } from 'react-redux'
// import ImageUploader from 'react-images-upload'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      pictures: { pictures: [] },
      ingredients: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Your recipie has been submitted' + this.state.value)
    event.preventDefault()
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  } 

  render() {
    return (
      <div className='recipe-form'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          {/* <ImageUploader withIcon={true} buttonText='Choose images' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880} /> */}
          <label>
            Ingredients:
            <input type='text' value={this.state.ingredients} onChange={this.handleChange} />
          </label>
          <label>
            Instructions:
            <input type='text' value={this.state.instructions} onChange={this.handleChange} />
          </label>
          <button type='submit'>submit recipe</button>
        </form>
      </div>
    )
  }
}

export default RecipeForm 