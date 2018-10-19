import { SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION } from 'quote'
import { AnyAction } from 'redux';
import { Store } from 'redux'
import { GlobalState } from 'types'
import { SocketClient } from './socket'
import { receiveMessageAction } from './socketActions'

const socketMiddleWare = (client: SocketClient) => (store: Store<GlobalState, AnyAction>) => {
  client.onMessage(data => {
    store.dispatch(receiveMessageAction(data))
  })

  return (next: (action: AnyAction) => void) => (action: AnyAction) => {
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
