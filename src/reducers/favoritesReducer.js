export const favoriteReducer = (state=[], action) => {
  switch(action.type){
    case "ADD_FAVORITES":
      return action.movies
    default: 
      return state
  }
}