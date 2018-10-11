export interface HistoryData {
  readonly [key: string]: string | number
  readonly date: string
  readonly price: number
}

export interface HistoryState {
  history: HistoryData[]
  dateFilter: string
  priceFilter: string
}

export interface HistoryChartProps {
  readonly history: HistoryData[]
}

export interface FilterButtonProps {
  readonly type: string
  readonly value: string
  readonly selected: boolean
  readonly onClick: (symbol: string, value: string) => void
}
