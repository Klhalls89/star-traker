import { addUser, isLoading, hasErrored, redirect } from '../actions';
import { createOption } from '../utils/options';

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
      dispatch(addUser(userInfo))
      dispatch(isLoading(false))
      dispatch(redirect(true))
    } catch (error) {
      dispatch(hasErrored('email or password dosn\'t match'))
    }
  }
}