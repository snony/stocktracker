import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { SocketClient, socketMiddleWare } from 'socket'
import api from './api'
import rootReducer from './reducer'

declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const url = 'https://ws-api.iextrading.com/1.0/tops'

const client = new SocketClient(url)

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(api), socketMiddleWare(client)))
)

export default store
