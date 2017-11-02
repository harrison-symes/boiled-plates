import React from 'react'
import { connect } from 'react-redux'
// import { Route } from 'react-router-dom'

// import Addrecipe from './Addrecipe'

class Profile extends React.Component {
  render () {
    return (
      <div className='profile'>
        <div className='side-bar'>
          <div id='d3-graph'>
            <div id='pro-image'>User's Photo</div>
          </div>
          <div className='badgets'>Badgets goes here</div>
        </div>
        <div className='post-container'>
          <div className='what-to-do'>
            <button className='options'>Add Your Recipe</button>
            <button className='options'>Host A Kai</button>
            <button className='options'>Favourite List</button>
          </div>

          <div className='posts'>
            <div className='post-title'>My Kai Today!</div>
            <img src='./images/placeholder.jpg' className='food-image' width='100%' />
            <div className='post-content'>My first vegetarian meal. </div>
          </div>

          <div className='posts'>
            <div className='post-title'>Try my recipe</div>
            <img src='./images/placeholder.jpg' className='food-image' width='100%' />
            <div className='post-content'>Hey Kai pals, I just came up this recipe that I'd like to share with you. Let me know what you think!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Profile)

{ /* <Route exact path='/addrecipe' component={Addrecipe} /> */ }
