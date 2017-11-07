import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import jump from 'jump.js'

import {getRecipes} from '../../actions/recipes'
import {getProfile} from '../../actions/profile'
import UserProgress from './UserProgress.jsx'
import UserRecipeContainer from '../recipes/UserRecipeContainer'

class Profile extends React.Component {
  componentDidMount () {
    this.props.dispatch(getProfile())
  }
  render () {
    const profile = this.props.profile
    const {firstname, lastname, postValue, profile_image, recipes} = profile
    return (
      <div className='profile'>

        <a className="top-button" href="#/profile" onClick={() => jump('.options')}>
          <img className="top-button-icon" src="images/down.png"height='30px'width='30px' />
          <span className="top-button-text"></span>
        </a>

        <div className='side-bar'>
          <UserProgress score={postValue} image={profile_image} />
          <div className='badgets'>{firstname} {lastname}</div>
        </div>
        <div className='post-container'>
          <div className='what-to-do'>
            <Link to='/form'><button className='options'>Add Your Recipe</button></Link>
            <button className='options'>Host A Kai</button>
            <button className='options'>Favourite List</button>
          </div>

          <div className='posts'>

            <div className='recipe-container'>

              {recipes && <UserRecipeContainer recipes={recipes}/>}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

Profile.defaultProps = {
  profile: {
    firstname: '',
    lastname: '',
    email: '',
    postTypeId: '',
    profile_image: '',
    postValue: '',
    recipes: []
  }
}

const mapStateToProps = ({auth, recipes, profile}) => {
  return {
    profile
  }
}

export default connect(mapStateToProps)(Profile)
