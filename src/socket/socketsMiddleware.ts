import { SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION } from 'quote'
import { AnyAction } from 'redux';
import { Store } from 'redux'
import { GlobalState } from 'types'
import { SocketClient } from './socket'
import { receiveMessageAction } from './socketActions'
// import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";

const socketMiddleWare = (client: SocketClient) => (store: Store<GlobalState, AnyAction>) => {
  client.onMessage(data => {
    store.dispatch(receiveMessageAction(data))
  })

  return (next: any) => (action: AnyAction) => {
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

// const socketMiddleWare = (client: SocketClient) => (store: Store<GlobalState, AnyAction>) => {
//   client.onMessage(data => {
//     store.dispatch(receiveMessageAction(data))
//   })

//   return (next: Dispatch<GlobalState>) => (action: AnyAction) => {
//     if (action.type === SYMBOL_SUBSCRIBE_ACTION) {
//       client.subscribe(action.symbol)
//     }

//     if (action.type === SYMBOL_UNSUBSCRIBE_ACTION) {
//       client.unsubscribe()
//     }

//     return next(action)
//   }
// }
