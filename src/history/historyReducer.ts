import { Reducer } from 'redux'

import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  HISTORY_RECEIVED_ACTION,
  HistoryActions
} from './historyActions'
import { HistoryState } from './types'

const initialState: HistoryState = {
  company: 'aapl',
  history: [],
  dateFilter: 'ytd',
  priceFilter: 'close'
}

const history: Reducer<HistoryState, HistoryActions> = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_RECEIVED_ACTION:
      return { ...state, history: action.history }
    case CHANGE_DATE_FILTER_ACTION:
      return { ...state, dateFilter: action.dateFilter }
    case CHANGE_PRICE_FILTER_ACTION:
      return { ...state, priceFilter: action.priceFilter }
    default:
      return state
  }
}

export default history
