import { AuthAction } from "./auth.action"
import * as types from './auth.actionTypes'

export interface AuthState{
    loading:boolean,
    error:boolean,
    isAuth:boolean,
    token:string
}
const intitialState={
    loading:false,
    error:false,
    isAuth:false,
    token:""
}

export const reducer=(state:AuthState=intitialState,action:AuthAction):AuthState=>{
    const {type}=action;
    switch(type){
        case types.USER_LOGIN_REQUEST:{
            return{
                ...state,
                loading:true,

            }
        }
        case types.USER_LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                isAuth:true,
                token:action.payload
                
            }
        }
        case types.USER_LOGIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:false
                
            }
        }
        default:return state
    }

}