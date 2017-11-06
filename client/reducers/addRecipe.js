import { FORM_UPDATE_VALUE } from '../actions/addRecipe'

const initialState = {
  name: '',
  image: '',
  ingredients: '',
  instructions: ''
}

//Unsure of assigns, guessing its setting default to an empty string? I had followed this through on a web tutorial. 
export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_RECIPE:
    return assign('', state, {
      name: assign('', state.name, {
        [action.name]: action.value
      }),
      image: assign('', state, {
        [action.name]: action.value
      }),
      ingredients: assign('', state, {
        [action.name]: action.value
      }),
      instructions: assign('', state, {
        [action.name]: action.value
      })
    })
    default:
      return initialState
  }
}
