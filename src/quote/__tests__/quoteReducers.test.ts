import { previousClosedReceived, subscribeSymbol, SymbolSubscriptionActions, unSubscribeSymbol } from '../quoteActions'
import subscribeSymbolReducers, { initState } from '../quoteReducers'

describe('Quote subscribe Symbol Reducers', () => {
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
            .toEqual({ symbol, previousClose: 0 })
    })

    it('should handle symbol unsubscribe action', () => {
        expect(
            subscribeSymbolReducers(initState, unSubscribeSymbol())
        ).toEqual({ symbol: '', previousClose: 0 })
    })

    it('should handle previous close receive action', () => {
        expect(
            subscribeSymbolReducers(initState, previousClosedReceived(20))
        ).toEqual({ symbol: '', previousClose: 20 })
    })
})