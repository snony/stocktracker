import { Reducer } from 'redux'

import {
  SYMBOL_SUBSCRIBE_ACTION,
  SYMBOL_UNSUBSCRIBE_ACTION,
  SymbolSubscriptionActions
} from './quoteActions'

export interface SymbolSubscriptionState {
  symbol: string
}
export const initState: SymbolSubscriptionState = { symbol: '' }

const subscribeSymbolReducers: Reducer<SymbolSubscriptionState, SymbolSubscriptionActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case SYMBOL_SUBSCRIBE_ACTION:
      return { ...state, symbol: action.symbol }
    case SYMBOL_UNSUBSCRIBE_ACTION:
      return { ...state, symbol: '' }
    default:
      return state
  }
}

export default subscribeSymbolReducers
