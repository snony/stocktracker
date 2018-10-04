import 'ress'
import './colours.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { bootstrap } from './bootstrap'
import StockTracker from './stockTracker'
import store from './store'

library.add(faSearch)

store.dispatch(bootstrap() as any)
ReactDOM.render(
  <Provider store={store}>
    <StockTracker />
  </Provider>,
  document.getElementById('root')
)
