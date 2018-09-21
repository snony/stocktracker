import {
  HISTORY_RECIEVED_ACTION,
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
    case HISTORY_RECIEVED_ACTION:
      return { ...state, history: action.history }
    default:
      return state
  }
}
