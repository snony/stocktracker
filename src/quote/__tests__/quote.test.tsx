import Quote from 'quote/quote'
import { QuoteProps } from 'quote/types';
import React from 'react'
import renderer from 'react-test-renderer'

const getQuote = (partialQuote: Partial<QuoteProps>) => ({
    quote: { lastSalePrice: 0, lastSaleSize: 0, marketPercent: 0 },
    unsubscribe: jest.fn(),
    ...partialQuote
})

describe('Quote Component', () => {

    it('renders correctly on initial state', () => {
        const quoteData = getQuote({})
        const tree = renderer.create(<Quote {...quoteData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders correctly with updated values', () => {
        const quoteData = getQuote({ quote: { lastSalePrice: 20, lastSaleSize: 1, marketPercent: 0.5 } })
        const tree = renderer.create(<Quote {...quoteData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should call unsubscribe function on unmount', () => {
        const unsubscribe = jest.fn()
        const quoteData = getQuote({ unsubscribe })
        const tree = renderer.create(<Quote {...quoteData} />)
        tree.unmount()
        expect(unsubscribe).toHaveBeenCalledTimes(1)

    })
})