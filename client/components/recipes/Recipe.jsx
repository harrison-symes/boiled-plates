import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRecipe } from '../../actions/recipes'
import SingleRecipe from './SingleRecipe.jsx'

const Recipe = (props) => {
  console.log(props)
  return (
    <Link to={`/recipes/${props.recipe.id}`}>
      <div className=' '>
        <img src={props.recipe.image} alt='' />
         <br />
        <p>{props.recipe.name}</p>
      </div>
    </Link>
  )
}

export default connect()(Recipe)

// class Recipe extends React.Component {
//   componentDidMount() {
//     const recipeId = this.props.match.params.id
//     this.props.dispatch(getRecipe(recipeId))
//   }
//   render() {
//     return (
//       <Link to={`/recipes/${props.recipe.id}/SingleRecipe`}>
//         <div className=' '>
//           <img src={props.recipe.image} alt='' />
//           <br />
//           <p>{props.recipe.name}</p>
//         </div>
//       </Link>
//     )
//   }
// }

// const mapStateToProps = ({recipe}) => {
//   return {
//     recipe
//   }
// }

// export default connect(mapStateToProps)(Recipe)