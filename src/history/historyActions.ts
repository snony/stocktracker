import { HistoryData } from 'history/types'
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

const historyReceivedAction: ActionCreator<HistoryReceivedAction> = (history: HistoryData[]) => ({
  type: HISTORY_RECEIVED_ACTION,
  history
})

export const getHistoryData: (
  symbol: string
) => ThunkResult<void, HistoryReceivedAction> = symbol => (dispatch, getState, api) => {
  const { priceFilter, dateFilter } = getState().history
  api.getHistory(symbol, dateFilter, priceFilter).then((history: HistoryData[]) => {
    return dispatch(historyReceivedAction(history))
  })
}

export const CHANGE_DATE_FILTER_ACTION = 'CHANGE_DATE_FILTER_ACTION'

export interface ChangeDateFilterAction extends Action {
  type: typeof CHANGE_DATE_FILTER_ACTION
  dateFilter: string
}

const changeDateFilterAction: ActionCreator<ChangeDateFilterAction> = (dateFilter: string) => ({
  type: CHANGE_DATE_FILTER_ACTION,
  dateFilter
})

export const getHistoryByDateFilter: (
  symbol: string,
  dateFilter: string
) => ThunkResult<void, ChangeDateFilterAction> = (symbol, dateFilter) => dispatch => {
  dispatch(changeDateFilterAction(dateFilter))
  dispatch(getHistoryData(symbol))
}

export const CHANGE_PRICE_FILTER_ACTION = 'CHANGE_PRICE_FILTER_ACTION'

export interface ChangePriceFilterAction extends Action {
  type: typeof CHANGE_PRICE_FILTER_ACTION
  priceFilter: string
}

const changePriceFilterAction: ActionCreator<ChangePriceFilterAction> = (priceFilter: string) => ({
  type: CHANGE_PRICE_FILTER_ACTION as typeof CHANGE_PRICE_FILTER_ACTION,
  priceFilter
})

export const getHistoryByPriceFilter: (
  symbol: string,
  priceFilter: string
) => ThunkResult<void, ChangePriceFilterAction> = (symbol, priceFilter) => dispatch => {
  dispatch(changePriceFilterAction(priceFilter))
  dispatch(getHistoryData(symbol))
}

export type ChangeFilterActions = ChangeDateFilterAction | ChangePriceFilterAction

export type HistoryActions = ChangeFilterActions | HistoryReceivedAction
