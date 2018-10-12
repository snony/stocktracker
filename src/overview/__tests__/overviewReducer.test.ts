import { OVERVIEW_RECEIVED_ACTION, OverviewReceivedAction } from 'overview/overviewActions'
import overviewReducer, { initialState } from 'overview/overviewReducer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('overview reducer', () => {
  const currenState = initialState

  it('should return the default state', () => {
    expect(overviewReducer(undefined, {} as OverviewReceivedAction)).toEqual(currenState)
  })

  it('should handle OVERVIEW_RECEIVED_ACTION', () => {
    const aaplAction: OverviewReceivedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockGlobalState.overview
    }

    expect(overviewReducer(currenState, aaplAction)).toEqual(mockGlobalState.overview)
  })
})
