import { createOption } from '../utils/options'
import { addFavorites, isLoading } from '../actions/index'
import { fetchUserFavorites } from '../utils/fetchUserFavorites'



export const addFavoriteMovie = (url, method, data) => {
  console.log("url:",url, "method:",method)
  console.log("data:",data, "userId:",data.user_id)

  return async (dispatch) => {
    const options = createOption(method, data)
    const userId = data.user_id
    console.log(userId)
    try{
      dispatch(isLoading(true))
      const response = await fetch(url,options)
      const data = await response.json()
      if(data.status === "success"){
        const allFavs = await fetchUserFavorites(userId)
        console.log(allFavs, "addFavorites all favs")
        dispatch(addFavorites(allFavs))
        console.log( "after dispatch")
      }
    }catch(error){
      console.log("error")
    }
  }
}



