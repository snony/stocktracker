import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import api from './api'
import rootReducer from './reducer'

declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(api)))
)

export default store
