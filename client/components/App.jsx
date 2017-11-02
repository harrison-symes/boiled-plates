import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Recipes from './Recipes'
import Challenge from './Challenge'

import Footer from './Footer'

// =============================
const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <div className='flex-container'>
        <Recipes />
        <Challenge />
      </div>
      <Footer />
    </div>
  </Router>
)

export default App
