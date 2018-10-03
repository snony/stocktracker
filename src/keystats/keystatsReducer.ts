import { Reducer } from 'redux'
import { STATS_RECEIVED_ACTION, StatsReceivedAction } from './keystatsActions'
import { KeyStats } from './types';

interface KeyStatsState {
  keystats: KeyStats
}

const initialState: KeyStatsState = {
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
  }
}

const keystats: Reducer<KeyStatsState, StatsReceivedAction> = (
  state = initialState, 
  action
  ) => {
  switch (action.type) {
    case STATS_RECEIVED_ACTION:
      return {
        ...state,
        keystats: action.keystats
      }
    default:
      return state
  }
}

export default keystats