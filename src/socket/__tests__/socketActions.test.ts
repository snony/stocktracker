import { mockQuote } from '__mock__/quote.mock'
import { ERROR_RECEIVED_ACTION, MESSAGE_RECEIVE_ACTION, receiveMessageAction, receiveSocketError } from 'socket/socketActions'

describe('Socket Actions', () => {

    it('receiveMessageAction should create a MESSAGE RECEIVE ACTION', () => {
        const expectedAction = { type: MESSAGE_RECEIVE_ACTION, quote: mockQuote }
        expect(receiveMessageAction(mockQuote)).toEqual(expectedAction)
    })

    it('receiveSocketError should create a ERROR_RECEIVED_ACTION', () => {
        const expectedAction = { type: ERROR_RECEIVED_ACTION }
        expect(receiveSocketError()).toEqual(expectedAction)
    })
})
