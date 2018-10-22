export interface QuoteProps {
  quote: QuoteProp
  unsubscribe: () => void
}

export interface QuoteProp {
  price: number
  change: number
  changePercent: number
}
