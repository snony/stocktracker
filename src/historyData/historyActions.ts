import { HistoryData } from 'historyData/types'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from 'types'

import { ChangePriceFilterAction } from './historyActions'

/**
 * TODO
 * TL 02/10/2018
 * Could potentially be moved to the root src directory types.ts once all components have been converted to TS?
 */
type ThunkResult<R, A extends Action> = ThunkAction<R, GlobalState, API, A>

export const HISTORY_RECEIVED_ACTION = 'HISTORY_RECEIVED_ACTION'

export interface HistoryReceivedAction extends Action {
  type: typeof HISTORY_RECEIVED_ACTION
  history: HistoryData[]
}

export const historyReceivedAction: ActionCreator<HistoryReceivedAction> = (
  history: HistoryData[]
) => ({
  type: HISTORY_RECEIVED_ACTION,
  history
})

export const HISTORY_FETCH_FAILED = 'HISTORY_FETCH_FAILED'

export interface HistoryFetchFailed extends Action {
  type: typeof HISTORY_FETCH_FAILED
}

export const historyFetchFailedAction: ActionCreator<HistoryFetchFailed> = () => ({
  type: HISTORY_FETCH_FAILED
})

export const getHistoryData: (
  symbol: string
) => ThunkResult<void, HistoryReceivedAction | HistoryFetchFailed> = symbol => async (
  dispatch,
  getState,
  api
) => {
  const { priceFilter, dateFilter } = getState().history
  try {
    const history = await api.getHistory(symbol, dateFilter, priceFilter)
    return dispatch(historyReceivedAction(history))
  } catch {
    return dispatch(historyFetchFailedAction())
  }
}

export const CHANGE_DATE_FILTER_ACTION = 'CHANGE_DATE_FILTER_ACTION'

export interface ChangeDateFilterAction extends Action {
  type: typeof CHANGE_DATE_FILTER_ACTION
  dateFilter: string
}

export const changeDateFilterAction: ActionCreator<ChangeDateFilterAction> = (
  dateFilter: string
) => ({
  type: CHANGE_DATE_FILTER_ACTION,
  dateFilter
})

export const getHistoryByDateFilter: (
  symbol: string,
  dateFilter: string
) => ThunkResult<void, ChangeDateFilterAction> = (symbol, dateFilter) => dispatch => {
  dispatch(changeDateFilterAction(dateFilter))
  return dispatch(getHistoryData(symbol))
}

export const CHANGE_PRICE_FILTER_ACTION = 'CHANGE_PRICE_FILTER_ACTION'

export interface ChangePriceFilterAction extends Action {
  type: typeof CHANGE_PRICE_FILTER_ACTION
  priceFilter: string
}

export const changePriceFilterAction: ActionCreator<ChangePriceFilterAction> = (
  priceFilter: string
) => ({
  type: CHANGE_PRICE_FILTER_ACTION as typeof CHANGE_PRICE_FILTER_ACTION,
  priceFilter
})

export const getHistoryByPriceFilter: (
  symbol: string,
  priceFilter: string
) => ThunkResult<void, ChangePriceFilterAction> = (symbol, priceFilter) => dispatch => {
  dispatch(changePriceFilterAction(priceFilter))
  return dispatch(getHistoryData(symbol))
}

export type ChangeFilterActions = ChangeDateFilterAction | ChangePriceFilterAction

export type HistoryActions = ChangeFilterActions | HistoryReceivedAction | HistoryFetchFailed
