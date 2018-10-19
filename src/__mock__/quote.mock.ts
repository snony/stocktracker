import { initState, QUOTE } from 'socket'
const getQuote = (quote: Partial<QUOTE>): QUOTE => ({
    ...initState,
    ...quote
})

export const mockQuote = getQuote({ lastSalePrice: 25, lastSaleSize: 5, marketPercent: 0.05 })