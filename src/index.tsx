import 'ress'

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

import MainRoute from 'routes/MainRoute'
import { theme } from 'styles'
import { bootstrap } from './bootstrapActions'
import store from './store'


library.add(faSearch)

const storeDispatcher: ThunkDispatch<GlobalState, API, any> | Dispatch<any> = store.dispatch

storeDispatcher(bootstrap())

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    overflow: auto;
  }

  body, #root {
    height: 100vh;
    max-width: 100vw;
  }
  
  @font-face {
    font-family: 'Lato';
    src: url(https://fonts.googleapis.com/css?family=Lato:400,700);
  }

  @media screen and (max-width: 800px) {
    html {
      overflow-y: scroll;
    }
  }

  a {
    text-decoration: none;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MainRoute />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
