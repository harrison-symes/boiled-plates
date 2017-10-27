import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { fetchLanguages } from '../actions/languages'
import { connect } from 'react-redux'

import Languages from './LanguageComp/Languages.jsx'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLanguages())
  }

  render () {
    return (
      <div className='container'>
        <div className="banner">
          <h2> South Pacific Lingo </h2>

          <div className='info'>
            <h3>Speak anytime, anywhere!</h3>
            <p>A fun and accessible way to learn Pacific Languages, so you can get to speaking in your day to day interactions!</p>
          </div>
        </div>
        <Languages />

      </div>
    )
  }
}

export default connect()(Home)
