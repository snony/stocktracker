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

export const getOverviewData: (
  symbol: string
) => ThunkAction<void, GlobalState, API, OverviewReceivedAction> = symbol => async (
  dispatch,
  _,
  api
) => {
  const overview = await api.getOverview(symbol)
  return dispatch(overviewReceivedAction(overview))
}
