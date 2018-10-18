import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from 'types'

export type SymbolSubscriptionActions =
  | SubscribeSymbolAction
  | UnsubscribeSymbolAction
  | PreviousClosedReceivedAction

export const SYMBOL_SUBSCRIBE_ACTION = 'SYMBOL_SUBSCRIBE_ACTION'
interface SubscribeSymbolAction extends Action {
  type: typeof SYMBOL_SUBSCRIBE_ACTION
  symbol: string
}
export const subscribeSymbol: ActionCreator<SubscribeSymbolAction> = (symbol: string) => ({
  type: SYMBOL_SUBSCRIBE_ACTION,
  symbol
})

export const SYMBOL_UNSUBSCRIBE_ACTION = 'SYMBOL_UNSUBSCRIBE_ACTION'
interface UnsubscribeSymbolAction extends Action {
  type: typeof SYMBOL_UNSUBSCRIBE_ACTION
}
export const unSubscribeSymbol: ActionCreator<UnsubscribeSymbolAction> = () => ({
  type: SYMBOL_UNSUBSCRIBE_ACTION
})

export const PREVIOUS_CLOSE_RECEIVED_ACTION = 'PREVIOUS_CLOSE_RECEIVED_ACTION'
interface PreviousClosedReceivedAction extends Action {
  type: typeof PREVIOUS_CLOSE_RECEIVED_ACTION
  previousClose: number
}
export const previousClosedReceived: ActionCreator<PreviousClosedReceivedAction> = (
  previousClose: number
) => ({
  type: PREVIOUS_CLOSE_RECEIVED_ACTION,
  previousClose
})

type ThunkResult = ThunkAction<void, GlobalState, API, SymbolSubscriptionActions>
export const setSubscribeSymbol: (symbol: string) => ThunkResult = symbol => async (
  dispatch,
  _,
  api
) => {
  const previousClose = await api.getPreviousClose(symbol)
  dispatch(subscribeSymbol(symbol))
  return dispatch(previousClosedReceived(previousClose))
}
