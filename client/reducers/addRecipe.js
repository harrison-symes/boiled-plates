import { FORM_UPDATE_VALUE } from '../actions/addRecipe'

const initialState = {
  name: '',
  ingredients: '',
  instructions: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_RECIPE:
    return assign('', state, {
      name: assign('', state.name, {
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
