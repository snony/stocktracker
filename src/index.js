import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import StockTrackerContainer from './stockTrackerContainer'

import 'ress'
import './index.css'
import './colours.css'

library.add(faSearch)

ReactDOM.render(
  <Provider store={store}>
    <StockTrackerContainer />
  </Provider>,
  document.getElementById('root')
)
