import { type } from 'os'
import { products } from '../../utils/types'
import { AppDispatch } from '../store'
import { AppAction } from './app.action'
import * as types from './app.actionTypes'
export interface IappState{
    loading:boolean,
    error:boolean,
    data:products[]

}
const intialState:IappState={
loading:false,
error:false,
data:[]
}


export const appReducer=(state=intialState,action:AppAction):IappState=>{
   const {type}=action;
   switch(type){
    case types.PRODUCT_REQUEST:{
        return{
            ...state,
            loading:true
        }
    }
    case types.PRODUCT_SUCCESS:{
        return{
            ...state,
            loading:false,
            data:action.payload
        }
    }
    case types.PRODUCT_ERROR:{
        return{
            ...state,
            loading:false,
            error:true
        }
    }
    default:return state

   }
}