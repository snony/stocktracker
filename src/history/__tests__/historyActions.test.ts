import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  changeDateFilterAction,
  changePriceFilterAction,
  getHistoryByDateFilter,
  getHistoryByPriceFilter,
  getHistoryData,
  HISTORY_RECEIVED_ACTION,
  historyReceivedAction
} from 'history/historyActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import mockApi from './__mock__/mockApi'
import { mockChartData, mockEmptyHistoryState, mockHistoryState } from './__mock__/mockData'

const setup = () => {
  const middlewares = [thunk.withExtraArgument(mockApi)]
  return configureMockStore(middlewares)
}

describe('history actions', () => {
  it('should create action update history data', () => {
    const expectedAction = {
      type: HISTORY_RECEIVED_ACTION,
      history: mockChartData
    }
    expect(historyReceivedAction(mockChartData)).toEqual(expectedAction)
  })

  it('should create OVERVIEW_RECEIVED_ACTION after successfully fetching history', () => {
    const mockStore = setup()
    const store = mockStore({ history: mockEmptyHistoryState })

    const expectedAction = [
      {
        type: HISTORY_RECEIVED_ACTION,
        history: mockHistoryState
      }
    ]
    return store.dispatch(getHistoryData('AAPL') as any).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  it('should create action filter history data by date', () => {
    const expectedAction = {
      type: CHANGE_DATE_FILTER_ACTION,
      dateFilter: '1m'
    }
    expect(changeDateFilterAction('1m')).toEqual(expectedAction)
  })

  it('should create CHANGE_DATE_FILTER_ACTION after successfully changing date filter', () => {
    const mockStore = setup()
    const store = mockStore({ history: mockHistoryState })

    const expectedAction = [
      {
        type: CHANGE_DATE_FILTER_ACTION,
        dateFilter: '1m'
      },
      {
        type: HISTORY_RECEIVED_ACTION,
        history: mockHistoryState
      }
    ]
    return store.dispatch(getHistoryByDateFilter('AAPL', '1m') as any).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  it('should creat action filter history data by price', () => {
    const expectedAction = {
      type: CHANGE_PRICE_FILTER_ACTION,
      priceFilter: 'high'
    }
    expect(changePriceFilterAction('high')).toEqual(expectedAction)
  })

  it('should create CHANGE_PRICE_FILTER_ACTION after successfully changing price filter', () => {
    const mockStore = setup()
    const store = mockStore({ history: mockHistoryState })

    const expectedAction = [
      {
        type: CHANGE_PRICE_FILTER_ACTION,
        priceFilter: 'low'
      },
      {
        type: HISTORY_RECEIVED_ACTION,
        history: mockHistoryState
      }
    ]
    return store.dispatch(getHistoryByPriceFilter('AAPL', 'low') as any).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
