export const redirectReducer = (state = false, action) => {
  switch(action.type){
    case "TOGGLE_REDIRECT":
      return action.bool
    default: 
      return state
  }
}