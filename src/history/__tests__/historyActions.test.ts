import { mockApi, mockFailedApi } from '__mock__/api.mock'
import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
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
  HISTORY_FETCH_FAILED,
  HISTORY_RECEIVED_ACTION,
  historyFetchFailedAction,
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

  const expectedFailedAction = {
    type: HISTORY_FETCH_FAILED
  }

  describe('fetch success', () => {
    describe('synchronous actions', () => {
      it('should create action update history data', () => {
        expect(historyReceivedAction(mockHistoryState)).toEqual(expectedHistoryReceivedAction)
      })

      it('should create action filter history data by date', () => {
        expect(changeDateFilterAction('1m')).toEqual(expectedChangeDateFilterAction)
      })

      it('should create action filter history data by price', () => {
        const expectedAction = expectedChangePriceFilterActionCreator('high')

        expect(changePriceFilterAction('high')).toEqual(expectedAction)
      })
    })

    describe('asynchronous actions', () => {
      beforeEach(() => {
        store = generateMockStore(mockGlobalState, mockApi)
        store.clearActions()
      })

      it('should create HISTORY_RECEIVED_ACTION after successfully fetching history', async () => {
        const expectedAction = [expectedHistoryReceivedAction]

        await store.dispatch(getHistoryData('AAPL') as any)
        expect(store.getActions()).toEqual(expectedAction)
      })

      it('should create CHANGE_DATE_FILTER_ACTION after successfully changing date filter', async () => {
        const expectedAction = [expectedChangeDateFilterAction, expectedHistoryReceivedAction]
        await store.dispatch(getHistoryByDateFilter('AAPL', '1m') as any)
        expect(store.getActions()).toEqual(expectedAction)
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
  })

  describe('fetch failed', () => {
    it('should create overview fetch failed action', () => {
      expect(historyFetchFailedAction()).toEqual(expectedFailedAction)
    })

    it('should create OVERVIEW_FETCH_FAILED after failing to fetch overview', async () => {
      store = generateMockStore(mockFailedGlobalState, mockFailedApi)

      await store.dispatch(getHistoryData('AAPL') as any)
      expect(store.getActions()).toEqual([expectedFailedAction])
    })
  })
})
