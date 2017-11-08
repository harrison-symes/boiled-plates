import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function SingleComment (props) {
  const comment = props.comment
  const user = props.userId

  return (
    <div className=''>
      <p>{comment}</p>
      <p>{user}</p>
    </div>
  )
}

export default connect()(SingleComment)
