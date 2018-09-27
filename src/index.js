import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import StockTracker from './stockTracker'
import { bootstrap } from './bootstrap'
import 'ress'
import './index.css'
import './colours.css'

library.add(faSearch)

store.dispatch(bootstrap())
console.log('Hellow')
ReactDOM.render(
  <Provider store={store}>
    <StockTracker />
  </Provider>,
  document.getElementById('root')
)
