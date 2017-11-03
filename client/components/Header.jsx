import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

const Header = (props) => {
  return (
    <div>
      <header>
        <Link to='/'>
          <h1>Kai Time!</h1>
        </Link>

        <div className='Nav'>
          {props.auth.isAuthenticated
            ? <div>
              <p>You are logged in as : {props.auth.user.username}</p>
              <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
            </div>
            : <div>
              <Link to='/register'>
                <span className='login'>Sign Up</span>
              </Link>
              <Link to='/login'>
                <span className='login'>Log In</span>
              </Link>
            </div>
          }
        </div>
      </header>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
