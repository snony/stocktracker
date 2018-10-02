import {
  ChangeDateFilterAction,
  ChangePriceFilterAction,
  HistoryReceivedAction
} from './historyActions'
import {
  CHANGE_DATE_FILTER_ACTION,
  CHANGE_PRICE_FILTER_ACTION,
  HISTORY_RECEIVED_ACTION
} from './historyActions'
// import { HistoryContainerStateProps } from './historyContainer'
import { HistoryData } from './types'

const initialState: {
  company: string
  history: HistoryData[]
  dateFilter: string
  priceFilter: string
} = {
  company: 'aapl',
  history: [],
  dateFilter: 'ytd',
  priceFilter: 'close'
}

type HistoryActions = ChangeDateFilterAction | ChangePriceFilterAction | HistoryReceivedAction

export default (state = initialState, action: HistoryActions) => {
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
