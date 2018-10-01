interface HistoryData {
  readonly date: string
  readonly [key: string]: string
}

type ClickFilterHistory = (symbol: string, value: string) => void

export interface HistoryProps {
  readonly company: string
  readonly history: HistoryData[]
  readonly priceFilter: string
  readonly dateFilter: string
  readonly onClickFilterHistoryByDate: ClickFilterHistory
  readonly onClickFilterHistoryByPrice: ClickFilterHistory
}

export interface HistoryChartProps {
  readonly priceFilter: string
  readonly history: HistoryData[]
}

export interface FilterButtonProps {
  readonly type: string
  readonly value: string
  readonly selected: boolean
  readonly onClick: ClickFilterHistory
}
