import { createOption } from '../utils/options'
import { addFavorites,isLoading } from '../actions/index'
import { fetchUserFavorites } from '../utils/fetchUserFavorites'


export const addFavoriteMovie = (url, method, data, userId) => {
  console.log(url, "addfav url")
  console.log(userId, "userId")
  return async (dispatch) => {
    const options = createOption(method, data)
    try{
      dispatch(isLoading(true))
      const response = await fetch(url,options)
      const data = await response.json()
      if(data.status === "success"){
        const allFavs = await fetchUserFavorites("1")
        console.log(allFavs, "allFavs")
      }

      console.log(data, "fav data")
    }catch(error){
      console.log("error")
    }
  }
}



