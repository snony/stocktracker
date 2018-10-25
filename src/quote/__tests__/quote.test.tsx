import React from 'react'
import renderer from 'react-test-renderer'

import fetchStatus from 'fetchStatus'
import Quote from '../quote'
import { QuoteProps } from '../types'

const getQuote = (partialQuote: Partial<QuoteProps>) => ({
    quote: { price: 0, change: 0, changePercent: 0 },
    unsubscribe: jest.fn(),
    ...partialQuote
})

describe('Quote Component', () => {

    it('renders correctly on initial state', () => {
        const quoteProps= {
            ...getQuote({}),
            fetchStatus: fetchStatus.INITIAL
        }
        
        const tree = renderer.create(<Quote {...quoteProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders correctly on positive change price', () => {
        const quoteProps= {
            ...getQuote({ quote: { price: 20, change: 1, changePercent: 0.5 } }),
            fetchStatus: fetchStatus.SUCCESS
        }

        const tree = renderer.create(<Quote {...quoteProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders correctly on negative change price', () => {
        const quoteProps= {
            ...getQuote({ quote: { price: 20, change: -1, changePercent: 0.5 } }),
            fetchStatus: fetchStatus.SUCCESS
        }

        const tree = renderer.create(<Quote {...quoteProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should call unsubscribe function on unmount', () => {
        const unsubscribe = jest.fn()
        const quoteProps= {
            ...getQuote({ unsubscribe }),
            fetchStatus: fetchStatus.SUCCESS
        }

        const tree = renderer.create(<Quote {...quoteProps} />)
        tree.unmount()
        expect(unsubscribe).toHaveBeenCalledTimes(1)

    })
})