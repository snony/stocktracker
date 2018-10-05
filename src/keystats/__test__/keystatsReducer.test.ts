import { STATS_RECEIVED_ACTION, StatsReceivedAction } from '../keystatsActions'
import keystatsReducer, { initialState, KeyStatsState } from '../keystatsReducer'

describe('test for keystats reducer', () => {
  it('should return the initial state', () => {
    const currentState: undefined = undefined
    const action = {}
    const state = keystatsReducer(currentState, action as StatsReceivedAction)
    expect(state).toEqual(initialState)
  })

  it('should handle receiving keystats action', () => {
    const currentState: KeyStatsState = {
      earningsPerShare: 0,
      dividendYield: 0,
      previousClose: 0,
      open: 0,
      dayHigh: 0,
      dayLow: 0,
      volume: 0,
      avgTotalVolume: 0,
      peRatio: 0,
      marketCap: 0,
      week52High: 0,
      week52Low: 0
    }
    const keystats: KeyStatsState = {
      earningsPerShare: 1,
      dividendYield: 2,
      previousClose: 3,
      open: 4,
      dayHigh: 5,
      dayLow: 6,
      volume: 1,
      avgTotalVolume: 2,
      peRatio: 3,
      marketCap: 4,
      week52High: 5,
      week52Low: 6
    }
    const action: StatsReceivedAction = {
      type: STATS_RECEIVED_ACTION,
      keystats
    }
    const state = keystatsReducer(currentState, action)
    expect(state).toEqual(keystats)
  })
})

