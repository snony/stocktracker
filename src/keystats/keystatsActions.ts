import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from '../types'
import { KeyStats } from './types'

export const STATS_RECEIVED_ACTION = 'STATS_RECEIVED_ACTION'

const statsReceivedAction = (keystats: KeyStats) => ({ 
  type: STATS_RECEIVED_ACTION as typeof STATS_RECEIVED_ACTION, 
  keystats 
})

export type StatsReceivedAction = ReturnType<typeof statsReceivedAction>
export type ThunkResult<R> = ThunkAction<R, GlobalState, API, StatsReceivedAction> 

export const getKeyStatsData:(symbol: string) => ThunkResult<void> = symbol => 
  (dispatch, _, api) => {
    api.getKeyStats(symbol).then(keystats => dispatch(statsReceivedAction(keystats)))
}
