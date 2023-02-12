import axios, { AxiosResponse } from "axios"
import { login } from "../../utils/types"

export const userLoginApi=async(payload:login)=>{
    try{
        let res:AxiosResponse<{token:string}> =await axios.post("https://reqres.in/api/login",payload)
        return res.data.token

    }
  catch(e){
    console.log("userlogin error")
  }
    

    
}