import { OVERVIEW_RECEIVED_ACTION, OverviewReceivedAction } from 'overview/overviewActions'
import overviewReducer, { initialState } from 'overview/overviewReducer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('overview reducer', () => {
  it('should return the previous state', () => {
    expect(overviewReducer(undefined, {} as OverviewReceivedAction)).toEqual(initialState)
  })

  it('should handle OVERVIEW_RECEIVED_ACTION', () => {
    const action: OverviewReceivedAction = {
      type: OVERVIEW_RECEIVED_ACTION,
      overview: mockGlobalState.overview
    }

    expect(overviewReducer(initialState, action)).toEqual(mockGlobalState.overview)
  })
})
