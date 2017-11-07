import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addNewComment} from '../../actions/addComment'

class AddComment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: ''
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

  handleSubmit (event) {
    const { comment } = this.state
    const newComment = { comment }

    this.props.dispatch(addNewComment(newComment))

    alert('Your comment has been submitted')

    event.preventDefault()
    
    console.log({comment: this.state.comment})
  }

  render () {
    return (
      <div className='comment-form'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label>
              Comments:
            <input type='text' name='Add Comment' placeholder='Comment' onChange={this.handleChange} />
          </label>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddComment)
