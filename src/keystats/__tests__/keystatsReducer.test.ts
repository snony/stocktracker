import { mockGlobalState } from '__mock__/globalstate.mock'
import { STATS_RECEIVED_ACTION, StatsReceivedAction } from 'keystats/keystatsActions'
import keystatsReducer, { initialState } from 'keystats/keystatsReducer'

describe('tests for keystats reducer', () => {
  const currentState = initialState

  it('should return the default keystat state', () => {
    const action = {} as StatsReceivedAction
    const returnState = keystatsReducer(undefined, action)

    expect(returnState).toEqual(currentState)
  })

  it('should return the new state after the STATS_RECEIVED_ACTION is passed in', () => {
    const action: StatsReceivedAction = {
      type: STATS_RECEIVED_ACTION,
      keystats: mockGlobalState.keystats
    }

    const returnState = keystatsReducer(currentState, action)
    const expectedState = {
      avgTotalVolume: 10000,
      dayHigh: 100,
      dayLow: 10,
      dividendYield: 10,
      earningsPerShare: 10,
      marketCap: 100000000,
      open: 10,
      peRatio: 10,
      previousClose: 10,
      volume: 10000,
      week52High: 100,
      week52Low: 10
    }

    expect(returnState).toEqual(expectedState)
  })
})
