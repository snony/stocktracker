import { mockQuote } from '__mock__/quote.mock';
import { MESSAGE_RECEIVE_ACTION, SocketActions } from 'socket/socketActions';
import handleSocketMessageReducer, { initState } from 'socket/socketReducers'

describe('Socket Reducer', () => {

    it('should return initial state', () => {
        expect(handleSocketMessageReducer(initState, {} as SocketActions)).toEqual(initState)
    })
    it('should handle MESSAGE RECEIVE ACTION', () => {
        const action: SocketActions = { type: MESSAGE_RECEIVE_ACTION, quote: mockQuote }
        expect(handleSocketMessageReducer(initState, action)).toEqual(mockQuote)
    })
})

