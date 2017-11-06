import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import jump from 'jump.js'

import { getRecipes} from '../../actions/recipes'
// import { Route } from 'react-router-dom'

import UserProgress from './UserProgress.jsx'

class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRecipes())
  }
  render () {
    console.log(this.props.recipes)
    return (
      <div className='profile'>

        <a className="top-button" href="#/profile" onClick={() => jump('.post-title')}>
          <img className="top-button-icon" src="images/down.png"height='30px'width='30px' />
          <span className="top-button-text"></span>
        </a>

        <div className='side-bar'>
          <UserProgress />
          <div className='badgets'>Badgets goes here</div>
        </div>
        <div className='post-container'>
          <div className='what-to-do'>
            <Link to='/form'><button className='options'>Add Your Recipe</button></Link>
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
            <div className='returned-recipe'>
            
            </div>
            <img src='./images/placeholder.jpg' className='food-image' width='100%' />
            <div className='post-content'>Hey Kai pals, I just came up this recipe that I'd like to share with you. Let me know what you think!</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, recipes}) => {
  return {
    recipes: recipes.filter(recipe => recipe.profile_id == auth.user.id)
  }
}

export default connect(mapStateToProps)(Profile)

{ /* <Route exact path='/addrecipe' component={Addrecipe} /> */ }
