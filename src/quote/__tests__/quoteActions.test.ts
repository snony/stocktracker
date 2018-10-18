import { mockApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import { setSubscribeSymbol, subscribeSymbol, SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION, unSubscribeSymbol } from 'quote/quoteActions'
import { MockStore } from 'redux-mock-store'

describe('Quote Action', () => {
    const symbol = 'aapl'
    describe('synchronous action', () => {
        it('subscribeSymbol should create a Symbol Subscription Action', () => {
            expect(
                subscribeSymbol(symbol)
            )
                .toEqual({ type: SYMBOL_SUBSCRIBE_ACTION, symbol })
        })

        it('unsubscribeSymbol should create a Symbol Unsubscription Action', () => {
            expect(
                unSubscribeSymbol()
            )
                .toEqual({ type: SYMBOL_UNSUBSCRIBE_ACTION })
        })
    })

    describe('asynchronous action', () => {

        it('setSubscribeSymbol should create an async Symbol Subscription Action', async () => {
            let store: MockStore<{}>
            store = generateMockStore(mockGlobalState, mockApi)
            store.clearActions()
            await store.dispatch<any>(setSubscribeSymbol(symbol))
            expect(store.getActions()).toEqual([subscribeSymbol(symbol)])
        })
    })

})