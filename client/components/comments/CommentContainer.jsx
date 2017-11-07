import React from 'react'
import { connect } from 'react-redux'

import SingleComment from './SingleComment'

const CommentContainer = (props) => {
  console.log(props)
  const comments = props.comments
  // const recipeId = props.
  
  return (
    <div className='comment'>
      {comments.map(comment => {
        console.log(comment)
        return (
          <div className=''>
            <p>{comment.comments}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({auth, comments}) => {
  console.log({auth, comments})
  return {
    comments: comments.filter(comment => comment.user_id == auth.user.id)
  }
}

export default connect(mapStateToProps)(CommentContainer)

{ /* <SingleComment comment={comment} /> */ }
