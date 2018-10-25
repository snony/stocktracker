import { Reducer } from 'redux'
import { QUOTE } from 'socket/socket'

import fetchStatus from 'fetchStatus'
import { ERROR_RECEIVED_ACTION, MESSAGE_RECEIVE_ACTION, SocketActions } from './socketActions'

export interface QuoteState extends QUOTE {
  fetchStatus: string
}

export const initState: QuoteState = { marketPercent: 0, lastSalePrice: 0, lastSaleSize: 0, fetchStatus: fetchStatus.INITIAL }
const handleSocketMessageReducer: Reducer<QuoteState, SocketActions> = (state = initState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVE_ACTION:
      return { ...state, ...action.quote, fetchStatus: fetchStatus.SUCCESS }
    case ERROR_RECEIVED_ACTION:
      return { ...state, fetchStatus: fetchStatus.FAILED }
    default:
      return state
  }
}

export default handleSocketMessageReducer