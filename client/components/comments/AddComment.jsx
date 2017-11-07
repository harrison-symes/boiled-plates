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

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { comment } = this.state
    const newComment = { comment }
    this.props.dispatch(addNewComment(newComment, this.props.recipeId))

    alert('Your comment has been submitted')

  }

  render () {
    return (
      <div className='comment-form'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label>
              Comments:
            <input type='text' name='comment' placeholder='Comment' onChange={this.handleChange} />
          </label>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddComment)
