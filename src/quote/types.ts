import { QUOTE } from 'socket/'
export interface QuoteProps {
    quote: QUOTE
    unsubscribe: () => void
}