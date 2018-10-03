import { Reducer } from 'redux'

import { STATS_RECEIVED_ACTION, StatsReceivedAction } from './keystatsActions'
import { KeyStats } from './types'

type KeyStatsState = KeyStats | {} 

const initialState: KeyStatsState = {}

const keystats: Reducer<KeyStatsState, StatsReceivedAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case STATS_RECEIVED_ACTION:
      return { ...action.keystats }
    default:
      return state
  }
}

export default keystats