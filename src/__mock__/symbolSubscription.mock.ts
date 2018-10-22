import { initState, SymbolSubscriptionState } from 'quote'
const getSymbolState = (subscription: Partial<SymbolSubscriptionState>): SymbolSubscriptionState => ({
    ...initState,
    ...subscription
})

export const mockSymbolSubscription = getSymbolState({ symbol: 'apple', previousClose: 0 })