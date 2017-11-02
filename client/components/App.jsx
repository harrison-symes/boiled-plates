import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Recipes from './Recipes'
import Challenge from './Challenge'
import Login from './Login'
import Register from './Register'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path='/' component={Recipes} />
      <Route path='/challenge' component={Challenge} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  </Router>
)

export default App
