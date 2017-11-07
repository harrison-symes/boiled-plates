import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function SingleComment (props) {
  const comment = props.comment

  return (
    <div className=''>
      <img src={comment.image} alt=''></img>
      <hr />
      <p>{comment}</p>
    </div>
  )
}

export default connect()(SingleComment)
