import historyReducer from 'history/historyReducer'

import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  ChangeDateFilterAction,
  ChangePriceFilterAction,
  HISTORY_RECEIVED_ACTION,
  HistoryReceivedAction
} from 'history/historyActions'
import { historyData, mockEmptyHistoryState, mockHistoryState } from './mockData'

test('placeholder', () => {
  expect(true).toBeTruthy()
})

describe('history reducer', () => {
  it('should return the initial state', () => {
    expect(historyReducer(undefined, {} as HistoryReceivedAction)).toEqual(mockEmptyHistoryState)
  })

  it('should handle HISTORY_RECEIVED_ACTION', () => {
    const action: HistoryReceivedAction = {
      type: HISTORY_RECEIVED_ACTION,
      history: historyData
    }
    expect(historyReducer(mockEmptyHistoryState, action)).toEqual({
      history: historyData,
      dateFilter: 'ytd',
      priceFilter: 'close'
    })
  })

  it('should handle CHANGE_DATE_FILTER_ACTION', () => {
    const action: ChangeDateFilterAction = {
      type: CHANGE_DATE_FILTER_ACTION,
      dateFilter: '1m'
    }
    expect(historyReducer(mockHistoryState, action)).toEqual({
      history: historyData,
      dateFilter: '1m',
      priceFilter: 'close'
    })
  })

  it('should handle CHANGE_PRICE_FILTER_ACTION', () => {
    const action: ChangePriceFilterAction = {
      type: CHANGE_PRICE_FILTER_ACTION,
      priceFilter: 'high'
    }
    expect(historyReducer(mockHistoryState, action)).toEqual({
      history: historyData,
      dateFilter: 'ytd',
      priceFilter: 'high'
    })
  })
})
