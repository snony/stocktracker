import { Dispatch, Middleware } from 'redux'
import { SocketClient } from './socket'

import { SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION } from 'quote'
import { receiveMessageAction, receiveSocketError, SocketActions } from './socketActions'

import { GlobalState } from 'types'

type SocketMiddleware = (client: SocketClient) => Middleware<Dispatch, GlobalState, Dispatch<SocketActions>>

const socketMiddleWare: SocketMiddleware = client => ({ dispatch }) => {
  client.onMessage(data => {
    dispatch(receiveMessageAction(data))
  })

  client.onError(() => {
    dispatch(receiveSocketError())
  })

  return (next) => (action) => {
    if (action.type === SYMBOL_SUBSCRIBE_ACTION) {
      client.subscribe(action.symbol)
    }

    if (action.type === SYMBOL_UNSUBSCRIBE_ACTION) {
      client.unsubscribe()
    }

    return next(action)
  }
}

export default socketMiddleWare
