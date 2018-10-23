export interface QuoteProps {
  quote: QuoteProp
  fetchStatus: string
  unsubscribe: () => void
}

export interface QuoteProp {
  price: number
  change: number
  changePercent: number
}
