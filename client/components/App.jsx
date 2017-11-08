import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import RecipesHome from './RecipesHome'
import Header from './Header'
import Banner from './Banner'
import Profile from './profile/Profile'
import SingleProfile from './profile/SingleProfile'
import Challenge from './Challenge'
import Login from './Login'
import Register from './Register'
import RecipeList from './recipes/RecipeList'
import SingleRecipe from './recipes/SingleRecipe'
import RecipeForm from './recipes/RecipeForm'
import RemoteRecipe from './recipes/RemoteRecipe'
// import Star from './star/Star'

// import UserProgress from './profile/UserProgress.jsx'

// import Footer from './Footer'

const App = () => (
  <Router>
    <div className='app'>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Banner} />
      <Route exact path="/recipes" component={RecipeList} />
      <Route exact path="/recipes/:id" component={SingleRecipe} />
      <Route path='/remoterecipes' component={RemoteRecipe} />
      <Route path='/profile' component={Profile} />
      {/* <Route path='./star' component={Star} /> */}
      <Route path='/profile/:id' component={SingleProfile} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/form' component={RecipeForm} />
      <div className='flex-container'>
        <Route exact path='/' component={RecipesHome} />
        <Route exact path='/' component={Challenge} />
        {/* <Route path='/testchart' component={UserProgress} /> */}
      </div>
      {/* <Footer /> */}
    </div>
  </Router>
)

export default App
