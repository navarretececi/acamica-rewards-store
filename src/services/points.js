import {BASE_URL, headers} from "./constants"

const bodyData = {amount: 1000}


export const addPoints = async() =>{
  try{
    const response = await fetch(BASE_URL+"user/points",{
        method : "POST",
        headers, 
        body : JSON.stringify(bodyData)
    })
    const data = await response.json()
    return data
  } catch (error){
      console.log(error)
  }
}