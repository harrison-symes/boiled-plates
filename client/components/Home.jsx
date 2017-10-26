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
          <p></p>
        </div>
        <div className='info'>
          <h3>Speak anytime, anywhere!</h3>
          <p>//MISSION OR A BACKGROUND TO WHY THIS PAGE EXISTS.</p>
        </div>
        <Languages />

      </div>
    )
  }
}

export default connect()(Home)
