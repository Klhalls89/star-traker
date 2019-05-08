export const fetchData = async (url,options) => {
  try{
    const response = await fetch(url,options);
    return await response.json();
  }catch(error){
    throw new Error(error.message)
  }
}

// export const fetchData = (url,options) => {
//   fetch(url,options)
//   .then(response => {
//     if(response.ok){
//       console.log("its sucessful")
//       return response.Json()
//     }
//   }).catch(error => console.log(error))
//   }
  
