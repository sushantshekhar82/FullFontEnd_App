import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({

})
export type AppDispatch= typeof store.dispatch;
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

