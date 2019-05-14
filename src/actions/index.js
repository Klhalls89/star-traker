
export const getMovies = (movies) => ({
  type: "GET_MOVIES",
  movies
})

export const addUser = (id,name,favorites) => ({
  type: "ADD_USER",
  id,
  name, 
  favorites
})

export const signOut = (user) => ({
  type: "SIGN_OUT",
  user

})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})
 
export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const redirect = (bool) => ({
  type: "TOGGLE_REDIRECT",
  bool
})

export const addFavorites = (movies) => ({
  type: "ADD_FAVORITES",
  movies
})

export const deleteFavorite = (id) => ({
  type: "DELETE_FAVORITE",
  id
})