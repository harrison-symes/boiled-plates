import React from 'react'
import { connect } from 'react-redux'

import SingleComment from './SingleComment'

const CommentContainer = (props) => {
  // console.log('top props', props)
  const { comments, recipe_id, user_id } = props

  // const user_id: 1 = 'Aaron',
  // const user_id: 2 = 'Daz',
  // const user_id: 3 = 'Skye',
  // const user_id: 4 = 'Rajal',

  // const recipeId = props.

  return (
    <div className='comment'>
      {comments.map(comment => {
        return (
          <div className=''>
            <span>{comment.username} said: </span>
            <span>{comment.comments}</span>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({auth, comments, recipes}, props) => {
  // console.log({auth, comments})
  return {
    comments: comments.filter(comment => comment.recipe_id = props.recipeId)

  }
}

export default connect(mapStateToProps)(CommentContainer)

{ /* <SingleComment comment={comment} /> */ }
