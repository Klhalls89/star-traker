
export const getMovies = (movies) => ({
  type: "GET_MOVIES",
  movies
})

export const addUser = (user) => ({
  type: "ADD_USER",
  user
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