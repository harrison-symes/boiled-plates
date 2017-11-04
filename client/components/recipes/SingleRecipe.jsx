import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'


function SingleRecipe(props) {
  const recipe = props.recipe

  return (
    <div className=''>
        <img src={recipe.image} alt=''></img>
        <hr />
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
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