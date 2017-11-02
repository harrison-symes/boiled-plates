import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Recipes from './Recipes'
import Challenge from './Challenge'
// import Login from './Login'
// import Register from './Register'

import Footer from './Footer'

// =============================
const App = () => (
  <Router>
    <div className='app'>
      <Header />
      {/* <Route path='/login' component={Login} />
      <Route path='/register' component={Register} /> */}
      <div className='flex-container'>
        <Route exact path='/' component={Recipes} />
        <Route exact path='/' component={Challenge} />
      </div>
      <Footer />
    </div>
  </Router>
)

export default App
