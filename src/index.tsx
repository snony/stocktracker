import 'styles'

import theme from 'colours'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Dispatch } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { API, GlobalState } from 'types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import MainRoute from 'routes/MainRoute'
import { bootstrap } from './bootstrapActions'
import store from './store'

library.add(faSearch)

const storeDispatcher: ThunkDispatch<GlobalState, API, any> | Dispatch<any> = store.dispatch

storeDispatcher(bootstrap())

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MainRoute />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
