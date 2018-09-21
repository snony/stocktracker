import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import api from './api'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware.withExtraArgument(api)))

export default store
