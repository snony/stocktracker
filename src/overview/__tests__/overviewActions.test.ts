import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  getOverviewData,
  OVERVIEW_RECEIVED_ACTION,
  overviewReceivedAction
} from 'overview/overviewActions'
import { mockAaplOverviewData, mockEmptyOverviewData } from './mockData'

const mockGetOverview = () => Promise.resolve(mockAaplOverviewData)
const mockApi = {
  getOverview: mockGetOverview
}

describe('overview actions', () => {
  it('should create action update overview data', () => {
    const expectedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockAaplOverviewData
    }
    expect(overviewReceivedAction(mockAaplOverviewData)).toEqual(expectedAction)
  })

  it('should create OVERVIEW_RECEIVED_ACTION after successfully fetching overview', () => {
    const middlewares = [thunk.withExtraArgument(mockApi)]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore({ overview: mockEmptyOverviewData })

    const expectedAction = [{ type: OVERVIEW_RECEIVED_ACTION, overview: mockAaplOverviewData }]
    return store.dispatch(getOverviewData('aapl') as any).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
