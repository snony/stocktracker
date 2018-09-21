export const HISTORY_RECIEVED_ACTION = 'HISTORY_RECIEVED_ACTION'

export const getHistoryData = symbol => (dispatch, { priceFilter, dateFilter }, api) => {
  api.getHistory(symbol, priceFilter, dateFilter).then(history => {
    return dispatch({ type: HISTORY_RECIEVED_ACTION, history })
  })
}

export const CHANGE_DATE_FILTER_ACTION = 'CHANGE_DATE_FILTER_ACTION'
export const getHistoryByDateFilter = (symbol, dateFilter) => (dispatch, _, api) => {
  dispatch({ type: CHANGE_DATE_FILTER_ACTION, dateFilter })
  dispatch(getHistoryData(symbol))
}

export const CHANGE_PRICE_FILTER_ACTION = 'CHANGE_PRICE_FILTER_ACTION'
export const getHistoryByPriceFilter = (symbol, priceFilter) => (dispatch, _, api) => {
  dispatch({ type: CHANGE_PRICE_FILTER_ACTION, priceFilter })
  dispatch(getHistoryData(symbol))
}
