import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Recipes from './Recipes'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Recipes} />
      <Route path="/challenge" component={Challenge} />
    </div>
  </Router>
)

export default App
