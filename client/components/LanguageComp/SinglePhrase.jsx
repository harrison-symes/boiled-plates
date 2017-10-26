import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

const SinglePhrase = (props) => {
  return (
    <div className='single-scenario'>
      <div className='scenario'>
        <img />
        <p>{props.phrase.phrase}</p>
      </div>
    </div>
  )
}

export default connect()(SinglePhrase)
