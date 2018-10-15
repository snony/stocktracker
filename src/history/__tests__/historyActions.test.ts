import { mockApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { mockHistoryState } from '__mock__/history.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
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
import { MockStore } from 'redux-mock-store'

describe('history actions', () => {
  let store: MockStore<{}>

  const expectedHistoryReceivedAction = {
    type: HISTORY_RECEIVED_ACTION,
    history: mockHistoryState
  }

  const expectedChangeDateFilterAction = {
    type: CHANGE_DATE_FILTER_ACTION,
    dateFilter: '1m'
  }

  const expectedChangePriceFilterActionCreator = (priceFilter: string) => ({
    type: CHANGE_PRICE_FILTER_ACTION,
    priceFilter
  })

  beforeEach(() => {
    store = generateMockStore(mockGlobalState, mockApi)
    store.clearActions()
  })

  it('should create action update history data', () => {
    expect(historyReceivedAction(mockHistoryState)).toEqual(expectedHistoryReceivedAction)
  })

  it('should call the mock API correctly', async () => {
    await store.dispatch(getHistoryData('AAPL') as any)
    expect(mockApi.getHistory).toHaveBeenCalledWith('AAPL', 'ytd', 'close')
  })

  it('should create HISTORY_RECEIVED_ACTION after successfully fetching history', async () => {
    const expectedAction = [expectedHistoryReceivedAction]

    await store.dispatch(getHistoryData('AAPL') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should create action filter history data by date', () => {
    expect(changeDateFilterAction('1m')).toEqual(expectedChangeDateFilterAction)
  })

  it('should create CHANGE_DATE_FILTER_ACTION after successfully changing date filter', async () => {
    const expectedAction = [expectedChangeDateFilterAction, expectedHistoryReceivedAction]
    await store.dispatch(getHistoryByDateFilter('AAPL', '1m') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should creat action filter history data by price', () => {
    const expectedAction = expectedChangePriceFilterActionCreator('high')

    expect(changePriceFilterAction('high')).toEqual(expectedAction)
  })

  it('should create CHANGE_PRICE_FILTER_ACTION after successfully changing price filter', async () => {
    const expectedAction = [
      expectedChangePriceFilterActionCreator('low'),
      expectedHistoryReceivedAction
    ]

    await store.dispatch(getHistoryByPriceFilter('AAPL', 'low') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })
})
