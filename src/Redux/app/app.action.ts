import { AppDispatch } from "../store";
import * as types from './app.actionTypes'
import { ApiData } from "./app.api";

export interface IProductRequest{
    type: typeof types.PRODUCT_REQUEST 

}
export interface IProductSuccess{
    type: typeof types.PRODUCT_SUCCESS

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
const productSuccess=():IProductSuccess=>{
    return {
        type:types.PRODUCT_SUCCESS
    }
}
const productError=():IProductError=>{
    return {
        type:types.PRODUCT_ERROR
    }
}

export const getProduct=()=>(dispatch:AppDispatch)=>{
   dispatch(productRequest());

  





}