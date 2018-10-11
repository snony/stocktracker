import { filters, filterType } from 'history/historyConst'
import { HistoryContainerProps } from 'history/historyContainer'
import { initialState } from 'history/historyReducer'
import { FilterButtonProps, HistoryChartProps, HistoryState } from 'history/types'
import { GlobalState } from 'types'

export const mockFilterButtonProps: FilterButtonProps = {
  type: filterType.PRICE,
  value: filters.OPEN,
  selected: false,
  onClick: jest.fn()
}

export const mockChartData = [
  { date: '12/09/2018', price: '13.5' },
  { date: '13/09/2018', price: '14.5' }
]

export const mockGlobalState: GlobalState = {
  company: {
    name: 'Apple Inc.',
    symbol: 'AAPL'
  },
  history: {
    history: mockChartData,
    dateFilter: filters.YTD,
    priceFilter: filters.CLOSE
  }
} as GlobalState

export const mockHistory = (overrides: Partial<HistoryState>): HistoryState => ({
  ...initialState,
  ...overrides
})

export const mockHistoryState = mockHistory({
  history: mockChartData,
  dateFilter: filters.YTD,
  priceFilter: filters.CLOSE
})

export const mockHistoryChartProps: HistoryChartProps = {
  history: mockChartData
}

export const mockHistoryContainerProps: HistoryContainerProps = {
  company: 'AAPL',
  ...mockHistory({
    history: mockChartData,
    dateFilter: filters.YTD,
    priceFilter: filters.OPEN
  }),
  onClickFilterHistoryByDate: jest.fn(),
  onClickFilterHistoryByPrice: jest.fn()
}

export const mockEmptyHistoryContainerProps: HistoryContainerProps = {
  ...mockHistoryContainerProps,
  history: []
}
