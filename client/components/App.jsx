import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Recipes from './Recipes'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Recipes} />
    </div>
  </Router>
)

export default App
