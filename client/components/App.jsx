import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Cats from './Cats'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Meow World</h1>
      <Route exact path="/" component={Cats} />
    </div>
  </Router>
)

export default App
