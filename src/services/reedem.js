import {BASE_URL, headers} from "./constants"

//const bodyData = {`productId: ${productId}`}


export const reedem = async(Id) =>{
  try{
    const bodyData = {productId: Id}
    const response = await fetch(BASE_URL+"redeem",{
        method : "POST",
        headers, 
        body : JSON.stringify(bodyData)
        //body : {productId: productId}
    })
    const data = await response.json()
    return data
  } catch (error){
      console.log(error)
  }
}