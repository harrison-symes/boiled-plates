import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <h1>Kai Time!</h1>
        <div className='user-login'>
          <Link to='/signup'>
            <span className='login'>Sign Up</span>
          </Link>
          <span className='login'>Log In</span>
        </div>
      </header>
      <div className='banner'>
        <div className='quotes'>
          Why?
        </div>
        <div className='quotes'>
          How?
        </div>
        <div className='quotes'>
          What?
        </div>
      </div>
    </div>
  )
}

export default Header
