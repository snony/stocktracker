import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import fetchStatus from 'fetchStatus'
import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  ChangeDateFilterAction,
  ChangePriceFilterAction,
  HISTORY_FETCH_FAILED,
  HISTORY_RECEIVED_ACTION,
  HistoryFetchFailed,
  HistoryReceivedAction
} from 'history/historyActions'
import historyReducer, { initialState } from 'history/historyReducer'

describe('history reducer', () => {
  const mockChartData = mockGlobalState.history.history
  const mockHistoryState = mockGlobalState.history
  const mockFailedHistoryState = mockFailedGlobalState.history

  it('should return the default state', () => {
    expect(historyReducer(undefined, {} as HistoryReceivedAction)).toEqual(initialState)
  })

  it('should handle HISTORY_RECEIVED_ACTION', () => {
    const action: HistoryReceivedAction = {
      type: HISTORY_RECEIVED_ACTION,
      history: mockChartData
    }

    expect(historyReducer(initialState, action)).toEqual(mockHistoryState)
  })

  it('should handle HISTORY_FETCH_FAILED', () => {
    const action: HistoryFetchFailed = {
      type: HISTORY_FETCH_FAILED
    }

    expect(historyReducer(initialState, action)).toEqual(mockFailedHistoryState)
  })

  it('should handle CHANGE_DATE_FILTER_ACTION', () => {
    const action: ChangeDateFilterAction = {
      type: CHANGE_DATE_FILTER_ACTION,
      dateFilter: '1m'
    }

    expect(historyReducer(mockHistoryState, action)).toEqual({
      fetchStatus: fetchStatus.SUCCESS,
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

    expect(historyReducer(mockHistoryState, action)).toEqual({
      fetchStatus: fetchStatus.SUCCESS,
      history: mockChartData,
      dateFilter: 'ytd',
      priceFilter: 'high'
    })
  })
})
