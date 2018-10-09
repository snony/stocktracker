import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { API, GlobalState } from '../types'
import { KeyStats } from './types'

export const STATS_RECEIVED_ACTION = 'STATS_RECEIVED_ACTION'

export interface StatsReceivedAction extends Action {
  type: typeof STATS_RECEIVED_ACTION
  keystats: KeyStats
}

export const statsReceivedAction: ActionCreator<StatsReceivedAction> = (keystats: KeyStats) => ({
  type: STATS_RECEIVED_ACTION as typeof STATS_RECEIVED_ACTION,
  keystats
})

// export type StatsReceivedAction = ReturnType<typeof statsReceivedAction>
export type ThunkResult<R> = ThunkAction<R, GlobalState, API, StatsReceivedAction>

export const getKeyStatsData: (symbol: string) => ThunkResult<void> = symbol => (
  dispatch,
  _,
  api
) => {
  return api.getKeyStats(symbol).then(keystats => dispatch(statsReceivedAction(keystats)))
}
