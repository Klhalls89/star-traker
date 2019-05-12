import { addUser } from '../actions'

export const userReducer = (state={}, action) => {
  switch(action.type) {
    case"ADD_USER":
      return action.user

    case"SIGN_OUT":
      return action.user

    default: 
      return state
  }
}
