import { OVERVIEW_RECEIVED_ACTION, OverviewReceivedAction } from '../overviewActions'
import overviewReducer from '../overviewReducer'
import { mockAaplOverviewData, mockEmptyOverviewData, mockFbOverviewData } from './mockData'

describe('overview reducer', () => {
  it('should return the initial state', () => {
    expect(overviewReducer(undefined, {} as OverviewReceivedAction)).toEqual(mockEmptyOverviewData)
  })

  it('should handle OVERVIEW_RECEIVED_ACTION', () => {
    const aaplAction: OverviewReceivedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockAaplOverviewData
    }
    expect(overviewReducer(mockEmptyOverviewData, aaplAction)).toEqual(mockAaplOverviewData)

    const fbAction: OverviewReceivedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockFbOverviewData
    }
    expect(overviewReducer(mockAaplOverviewData, fbAction)).toEqual(mockFbOverviewData)
  })
})
