import { mockQuote } from '__mock__/quote.mock'
import { MESSAGE_RECEIVE_ACTION, receiveMessageAction } from 'socket/socketActions'


describe('Socket Actions', () => {

    it('receiveMessageAction should create a MESSAGE RECEIVE ACTION', () => {
        const expectedAction = { type: MESSAGE_RECEIVE_ACTION, quote: mockQuote }
        expect(receiveMessageAction(mockQuote)).toEqual(expectedAction)
    })
})
