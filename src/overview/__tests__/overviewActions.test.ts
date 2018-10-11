import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  getOverviewData,
  OVERVIEW_RECEIVED_ACTION,
  overviewReceivedAction
} from 'overview/overviewActions'
import { initialState } from 'overview/overviewReducer'
import { mockApi } from './__mock__/mockApi'
import { mockAaplOverviewData } from './__mock__/mockData'

describe('overview actions', () => {
  it('should create action update overview data', () => {
    const expectedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockAaplOverviewData
    }
    expect(overviewReceivedAction(mockAaplOverviewData)).toEqual(expectedAction)
  })

  it('should call the mock API correctly', async () => {
    const middlewares = [thunk.withExtraArgument(mockApi)]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore({ overview: initialState })

    await store.dispatch(getOverviewData('AAPL') as any)
    expect(mockApi.getOverview).toHaveBeenCalledWith('AAPL')
  })

  it('should create OVERVIEW_RECEIVED_ACTION after successfully fetching overview', async () => {
    const middlewares = [thunk.withExtraArgument(mockApi)]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore({ overview: initialState })

    const expectedAction = [{ type: OVERVIEW_RECEIVED_ACTION, overview: mockAaplOverviewData }]
    await store.dispatch(getOverviewData('AAPL') as any)
    expect(store.getActions()).toEqual(expectedAction)
  })
})
