import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'

const App = () => (
  <div className='app-container'>

    <Header />

    <Route exact path="/" component={Home} />

    <Footer />

  </div>
)

export default App
