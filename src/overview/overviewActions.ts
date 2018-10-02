import { ThunkAction } from 'redux-thunk'

import { API, GlobalState } from '../types'
import { OverviewState } from './types'

export const OVERVIEW_RECEIVED_ACTION = 'OVERVIEW_RECEIVED_ACTION'

const overviewReceivedAction = (overview: OverviewState) => ({
  type: OVERVIEW_RECEIVED_ACTION as typeof OVERVIEW_RECEIVED_ACTION,
  overview
})

export type OverviewReceivedAction = ReturnType<typeof overviewReceivedAction>

export const getOverviewData: (
  symbol: string
) => ThunkAction<void, GlobalState, API, OverviewReceivedAction> = symbol => (dispatch, _, api) => {
  api.getOverview(symbol).then(overview => {
    return dispatch(overviewReceivedAction(overview))
  })
}
