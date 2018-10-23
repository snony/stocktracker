import fetchStatus from 'fetchStatus'
import { initState, QuoteState } from 'socket'

const getQuote = (quote: Partial<QuoteState>): QuoteState => ({
    ...initState,
    ...quote,
    fetchStatus: fetchStatus.SUCCESS
})

export const mockQuote = getQuote({ lastSalePrice: 25, lastSaleSize: 5, marketPercent: 0.05 })
export const mockFailedSocket = {...initState, fetchStatus: fetchStatus.FAILED}