export interface HistoryData {
  readonly date: string
  readonly [key: string]: string
}

export interface HistoryChartProps {
  readonly priceFilter: string
  readonly history: HistoryData[]
}

export interface FilterButtonProps {
  readonly type: string
  readonly value: string
  readonly selected: boolean
  readonly onClick: (symbol: string, value: string) => void
}
