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
    console.log(action.movies, "fav action movie")
    console.log(state, "state movies")
      return {
      favorites: [...state.favorites, action.movies]
      }

    default: 
      return state
  }
}
