interface HistoryData {
  date: string
  [key: string]: string
}

export interface HistoryProps {
  readonly company: string
  readonly history: HistoryData[]
  readonly priceFilter: string
  readonly dateFilter: string
  onClickFilterHistoryByDate(symbol: string, value: string): void
  onClickFilterHistoryByPrice(symbol: string, value: string): void
}

export interface HistoryChartProps {
  readonly priceFilter: string
  readonly history: HistoryData[]
}
