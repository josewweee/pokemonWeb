import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

/* CREATING THE REDUX STORE TO BE USED BY THE COMPONENTS */
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store