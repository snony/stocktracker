import { SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION } from 'quote'
import { SocketClient } from './socket'
import { receiveMessageAction } from './socketActions'


const socketMiddleWare = (client: SocketClient) => (store: any) => {

    client.onMessage(data => {
        store.dispatch(receiveMessageAction(data))
    });

    return (next: any) => (action: any) => {
        if (action.type === SYMBOL_SUBSCRIBE_ACTION) {
            client.subscribe(action.symbol)
        }

        if (action.type === SYMBOL_UNSUBSCRIBE_ACTION) {
            client.unsubscribe()
        }

        return next(action);
    }
}

export default socketMiddleWare