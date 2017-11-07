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
    this.props.dispatch(getRecipes())
    this.props.dispatch(getProfile())
    // dispatch request
  }
  render () {
    const profile = this.props.profile
    const {firstname, lastname} = profile

    return (
      <div className='profile'>

        <a className="top-button" href="#/profile" onClick={() => jump('.post-title')}>
          <img className="top-button-icon" src="images/down.png"height='30px'width='30px' />
          <span className="top-button-text"></span>
        </a>

        <div className='side-bar'>
          <UserProgress />
          <div className='badgets'>{firstname}, {lastname} </div>
        </div>
        <div className='post-container'>
          <div className='what-to-do'>
            <Link to='/form'><button className='options'>Add Your Recipe</button></Link>
            <button className='options'>Host A Kai</button>
            <button className='options'>Favourite List</button>
          </div>

          <div className='posts'>
            {/* <div className='post-title'>Try my recipe</div>
            <div className='returned-recipe'>
            </div>
            <img src='./images/placeholder.jpg' className='food-image' width='100%' />
            <div className='post-content'>Hey Kai pals, I just came up this recipe that I'd like to share with you. Let me know what you think!</div> */}

            <div className='recipe-container'>
              <UserRecipeContainer recipes={this.props.recipes}/>
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
    recipes: []
  }
}

const mapStateToProps = ({auth, recipes, profile}) => {
  return {
    recipes: recipes.filter(recipe => recipe.user_id === auth.user.id),
    profile
  }
}

export default connect(mapStateToProps)(Profile)

{ /* <div className='posts'>
  <div className='post-title'>My Kai Today!</div>
  <img src='./images/placeholder.jpg' className='food-image' width='100%' />
  <div className='post-content'>My first vegetarian meal. </div>
</div> */ }
