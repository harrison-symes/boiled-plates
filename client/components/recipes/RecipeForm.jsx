import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import ImageUploader from 'react-images-upload'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      pictures: [],
      ingredients: '',
      instructions: ''
    }

    this.valueChange = this.valueChange.bind(this)
    this.ingredientsChange = this.ingredientsChange.bind(this)
    this.instructionsChange = this.instructionsChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  valueChange(event) {
    this.setState({value: event.target.value})
  }

  ingredientsChange(event) {
    this.setState({ ingredients: event.target.value })
  }

  instructionsChange(event) {
    this.setState({ instructions: event.target.value })
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  }
    
  handleSubmit(event) {
    alert('Your recipie has been submitted')
    event.preventDefault()
  }


  render() {
    return (
      <div className='recipe-form'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.value} onChange={this.valueChange} />
          </label>
          {/* <ImageUploader withIcon={true} buttonText='Choose images' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880} /> */}
          <label>
            Ingredients:
            <input type='text' value={this.state.ingredients} onChange={this.ingredientsChange} />
          </label>
          <label>
            Instructions:
            <input type='text' value={this.state.instructions} onChange={this.instructionsChange} />
          </label>
          <button type='submit'>submit recipe</button>
        </form>
      </div>
    )
  }
}

export default RecipeForm 