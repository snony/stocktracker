import { subscribeSymbol, SymbolSubscriptionActions, unSubscribeSymbol } from 'quote/quoteActions'
import subscribeSymbolReducers, { initState } from 'quote/quoteReducers'

describe('Quote Reducer', () => {
    it('should return initial state', () => {
        expect(
            subscribeSymbolReducers(undefined, {} as SymbolSubscriptionActions)
        )
            .toEqual(initState)
    })

    it('should handle symbol subscribe action', () => {
        const symbol = 'aapl'
        expect(
            subscribeSymbolReducers(initState, subscribeSymbol(symbol))
        )
            .toEqual({ symbol })
    })

    it('should handle symbol unsubscribe action', () => {
        expect(
            subscribeSymbolReducers(initState, unSubscribeSymbol())
        ).toEqual({ symbol: '' })
    })
})