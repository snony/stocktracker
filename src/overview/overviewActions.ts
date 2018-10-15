import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { API, GlobalState } from '../types'
import { OverviewState } from './types'

export const OVERVIEW_RECEIVED_ACTION = 'OVERVIEW_RECEIVED_ACTION'

export interface OverviewReceivedAction extends Action {
  type: typeof OVERVIEW_RECEIVED_ACTION
  overview: OverviewState
}

export const overviewReceivedAction: ActionCreator<OverviewReceivedAction> = (
  overview: OverviewState
) => ({
  type: OVERVIEW_RECEIVED_ACTION,
  overview
})

export const OVERVIEW_FETCH_FAILED = 'OVERVIEW_FETCH_FAILED'

export interface OverviewFetchFailed extends Action {
  type: typeof OVERVIEW_FETCH_FAILED
}

export const overviewFetchFailedAction: ActionCreator<OverviewFetchFailed> = () => ({
  type: OVERVIEW_FETCH_FAILED
})

export const getOverviewData: (
  symbol: string
) => ThunkAction<
  void,
  GlobalState,
  API,
  OverviewReceivedAction | OverviewFetchFailed
> = symbol => async (dispatch, _, api) => {
  try {
    const overview = await api.getOverview(symbol)
    return dispatch(overviewReceivedAction(overview))
  } catch {
    return dispatch(overviewFetchFailedAction())
  }
}
