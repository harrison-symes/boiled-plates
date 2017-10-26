import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Scenarios from './LanguageComp/Scenarios'
import Phrases from './LanguageComp/Phrases'

const App = () => (
  <div className='app-container'>

    <Header />

    <Route exact path="/" component={Home} />
    <Route path="/languages/:id/scenarios" component={Scenarios} />
    <Route path="/scenarios/:id/phrases" component={Phrases} />

    <Footer />

  </div>
)

export default App
