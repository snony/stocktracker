import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { getCompanyInfo } from './search'
import { API, Company, GlobalState } from './types'

export interface CompanySymbolsReceiveAction extends Action {
  type: typeof COMPANY_SYMBOLS_RECEIVED_ACTION
  companySymbols: Company[]
}
type ThunkResult<R> = ThunkAction<R, GlobalState, API, CompanySymbolsReceiveAction>

const defaultCompany = {
  name: 'Apple Inc',
  symbol: 'aapl'
}

export const COMPANY_SYMBOLS_RECEIVED_ACTION = 'COMPANY_SYMBOLS_RECEIVED_ACTION'

export const receiveCompanySymbolsAction: ActionCreator<CompanySymbolsReceiveAction> = (
  companySymbols: Company[]
): CompanySymbolsReceiveAction => ({
  type: COMPANY_SYMBOLS_RECEIVED_ACTION,
  companySymbols
})

export const getCompanySymbolsData: () => ThunkResult<void> = () => async (dispatch, _, api) => {
  try {
    const companySymbols = await api.getCompanySymbols()
    return dispatch(receiveCompanySymbolsAction(companySymbols))
  } catch {
    console.log('Error')
  }
}

export const bootstrap: () => ThunkResult<void> = () => dispatch => {
  dispatch(getCompanySymbolsData())
  dispatch(getCompanyInfo(defaultCompany))
}
