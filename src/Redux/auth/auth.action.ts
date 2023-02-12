import { login } from "../../utils/types"
import { AppDispatch } from "../store"
import * as types from "./auth.actionTypes"
import { userLoginApi } from "./auth.api"


export interface ILoginRequest{
    type: typeof types.USER_LOGIN_REQUEST
}
export interface ILoginSuccess{
    type: typeof types.USER_LOGIN_SUCCESS,
    payload:string
}
export interface ILoginError{
    type: typeof types.USER_LOGIN_ERROR
}
 const LoginRequest=():ILoginRequest=>{
    return {type:types.USER_LOGIN_REQUEST}
}
 const LoginSuccess=(token:string):ILoginSuccess=>{
    return {
        type:types.USER_LOGIN_SUCCESS,

        payload:token
    }

}
 const LoginError=():ILoginError=>{
    return {type:types.USER_LOGIN_ERROR}
}
export type AuthAction= ILoginRequest|ILoginSuccess|ILoginError

export const userlogin =(payload:login):any=>async(dispatch:any)=>{
   dispatch(LoginRequest());
    try{
    let data=await userLoginApi(payload)
    if(data){

        dispatch(LoginSuccess(data))
    }

    }catch(e){
      dispatch(LoginError())
    }
}