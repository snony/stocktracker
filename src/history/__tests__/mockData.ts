import { HistoryContainerProps } from 'history/historyContainer'
import { FilterButtonProps, HistoryChartProps } from 'history/types'

export const mockFilterButtonProps: FilterButtonProps = {
  type: 'price',
  value: 'open',
  selected: false,
  onClick: jest.fn()
}

export const mockSelectedFilterButtonProps: FilterButtonProps = {
  type: 'price',
  value: 'open',
  selected: true,
  onClick: jest.fn()
}

export const mockHistoryChartProps: HistoryChartProps = {
  history: [{ date: '12/09/2018', open: '13.5' }, { date: '13/09/2018', open: '14.5' }],
  priceFilter: 'open'
}

export const mockHistoryContainerProps: HistoryContainerProps = {
  ...mockHistoryChartProps,
  company: 'aapl',
  dateFilter: 'ytd',
  onClickFilterHistoryByDate: jest.fn(),
  onClickFilterHistoryByPrice: jest.fn()
}

export const mockEmptyHistoryContainerProps: HistoryContainerProps = {
  ...mockHistoryContainerProps,
  history: []
}
