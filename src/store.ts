import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import api from './api'
import rootReducer from './reducer'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware.withExtraArgument(api)))

export default store
