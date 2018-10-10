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
import { initialState } from 'history/historyReducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import mockApi from './__mock__/mockApi'
import { mockChartData, mockHistoryState } from './__mock__/mockData'

describe('history actions', () => {
  const setup = (data: object) => {
    const middlewares = [thunk.withExtraArgument(mockApi)]
    const mockStore = configureMockStore(middlewares)
    return mockStore(data)
  }

  it('should create action update history data', () => {
    const expectedAction = {
      type: HISTORY_RECEIVED_ACTION,
      history: mockChartData
    }
    expect(historyReceivedAction(mockChartData)).toEqual(expectedAction)
  })

  it('should call the mock API correctly', async () => {
    const store = setup({ history: initialState })

    await store.dispatch(getHistoryData('AAPL') as any)
    expect(mockApi.getHistory).toHaveBeenCalledWith('AAPL', 'ytd', 'close')
  })

  it('should create HISTORY_RECEIVED_ACTION after successfully fetching history', async () => {
    const store = setup({ history: initialState })

    const expectedAction = [
      {
        type: HISTORY_RECEIVED_ACTION,
        history: mockHistoryState
      }
    ]
    await store.dispatch(getHistoryData('AAPL') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should create action filter history data by date', () => {
    const expectedAction = {
      type: CHANGE_DATE_FILTER_ACTION,
      dateFilter: '1m'
    }
    expect(changeDateFilterAction('1m')).toEqual(expectedAction)
  })

  it('should create CHANGE_DATE_FILTER_ACTION after successfully changing date filter', async () => {
    const store = setup({ history: mockHistoryState })

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
    await store.dispatch(getHistoryByDateFilter('AAPL', '1m') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should creat action filter history data by price', () => {
    const expectedAction = {
      type: CHANGE_PRICE_FILTER_ACTION,
      priceFilter: 'high'
    }
    expect(changePriceFilterAction('high')).toEqual(expectedAction)
  })

  it('should create CHANGE_PRICE_FILTER_ACTION after successfully changing price filter', async () => {
    const store = setup({ history: mockHistoryState })

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
    await store.dispatch(getHistoryByPriceFilter('AAPL', 'low') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })
})
