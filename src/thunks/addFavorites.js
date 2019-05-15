import { createOption } from '../utils/options'
import { addFavorites, isLoading } from '../actions/index'
import { fetchUserFavorites } from '../utils/fetchUserFavorites'



export const addFavoriteMovie = (url, method, data) => {

  return async (dispatch) => {
    const options = createOption(method, data)
    const userId = data.user_id
    try{
      dispatch(isLoading(true))
      const response = await fetch(url,options)
      const data = await response.json()
      if(data.status === "success"){
        const allFavs = await fetchUserFavorites(userId)
        dispatch(addFavorites(allFavs))
      }
    }catch(error){
      console.log("error")
    }
  }
}



