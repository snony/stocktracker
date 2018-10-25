import { mockGlobalState } from '__mock__/globalstate.mock'
import { SYMBOL_SUBSCRIBE_ACTION, SYMBOL_UNSUBSCRIBE_ACTION } from 'quote'
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store'
import SocketClient from 'socket/socket'
import socketMiddleware from 'socket/socketsMiddleware'


describe('socket Middleware', () => {
    let url = 'https://ws-api.iextrading.com/1.0/tops'
    let client = new SocketClient(url)
    let store: MockStoreEnhanced;

    beforeAll(() => {
        client.onMessage = jest.fn()
        client.subscribe = jest.fn()
        client.unsubscribe = jest.fn()
        
        const mockStore = configureMockStore([socketMiddleware(client)])
        store = mockStore(mockGlobalState)
        store.clearActions()
    })

    afterEach(() => {
        store.clearActions()
    })

    it('should call client onMessage method on initial', () => {
        store.clearActions()
        expect(client.onMessage).toHaveBeenCalledTimes(1)
    })

    it('should pass through non symbol subscribe action and symbol unsubscribe action', () => {
        store.dispatch({ type: 'CUSTOM ACTION' })
        expect(client.subscribe).not.toHaveBeenCalled()
        expect(client.unsubscribe).not.toHaveBeenCalled()
    })

    it('should call the subscribe function', () => {
        const symbol = 'aapl'
        store.dispatch({ type: SYMBOL_SUBSCRIBE_ACTION, symbol })
        expect(client.subscribe).toHaveBeenCalledTimes(1)
    })

    it('should call the unsubscribe function', () => {
        store.dispatch({ type: SYMBOL_UNSUBSCRIBE_ACTION })
        expect(client.unsubscribe).toHaveBeenCalledTimes(1)
    })

    describe('client onError on Error', () => {
        url = 'https://ws-api.iextrading.com/1.0/fakeURL'
        client = new SocketClient(url)

        beforeEach(() => {
            client.onError = jest.fn()
            const mockStore = configureMockStore([socketMiddleware(client)])
            store = mockStore(mockGlobalState)
            store.clearActions()
        })

        it('should  call client onError on Error', () => {
            store.clearActions()
            expect(client.onError).toHaveBeenCalledTimes(1)
        })
    })
})