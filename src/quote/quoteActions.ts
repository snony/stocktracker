import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from 'types'

export type SymbolSubscriptionActions = SubscribeSymbolAction | UnsubscribeSymbolAction
interface SubscribeSymbolAction extends Action {
    type: typeof SYMBOL_SUBSCRIBE_ACTION
    symbol: string
}

interface UnsubscribeSymbolAction extends Action {
    type: typeof SYMBOL_UNSUBSCRIBE_ACTION
}
export const SYMBOL_SUBSCRIBE_ACTION = 'SYMBOL_SUBSCRIBE_ACTION'
export const subscribeSymbol: ActionCreator<SubscribeSymbolAction> = (symbol: string) => ({
    type: SYMBOL_SUBSCRIBE_ACTION,
    symbol
})

export const SYMBOL_UNSUBSCRIBE_ACTION = 'SYMBOL_UNSUBSCRIBE_ACTION'
export const unSubscribeSymbol: ActionCreator<UnsubscribeSymbolAction> = () => ({
    type: SYMBOL_UNSUBSCRIBE_ACTION
})

type ThunkResult = ThunkAction<void, GlobalState, API, SymbolSubscriptionActions>
export const setSubscribeSymbol: (symbol: string) => ThunkResult = symbol => async (dispatch, _, ) => {
    return dispatch(subscribeSymbol(symbol))
}