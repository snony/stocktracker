import historyReducer from 'history/historyReducer'

import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  ChangeDateFilterAction,
  ChangePriceFilterAction,
  HISTORY_RECEIVED_ACTION,
  HistoryReceivedAction
} from 'history/historyActions'
import { mockChartData, mockEmptyHistoryData, mockHistoryData } from './mockData'

test('placeholder', () => {
  expect(true).toBeTruthy()
})

describe('history reducer', () => {
  it('should return the initial state', () => {
    expect(historyReducer(undefined, {} as HistoryReceivedAction)).toEqual(mockEmptyHistoryData)
  })

  it('should handle HISTORY_RECEIVED_ACTION', () => {
    const action: HistoryReceivedAction = {
      type: HISTORY_RECEIVED_ACTION,
      history: mockChartData
    }
    expect(historyReducer(mockEmptyHistoryData, action)).toEqual({
      history: mockChartData,
      dateFilter: 'ytd',
      priceFilter: 'close'
    })
  })

  it('should handle CHANGE_DATE_FILTER_ACTION', () => {
    const action: ChangeDateFilterAction = {
      type: CHANGE_DATE_FILTER_ACTION,
      dateFilter: '1m'
    }
    expect(historyReducer(mockHistoryData, action)).toEqual({
      history: mockChartData,
      dateFilter: '1m',
      priceFilter: 'close'
    })
  })

  it('should handle CHANGE_PRICE_FILTER_ACTION', () => {
    const action: ChangePriceFilterAction = {
      type: CHANGE_PRICE_FILTER_ACTION,
      priceFilter: 'high'
    }
    expect(historyReducer(mockHistoryData, action)).toEqual({
      history: mockChartData,
      dateFilter: 'ytd',
      priceFilter: 'high'
    })
  })
})
