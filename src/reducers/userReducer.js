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

    default: 
      return state
  }
}
