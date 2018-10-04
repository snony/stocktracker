import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { getCompanyInfo } from './search'
import { API, Company, GlobalState } from './types'

export interface CompanySymbolsReceiveAction extends Action { type: typeof COMPANY_SYMBOLS_RECEIVED_ACTION, companySymbols: Company[] }
type ThunkResult<R> = ThunkAction<R, GlobalState, API, CompanySymbolsReceiveAction>


const defaultCompany = {
  name: 'Apple Inc',
  symbol: 'aapl'
}

export const COMPANY_SYMBOLS_RECEIVED_ACTION = 'COMPANY_SYMBOLS_RECEIVED_ACTION'

const receiveCompanySymbolsAction: ActionCreator<CompanySymbolsReceiveAction> = (companySymbols: Company[]): CompanySymbolsReceiveAction => ({
  type: COMPANY_SYMBOLS_RECEIVED_ACTION,
  companySymbols
})

const getCompanySymbolsData: () => ThunkResult<void> = () => (dispatch, _, api) => {
  api.getCompanySymbols().then((companySymbols: Company[]) => {
    return dispatch(receiveCompanySymbolsAction(companySymbols))
  })
}

export const bootstrap: () => ThunkResult<void> = () => (dispatch) => {
  dispatch(getCompanySymbolsData())
  dispatch(getCompanyInfo(defaultCompany))
}