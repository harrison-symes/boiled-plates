import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <Link to='/'>
        <h1>Kai Time!</h1>
        </Link>
        <div className='user-login'>
          <Link to='/register'>
            <span className='login'>Sign Up</span>
          </Link>
          <Link to='/login'>
            <span className='login'>Log In</span>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
