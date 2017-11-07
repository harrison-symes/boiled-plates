import React from 'react'
import { connect } from 'react-redux'

import SingleComment from './SingleComment'

function CommentContainer (props) {
  const comments = props.comments
  return (
    <div className='comment'>
      {comments.map(comment => {
        return (
          <SingleComment comment={comment} />
        )
      })}
    </div>
  )
}

export default connect()(CommentContainer)
