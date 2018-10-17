import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { getCompanyInfo } from './search'
import { API, Company, GlobalState } from './types'

interface CompanySymbolsReceiveAction extends Action {
  type: typeof COMPANY_SYMBOLS_RECEIVED_ACTION
  companySymbols: Company[]
}
interface CompanySymbolFetchFailAction extends Action {
  type: typeof COMPANY_SYMBOLS_FETCH_FAIL_ACTION
}

const defaultCompany = {
  name: 'Apple Inc',
  symbol: 'aapl'
}

export const COMPANY_SYMBOLS_FETCH_FAIL_ACTION = 'COMPANY_SYMBOLS_FETCH_FAIL_ACTION'

export const setFailFetchCompanySymbolsAction: ActionCreator<
  CompanySymbolFetchFailAction
> = () => ({
  type: COMPANY_SYMBOLS_FETCH_FAIL_ACTION
})

export const COMPANY_SYMBOLS_RECEIVED_ACTION = 'COMPANY_SYMBOLS_RECEIVED_ACTION'

export const receiveCompanySymbolsAction: ActionCreator<CompanySymbolsReceiveAction> = (
  companySymbols: Company[]
): CompanySymbolsReceiveAction => ({
  type: COMPANY_SYMBOLS_RECEIVED_ACTION,
  companySymbols
})

export type CompanySymbolsAction = CompanySymbolsReceiveAction | CompanySymbolFetchFailAction
type ThunkResult<R> = ThunkAction<R, GlobalState, API, CompanySymbolsAction>
export const getCompanySymbolsData: () => ThunkResult<void> = () => async (dispatch, _, api) => {
  try {
    const companySymbols = await api.getCompanySymbols()
    return dispatch(receiveCompanySymbolsAction(companySymbols))
  } catch {
    return dispatch(setFailFetchCompanySymbolsAction())
  }
}

export const bootstrap: () => ThunkResult<void> = () => dispatch => {
  dispatch(getCompanySymbolsData())
  dispatch(getCompanyInfo(defaultCompany))
}
