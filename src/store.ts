import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { SocketClient, socketMiddleWare } from 'socket'
import api from './api'
import rootReducer from './reducer'

// declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any

// const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const client = new SocketClient()
const store = createStore(
  rootReducer /* preloadedState, */,
  applyMiddleware(thunkMiddleware.withExtraArgument(api), socketMiddleWare(client)))


export default store
