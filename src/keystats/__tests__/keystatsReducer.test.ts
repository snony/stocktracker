import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import { mockKeyStats } from '__mock__/keystats.mock'
import { KEYSTATS_ACTION_TYPES, StatsError, StatsReceived } from 'keystats/keystatsActions'
import keystatsReducer, { initialState } from 'keystats/keystatsReducer'

describe('Keystats Reducer', () => {
  const previousState = initialState

  it('should return the default keystat state', () => {
    const action = {} as StatsReceived
    const returnState = keystatsReducer(undefined, action)

    expect(returnState).toEqual(previousState)
  })

  it('should handle STATS_RECEIVED_DATA action', () => {
    const action: StatsReceived = {
      type: KEYSTATS_ACTION_TYPES.STATS_RECEIVED,
      keystats: mockKeyStats
    }

    const returnState = keystatsReducer(previousState, action)
    const expectedState = mockGlobalState.keystats

    expect(returnState).toEqual(expectedState)
  })

  it('should handle STATS_RECEIVED_ERROR action', () => {
    const action: StatsError = {
      type: KEYSTATS_ACTION_TYPES.STATS_ERROR
    }

    const returnState = keystatsReducer(mockFailedGlobalState.keystats, action)
    const expectedState = mockFailedGlobalState.keystats

    expect(returnState).toEqual(expectedState)
  })
})
