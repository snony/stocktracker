import 'ress'
import './colours.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Dispatch } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { API, GlobalState } from 'types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { bootstrap } from './bootstrapActions'
import StockTracker from './stockTracker'
import store from './store'

library.add(faSearch)

const storeDispatcher: ThunkDispatch<GlobalState, API, any> | Dispatch<any> = store.dispatch

storeDispatcher(bootstrap())
ReactDOM.render(
  <Provider store={store}>
    <StockTracker />
  </Provider>,
  document.getElementById('root')
)
