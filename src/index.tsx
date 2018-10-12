import 'ress'
import './colours.css'
import './index.css'

import theme from 'colours'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'react-emotion'
import { Provider } from 'react-redux'
import { Dispatch } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { API, GlobalState } from 'types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { bootstrap } from './bootstrap'
import StockTracker from './stockTracker'
import store from './store'

library.add(faSearch)

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    overflow: auto;
  }
  
  @font-face {
    font-family: 'Lato';
    src: url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
  }

  @media screen and (max-width: 800px) {
    html {
      overflow-y: scroll;
    }
  }
`

const storeDispatcher: ThunkDispatch<GlobalState, API, any> | Dispatch<any> = store.dispatch

storeDispatcher(bootstrap())

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StockTracker />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
