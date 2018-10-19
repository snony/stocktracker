import { Reducer } from 'redux'

import {
  PREVIOUS_CLOSE_RECEIVED_ACTION,
  SYMBOL_SUBSCRIBE_ACTION,
  SYMBOL_UNSUBSCRIBE_ACTION,
  SymbolSubscriptionActions
} from './quoteActions'

export interface SymbolSubscriptionState {
  symbol: string
  previousClose: number
}
export const initState: SymbolSubscriptionState = { symbol: '', previousClose: 0 }

const subscribeSymbolReducers: Reducer<SymbolSubscriptionState, SymbolSubscriptionActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case SYMBOL_SUBSCRIBE_ACTION:
      return { ...state, symbol: action.symbol }
    case SYMBOL_UNSUBSCRIBE_ACTION:
      return { ...state, symbol: '' }
    case PREVIOUS_CLOSE_RECEIVED_ACTION:
      return { ...state, previousClose: action.previousClose }
    default:
      return state
  }
}

export default subscribeSymbolReducers
