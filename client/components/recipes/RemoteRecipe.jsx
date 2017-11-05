import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { searchRecipes } from '../../actions/remoteRecipes'

class RemoteRecipe extends React.Component {
  
  render () {
    const { recipes } = this.props.recipes
    // console.log(this.props.recipes)
    return (
      <div>

        <div className='flex-container'>

          <div className='recipe-tickets'>
            Checkout these delicious options: 

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => {
  return {
    recipes
  }
}

export default connect(mapStateToProps)(RemoteRecipe)
