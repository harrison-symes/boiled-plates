import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route exact path="/" component={Header} />      
    </div>
  </Router>
)

export default App
