import { Dispatch, Middleware } from 'redux'

import { SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION } from 'quote'
import { SocketClient } from './socket'
import { MessageReceiveAction, receiveMessageAction } from './socketActions'

import { GlobalState } from 'types'

type SocketMiddleware = (client: SocketClient) => Middleware<Dispatch, GlobalState, Dispatch<MessageReceiveAction>>

const socketMiddleWare: SocketMiddleware = client => ({ dispatch }) => {
  client.onMessage(data => {
    dispatch(receiveMessageAction(data))
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
