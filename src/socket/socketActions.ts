import { Action, ActionCreator } from 'redux'
import { QUOTE } from 'socket/socket'

export type SocketActions = MessageReceiveAction

interface MessageReceiveAction extends Action {
  type: typeof MESSAGE_RECEIVE_ACTION
  quote: QUOTE
}

export const MESSAGE_RECEIVE_ACTION = 'MESSAGE_RECEIVE_ACTION'
export const receiveMessageAction: ActionCreator<MessageReceiveAction> = quote => ({
  type: MESSAGE_RECEIVE_ACTION,
  quote
})
