import { Action, ActionCreator, ActionCreatorsMapObject } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from 'types'

import { KeyStats } from './types'

export enum KEYSTATS_ACTION_TYPES {
  STATS_RECEIVED = 'STATS_RECEIVED_ACTION',
  STATS_ERROR = 'STATS_ERROR'
}

export interface StatsReceived extends Action {
  type: typeof KEYSTATS_ACTION_TYPES.STATS_RECEIVED
  keystats: KeyStats
}

const statsReceived: ActionCreator<StatsReceived> = (keystats: KeyStats) => ({
  type: KEYSTATS_ACTION_TYPES.STATS_RECEIVED,
  keystats
})

export interface StatsError extends Action {
  type: typeof KEYSTATS_ACTION_TYPES.STATS_ERROR
}

const statsError: ActionCreator<StatsError> = () => ({
  type: KEYSTATS_ACTION_TYPES.STATS_ERROR
})

export const KeyStatsActions = {
  statsReceived,
  statsError
}

type ActionObject<A extends ActionCreatorsMapObject> = ReturnType<A [keyof A]>  

export type KeyStatsActions = ActionObject<typeof KeyStatsActions>

export type ThunkResult<R> = ThunkAction<R, GlobalState, API, KeyStatsActions>
export const getKeyStatsData: (symbol: string) => ThunkResult<void> = symbol => async (
  dispatch,
  _,
  api
) => {
  try {
    const keystats = await api.getKeyStats(symbol)
    return dispatch(KeyStatsActions.statsReceived(keystats))
  } catch {
    return dispatch(KeyStatsActions.statsError())
  }
}
