import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render () {
    return (
      <div className='profile'>
        <div id='d3-graph'>
          <div id='pro-image'>User's Photo</div>
        </div>
        <div className='side-bar'>
          <p className='options'>Add Your Recipe</p>
          <p className='options'>Add Your Recipe</p>
          <p className='options'>Add Your Recipe</p>
        </div>
        <div className='badgets'></div>
      </div>
    )
  }
}

export default connect()(Profile)
