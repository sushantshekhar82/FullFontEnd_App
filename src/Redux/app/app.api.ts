import axios,{AxiosResponse} from "axios";
import { products } from "../../utils/types";


export  const ApiData=async ()=>{
   try{
     let res:AxiosResponse<products[]>=await  axios.get('http://localhost:8080/products');
      return res.data
    }catch(e){
  console.log("error in getting Product data",e)
   }
}