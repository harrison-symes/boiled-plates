import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Recipes from './recipes/Recipes'
import Header from './Header'
import RecipeForm from './recipes/RecipeForm'
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
        <Route path='/form' component={RecipeForm} />
        <Route exact path='/' component={Challenge} />
      </div>
      <Footer />
    </div>
  </Router>
)

export default App
