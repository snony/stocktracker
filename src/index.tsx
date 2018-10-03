import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import 'ress'
import { bootstrap } from './bootstrap'
import './colours.css'
import './index.css'
import StockTracker from './stockTracker'

library.add(faSearch)

store.dispatch(bootstrap())
ReactDOM.render(
  <Provider store={store}>
    <StockTracker />
  </Provider>,
  document.getElementById('root')
)
