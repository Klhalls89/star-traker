export const favoriteReducer = (state=[], action) => {
  console.log(state.user.favorites, "fav state reducer")
  console.log(action.movie, "movie reducer")
  switch(action.type){
    case "ADD_FAVORITES":
      return action.movies
    default: 
      return state
  }
}