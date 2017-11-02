import React from 'react'
import { connect } from 'react-redux'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Your recipie has been submitted' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className='recipe-form'>
        <form onSubmit={this.handleSubmit}>
          
        </form>
      </div>
    )
  }
}

export default RecipeForm 