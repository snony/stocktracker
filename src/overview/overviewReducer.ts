import fetchStatus from 'fetchStatus'
import { Reducer } from 'redux'

import {
  OVERVIEW_FETCH_FAILED,
  OVERVIEW_RECEIVED_ACTION,
  OverviewFetchFailed,
  OverviewReceivedAction
} from './overviewActions'
import { OverviewState } from './types'

export const initialState: OverviewState = {
  fetchStatus: fetchStatus.INITIAL,
  companyName: '',
  symbol: '',
  website: '',
  description: ''
}

const overviewReducer: Reducer<OverviewState, OverviewReceivedAction | OverviewFetchFailed> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OVERVIEW_RECEIVED_ACTION:
      return { ...state, ...action.overview, fetchStatus: fetchStatus.SUCCESS }
    case OVERVIEW_FETCH_FAILED:
      return { ...state, fetchStatus: fetchStatus.FAILED }
    default:
      return state
  }
}

export default overviewReducer
