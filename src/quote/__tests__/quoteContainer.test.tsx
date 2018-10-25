import { mockGlobalState } from '__mock__/globalstate.mock'
import { mockQuote } from '__mock__/quote.mock'

import fetchStatus from 'fetchStatus'
import { mapDispatchToProps, mapStateToProps, processQuote } from 'quote/quoteContainer'

describe('Quote Container', () => {

    it('mapStateToProps should return quote', () => {
        expect(mapStateToProps(mockGlobalState)).toEqual({ quote: processQuote(mockQuote, 0), fetchStatus: fetchStatus.SUCCESS })
    })

    it('mapDispatchToProps should call dispatch upon unsubscribe', () => {
        const dispatch = jest.fn()
        mapDispatchToProps(dispatch).unsubscribe()
        expect(dispatch).toHaveBeenCalledTimes(1)
    })
})