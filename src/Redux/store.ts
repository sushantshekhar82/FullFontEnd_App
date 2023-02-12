import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import { appReducer as AppReducer } from './app/app.reducer';

import {reducer as AuthReducer} from "./auth/auth.reducer"
const rootReducer=combineReducers({
AppReducer,
AuthReducer

})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppDispatch= typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


