import { mockApi, mockFailedApi } from '__mock__/api.mock'
import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import { mockOverviewData } from '__mock__/overview.mock'
import {
  getOverviewData,
  OVERVIEW_FETCH_FAILED,
  OVERVIEW_RECEIVED_ACTION,
  overviewFetchFailedAction,
  overviewReceivedAction
} from 'overview/overviewActions'
import { MockStore } from 'redux-mock-store'

describe('overview actions', () => {
  let store: MockStore<{}>
  const expectedAction = {
    type: OVERVIEW_RECEIVED_ACTION,
    overview: mockOverviewData
  }
  const expectedFailedAction = {
    type: OVERVIEW_FETCH_FAILED
  }

  describe('Fetch success', () => {
    beforeEach(() => {
      store = generateMockStore(mockGlobalState, mockApi)
      store.clearActions()
    })

    it('should create action update overview data', () => {
      expect(overviewReceivedAction(mockOverviewData)).toEqual(expectedAction)
    })

    it('should create OVERVIEW_RECEIVED_ACTION after successfully fetching overview', async () => {
      await store.dispatch(getOverviewData('AAPL') as any)
      expect(store.getActions()).toEqual([expectedAction])
    })
  })

  describe('Fetch failed', () => {
    beforeEach(() => {
      store = generateMockStore(mockFailedGlobalState, mockFailedApi)
      store.clearActions()
    })

    it('should create overview fetch failed action', () => {
      expect(overviewFetchFailedAction()).toEqual(expectedFailedAction)
    })

    it('should create OVERVIEW_FETCH_FAILED after failing to fetch overview', async () => {
      await store.dispatch(getOverviewData('AAPL') as any)
      expect(store.getActions()).toEqual([expectedFailedAction])
    })
  })
})
