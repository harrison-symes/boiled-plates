import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

const Challenge = () => {
  return (
    <div className='link-challenge'>
      <div className='title-box'>
        Be in the force!
      </div>

      <div className='challenge-description'>
        <Link to='/register'><p>Join the challenge</p></Link>
      </div>

    </div>

  )
}

export default Challenge
