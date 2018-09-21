export const HISTORY_RECEIVED_ACTION = 'HISTORY_RECEIVED_ACTION'

export const getHistoryData = symbol => (dispatch, getState, api) => {
  const { priceFilter, dateFilter } = getState().history
  api.getHistory(symbol, dateFilter, priceFilter).then(history => {
    return dispatch({ type: HISTORY_RECEIVED_ACTION, history })
  })
}

export const CHANGE_DATE_FILTER_ACTION = 'CHANGE_DATE_FILTER_ACTION'

export const getHistoryByDateFilter = (symbol, dateFilter) => dispatch => {
  dispatch({ type: CHANGE_DATE_FILTER_ACTION, dateFilter })
  dispatch(getHistoryData(symbol))
}

export const CHANGE_PRICE_FILTER_ACTION = 'CHANGE_PRICE_FILTER_ACTION'

export const getHistoryByPriceFilter = (symbol, priceFilter) => dispatch => {
  dispatch({ type: CHANGE_PRICE_FILTER_ACTION, priceFilter })
  dispatch(getHistoryData(symbol))
}
