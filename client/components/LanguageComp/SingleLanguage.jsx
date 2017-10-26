import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { fetchScenarios } from '../actions/scenarios'
import { connect } from 'react-redux'

class SingleLanguage extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchScenarios())
  }

  render () {
    return (
      <div className='singleview-container'>
      </div>  
    )
  }
}

export default connect()(SingleLanguage)
