import { MockStore } from 'redux-mock-store'

import { generateMockStore } from '__mock__/mockStore.mock'
import {
  getOverviewData,
  OVERVIEW_RECEIVED_ACTION,
  overviewReceivedAction
} from 'overview/overviewActions'

import { mockApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { mockOverviewData } from '__mock__/overview.mock'

describe('overview actions', () => {
  let store: MockStore<{}>
  const expectedAction = {
    type: OVERVIEW_RECEIVED_ACTION,
    overview: mockOverviewData
  }

  beforeEach(() => {
    store = generateMockStore(mockGlobalState , mockApi)
    store.clearActions()
  })
  
  it('should create action update overview data', () => {
    expect(overviewReceivedAction(mockOverviewData)).toEqual(expectedAction)
  })

  it('should call the mock API correctly', async () => {
    await store.dispatch(getOverviewData('AAPL') as any)
    expect(mockApi.getOverview).toHaveBeenCalledWith('AAPL')
  })

  it('should create OVERVIEW_RECEIVED_ACTION after successfully fetching overview', async () => {
    await store.dispatch(getOverviewData('AAPL') as any)
    expect(store.getActions()).toEqual([expectedAction])
  })
})
