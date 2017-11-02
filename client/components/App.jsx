import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import RecipesHome from './RecipesHome'
import Header from './Header'
import Banner from './Banner'
import Profile from './profile/Profile'
import Challenge from './Challenge'
import Login from './Login'
import Register from './Register'

// import Footer from './Footer'

// =============================
const App = () => (
  <Router>
    <div className='app'>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Banner} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <div className='flex-container'>
        {/* <Route exact path='/' component={RecipesHome} /> */}
        <Route exact path='/' component={Challenge} />
      </div>
      {/* <Footer /> */}
    </div>
  </Router>
)

export default App
