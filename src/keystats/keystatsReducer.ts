import { Reducer } from 'redux'

import fetchStatus from 'fetchStatus'
import { KEYSTATS_ACTION_TYPES, KeyStatsActions } from './keystatsActions'
import { KeyStatsState } from './types'

export const initialState: KeyStatsState = {
  keystats: {
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
  },
  fetchStatus: fetchStatus.INITIAL
}

export const keystatsReducer: Reducer<KeyStatsState, KeyStatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case KEYSTATS_ACTION_TYPES.STATS_RECEIVED:
      return { 
        ...state,
        keystats: action.keystats,
        fetchStatus: fetchStatus.SUCCESS
      }
    case KEYSTATS_ACTION_TYPES.STATS_ERROR:
      return {
        ...state,
        fetchStatus: fetchStatus.FAILED
      }
    default:
      return state
  }
}

export default keystatsReducer
