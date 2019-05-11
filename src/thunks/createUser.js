import { addUser, isLoading, hasErrored } from '../actions/index'
import { createOption } from '../utils/options'
export const createUser = (url, method2, data2 ) => {
 
  return async (dispatch) => {
    const method = method2
    const options = createOption(method, data2)
    try {
      dispatch(isLoading(true))
      const response = await fetch(url,options)
      console.log(response)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      // const data = await response.json()
      // debugger;
      dispatch(addUser(data2))
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}