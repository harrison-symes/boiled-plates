import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AddComment from '../comments/AddComment'
import CommmentContainer from '../comments/CommentContainer'

function SingleRecipe (props) {
  const recipe = props.recipe

  return (
    <div className=''>
      <div>
        <img src={recipe.image} alt=''></img>
        <hr />
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
      <div className='commment section'>
        <AddComment />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  return {
    recipe: state.recipes.find(recipe => id === recipe.id)
  }
}

export default connect(mapStateToProps)(SingleRecipe)
