const filters = {
  CLOSE: 'close',
  OPEN: 'open',
  HIGH: 'high',
  LOW: 'low',
  YTD: 'ytd',
  ONE_DAY: '1d',
  ONE_MONTH: '1m',
  SIX_MONTH: '6m',
  ONE_YEAR: '1y',
  FIVE_YEAR: '5y'
}

export const priceFilters = [filters.CLOSE, filters.OPEN, filters.HIGH, filters.LOW]
export const dateFilters = [
  filters.YTD,
  filters.ONE_DAY,
  filters.ONE_MONTH,
  filters.SIX_MONTH,
  filters.ONE_YEAR,
  filters.FIVE_YEAR
]

export const filterType = {
  BOTH: 'both',
  DATE: 'date',
  PRICE: 'price'
}
