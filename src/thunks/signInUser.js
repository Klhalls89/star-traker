import { addUser, isLoading, hasErrored, redirect } from '../actions';
import { createOption } from '../utils/options';
import { fetchUserFavorites } from '../utils/fetchUserFavorites';

export const signInUser = (url, method, data ) => {
  return async (dispatch) => {
    const options = createOption(method, data)
    try {
      dispatch(isLoading(true))
      const response = await fetch(url,options)
      console.log(response, "fetch response")
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const user = await response.json()
      console.log(user, "user")
      const userInfo = user.data
      const favorites = await fetchUserFavorites(userInfo.id)
      console.log(favorites, "sign in favs")
      dispatch(addUser(userInfo.id, userInfo.name, favorites))
      dispatch(isLoading(false))
      dispatch(redirect(true))
      console.log("redirect hits")
    } catch (error) {
      dispatch(hasErrored('email or password dosn\'t match'))
    }
  }
}