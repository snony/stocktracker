import { OVERVIEW_RECEIVED_ACTION, OverviewReceivedAction } from 'overview/overviewActions'
import overviewReducer, { initialState } from 'overview/overviewReducer'
import { mockAaplOverviewData } from './__mock__/mockData'

describe('overview reducer', () => {
  it('should return the initial state', () => {
    expect(overviewReducer(undefined, {} as OverviewReceivedAction)).toEqual(initialState)
  })

  it('should handle OVERVIEW_RECEIVED_ACTION', () => {
    const aaplAction: OverviewReceivedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockAaplOverviewData
    }
    expect(overviewReducer(initialState, aaplAction)).toEqual(mockAaplOverviewData)
  })
})
