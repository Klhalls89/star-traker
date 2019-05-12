import { addUser, isLoading, hasErrored, redirect } from '../actions/index';
import { createOption } from '../utils/options';

export const signInUser = (url, method2, data2 ) => {
  return async (dispatch) => {
    const method = method2
    const options = createOption(method, data2)
    try {
      dispatch(isLoading(true))
      const response = await fetch(url,options)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      console.log(data, "signin data")
      const userInfo = data.data[0]
      console.log(userInfo, "usrinfo")
      dispatch(addUser(userInfo))
      dispatch(isLoading(false))
      dispatch(redirect(true))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}