import { products } from "../../utils/types";
import { AppDispatch } from "../store";
import * as types from './app.actionTypes'
import { ApiData } from "./app.api";

export interface IProductRequest{
     type: typeof types.PRODUCT_REQUEST 

}
export interface IProductSuccess{
     type: typeof types.PRODUCT_SUCCESS,
     payload:any

}
export interface IProductError{
     type: typeof types.PRODUCT_ERROR 

}
export type AppAction=IProductRequest|IProductSuccess|IProductError;
const productRequest=():IProductRequest=>{
    return {
         type:types.PRODUCT_REQUEST
    }
}
const productSuccess=(data:products[]):IProductSuccess=>{
    return {
         type:types.PRODUCT_SUCCESS,
         payload:data
    }
}
const productError=():IProductError=>{
    return {
         type:types.PRODUCT_ERROR
    }
}

export const getProduct=():any=>async(dispatch:AppDispatch)=>{
   dispatch(productRequest());
   try{
    let data=await ApiData()
    if(data){
        dispatch(productSuccess(data))
    }
   }
   catch(e){
     dispatch(productError())
   }

  





}