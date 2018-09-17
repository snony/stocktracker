import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/index'
import './index.css'

import StockTracker from './stockTracker'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <StockTracker />
  </Provider>,
  document.getElementById('root')
)
