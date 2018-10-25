import { Action, ActionCreator } from 'redux'
import { QUOTE } from 'socket/socket'

export const MESSAGE_RECEIVE_ACTION = 'MESSAGE_RECEIVE_ACTION'

export interface MessageReceiveAction extends Action {
  type: typeof MESSAGE_RECEIVE_ACTION
  quote: QUOTE
}

export const receiveMessageAction: ActionCreator<MessageReceiveAction> = quote => ({
  type: MESSAGE_RECEIVE_ACTION,
  quote
})

export const ERROR_RECEIVED_ACTION = 'ERROR_RECEIVED_ACTION'

export interface ErrorReceivedAction extends Action {
  type: typeof ERROR_RECEIVED_ACTION
}

export const receiveSocketError: ActionCreator<ErrorReceivedAction> = () => ({
  type: ERROR_RECEIVED_ACTION,
})

export type SocketActions = MessageReceiveAction | ErrorReceivedAction