import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import addNewComment from '../../actions/addComment'
import AddComment from '../comments/AddComment'
import CommmentContainer from '../comments/CommentContainer'

class SingleRecipe extends React.Component {
  componentDidMount () {
    this.props.dispatch(addNewComment())
  }

  // console.log(this.state.props)
  render () {
    const { recipe } = this.props
    return (
      <div className=''>
        <div>
          <img src={recipe.image} alt=''></img>
          <hr />
          <p>{recipe.name}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
        <div className='commment-section'>
          <AddComment recipeId={recipe.id}/>
        </div>
        <div className='comment-container'>
          <CommmentContainer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  return {
    recipe: state.recipes.find(recipe => id === recipe.id),
    comments: state.comments
  }
}

export default connect(mapStateToProps)(SingleRecipe)
