import { addUser } from '../actions'

export const userReducer = (state={}, action) => {
  switch(action.type) {
    case"ADD_USER":
    return {
      id: action.id,
      name: action.name,
      favorites: action.favorites
  }
    case"SIGN_OUT":
      return action.user
    case"ADD_FAVORITES":
      return {
      id:state.id,
      name: state.name,
      favorites: action.movies
      }
    default: 
      return state
  }
}
