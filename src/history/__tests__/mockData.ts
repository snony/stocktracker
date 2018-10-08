import { filters, filterType } from 'history/historyConst'
import { HistoryContainerProps } from 'history/historyContainer'
import { FilterButtonProps, HistoryChartProps, HistoryState } from 'history/types'
import { Company } from 'search/types'

export const mockFilterButtonProps: FilterButtonProps = {
  type: filterType.PRICE,
  value: filters.OPEN,
  selected: false,
  onClick: jest.fn()
}

export const mockSelectedFilterButtonProps: FilterButtonProps = {
  type: filterType.PRICE,
  value: filters.OPEN,
  selected: true,
  onClick: jest.fn()
}

export const historyData = [
  { date: '12/09/2018', open: '13.5' },
  { date: '13/09/2018', open: '14.5' }
]

export const mockHistoryChartProps: HistoryChartProps = {
  history: historyData,
  priceFilter: filters.OPEN
}

export const mockHistoryContainerProps: HistoryContainerProps = {
  history: historyData,
  company: 'AAPL',
  dateFilter: filters.YTD,
  priceFilter: filters.OPEN,
  onClickFilterHistoryByDate: jest.fn(),
  onClickFilterHistoryByPrice: jest.fn()
}

export const mockEmptyHistoryContainerProps: HistoryContainerProps = {
  ...mockHistoryContainerProps,
  history: []
}

export const mockGlobalState: { company: Company; history: HistoryState } = {
  company: {
    name: 'Apple Inc.',
    symbol: 'AAPL'
  },
  history: {
    history: historyData,
    dateFilter: filters.YTD,
    priceFilter: filters.CLOSE
  }
}

export const mockEmptyHistoryState: HistoryState = {
  history: [],
  dateFilter: 'ytd',
  priceFilter: 'close'
}

export const mockHistoryState: HistoryState = {
  history: historyData,
  dateFilter: 'ytd',
  priceFilter: 'close'
}
