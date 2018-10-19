import { Reducer } from 'redux'
import { QUOTE } from 'socket/socket'

import { MESSAGE_RECEIVE_ACTION, SocketActions } from './socketActions'

const initState: QUOTE = { marketPercent: 0, lastSalePrice: 0, lastSaleSize: 0 }
const handleSocketMessageReducer: Reducer<QUOTE, SocketActions> = (state = initState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVE_ACTION:
      return { ...state, ...action.quote }
    default:
      return state
  }
}

export default handleSocketMessageReducer
