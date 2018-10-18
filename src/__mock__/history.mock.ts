import fetchStatus from 'fetchStatus'
import { filters } from 'history/historyConst'
import { initialState } from 'history/historyReducer'
import { HistoryState } from 'history/types'

export const mockChartData = [
  { date: '12/09/2018', price: 13.5 },
  { date: '13/09/2018', price: 14.5 },
  { date: '14/09/2018', price: 12.5 }
]

export const mockHistory = (overrides: Partial<HistoryState>): HistoryState => ({
  ...initialState,
  ...overrides
})

export const mockHistoryState = mockHistory({
  fetchStatus: fetchStatus.SUCCESS,
  history: mockChartData,
  dateFilter: filters.YTD,
  priceFilter: filters.CLOSE
})

export const mockFailedHistoryState = mockHistory({
  fetchStatus: fetchStatus.FAILED
})
