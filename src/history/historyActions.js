export const HISTORY_RECEIVED_ACTION = 'HISTORY_RECEIVED_ACTION'

const historyReceivedAction = history => ({ type: HISTORY_RECEIVED_ACTION, history })

export const getHistoryData = symbol => (dispatch, getState, api) => {
  const { priceFilter, dateFilter } = getState().history
  api.getHistory(symbol, dateFilter, priceFilter).then(history => {
    return dispatch(historyReceivedAction(history))
  })
}

export const CHANGE_DATE_FILTER_ACTION = 'CHANGE_DATE_FILTER_ACTION'

const changeDateFilterAction = dateFilter => ({ type: CHANGE_DATE_FILTER_ACTION, dateFilter })

export const getHistoryByDateFilter = (symbol, dateFilter) => dispatch => {
  dispatch(changeDateFilterAction(dateFilter))
  dispatch(getHistoryData(symbol))
}

export const CHANGE_PRICE_FILTER_ACTION = 'CHANGE_PRICE_FILTER_ACTION'

const changePriceFilterAction = priceFilter => ({ type: CHANGE_PRICE_FILTER_ACTION, priceFilter })

export const getHistoryByPriceFilter = (symbol, priceFilter) => dispatch => {
  dispatch(changePriceFilterAction(priceFilter))
  dispatch(getHistoryData(symbol))
}
