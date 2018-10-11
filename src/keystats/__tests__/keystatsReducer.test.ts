import { STATS_RECEIVED_ACTION, StatsReceivedAction } from '../keystatsActions';
import { initialState, keystatsReducer } from '../keystatsReducer'
import { mockKeyStats } from './__mock__/mockData';

describe('test for keystats reducer', () => {
  it('should return the default keystat state', () => {
    const action = {} as StatsReceivedAction
    const returnState = keystatsReducer(undefined, action)
    expect(returnState).toEqual(initialState)
  })

  it('should return the new state after the action is passed in', () => {
    const action: StatsReceivedAction = {
      type: STATS_RECEIVED_ACTION,
      keystats: mockKeyStats
    }

    const currentState = initialState
    const returnState = keystatsReducer(currentState, action)
    const expectedState = {
      "avgTotalVolume": 10000,
      "dayHigh": 100,
      "dayLow": 10,
      "dividendYield": 10,
      "earningsPerShare": 10,
      "marketCap": 100000000,
      "open": 10,
      "peRatio": 10,
      "previousClose": 10,
      "volume": 10000,
      "week52High": 100,
      "week52Low": 10,
    }

    expect(returnState).toEqual(expectedState)
  })
})