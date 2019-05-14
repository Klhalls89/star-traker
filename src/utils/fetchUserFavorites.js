import { createOption } from '../utils/options'
export const fetchUserFavorites = async(id) => {
  const url = `http://localhost:3000/api/users/${id}/favorites`;
  try{
    const method = "GET"
    const options = await createOption(method)
    const response = await fetch(url,options)
    const result = await response.json()
  
  if(result.status === "success"){
      const favorites = result.data
      return favorites;
  }
} catch(error){
  console.log("error fetching favorites")
  }
}