import { Reducer } from 'redux'

import { OVERVIEW_RECEIVED_ACTION, OverviewReceivedAction } from './overviewActions'
import { OverviewState } from './types'

const initialState: OverviewState = {
  companyName: '',
  symbol: '',
  website: '',
  description: ''
}

const overviewReducer: Reducer<OverviewState, OverviewReceivedAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OVERVIEW_RECEIVED_ACTION:
      return { ...action.overview }
    default:
      return state
  }
}

export default overviewReducer
