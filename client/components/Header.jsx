import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import {logoutUser} from '../actions/logout'
import SkyLight from 'react-skylight'

class Header extends React.Component {
  render () {
    const signUpForm = {
      backgroundColor: '#2e7a84',
      color: '#ffffff',
      width: '45%',
      height: '300px'
    }

    const {auth, dispatch} = this.props

    return (
      <div>
        <header>
          <Link to='/'>
            <h1>Kai Time!</h1>
          </Link>

          <div className='Nav'>
            {this.props.auth.isAuthenticated
              ? <div>
                <p>You are logged in as : {auth.user.username}</p>
                <button onClick={() => dispatch(logoutUser())}>Logout</button>
              </div>
              : <div>

                <span className='login'><button onClick={() => this.signupForm.show()}>SIGN UP</button></span>
                <SkyLight dialogStyles={signUpForm} hideOnOverlayClicked ref={ref => (this.signupForm = ref)} title="Sign Me Up">
                  <Register />
                </SkyLight>

                <span className='login'><button className='login' onClick={() => this.loginForm.show()}>LOG IN</button></span>
                <SkyLight dialogStyles={signUpForm} hideOnOverlayClicked ref={ref => (this.loginForm = ref)} title="Log Me In">
                  <Login />
                </SkyLight>
              </div>
            }
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
