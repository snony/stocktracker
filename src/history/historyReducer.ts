import fetchStatus from 'fetchStatus'
import { Reducer } from 'redux'

import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  HISTORY_FETCH_FAILED,
  HISTORY_RECEIVED_ACTION,
  HistoryActions
} from './historyActions'
import { HistoryState } from './types'

export const initialState: HistoryState = {
  fetchStatus: fetchStatus.INITIAL,
  history: [],
  dateFilter: 'ytd',
  priceFilter: 'close'
}

const historyReducer: Reducer<HistoryState, HistoryActions> = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_RECEIVED_ACTION:
      return { ...state, history: action.history, fetchStatus: fetchStatus.SUCCESS }
    case HISTORY_FETCH_FAILED:
      return { ...state, fetchStatus: fetchStatus.FAILED }
    case CHANGE_DATE_FILTER_ACTION:
      return { ...state, dateFilter: action.dateFilter }
    case CHANGE_PRICE_FILTER_ACTION:
      return { ...state, priceFilter: action.priceFilter }
    default:
      return state
  }
}

export default historyReducer
