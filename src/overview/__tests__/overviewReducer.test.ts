import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import {
  OVERVIEW_FETCH_FAILED,
  OVERVIEW_RECEIVED_ACTION,
  OverviewFetchFailed,
  OverviewReceivedAction
} from 'overview/overviewActions'
import overviewReducer, { initialState } from 'overview/overviewReducer'

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

  it('should handle OVERVIEW_FETCH_FAILED', () => {
    const action: OverviewFetchFailed = {
      type: OVERVIEW_FETCH_FAILED
    }

    expect(overviewReducer(initialState, action)).toEqual(mockFailedGlobalState.overview)
  })
})
