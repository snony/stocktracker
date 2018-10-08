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

export const mockChartData = [
  { date: '12/09/2018', open: '13.5' },
  { date: '13/09/2018', open: '14.5' }
]

export const mockHistoryChartProps: HistoryChartProps = {
  history: mockChartData,
  priceFilter: filters.OPEN
}

export const mockHistoryContainerProps: HistoryContainerProps = {
  history: mockChartData,
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
    history: mockChartData,
    dateFilter: filters.YTD,
    priceFilter: filters.CLOSE
  }
}

export const mockEmptyHistoryData: HistoryState = {
  history: [],
  dateFilter: 'ytd',
  priceFilter: 'close'
}

export const mockHistoryData: HistoryState = {
  history: mockChartData,
  dateFilter: 'ytd',
  priceFilter: 'close'
}
