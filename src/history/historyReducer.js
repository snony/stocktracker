import {
  HISTORY_RECEIVED_ACTION,
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION
} from './historyActions'

const initialState = {
  history: [],
  dateFilter: 'ytd',
  priceFilter: 'close'
}

export default (state = initialState, action) => {
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
