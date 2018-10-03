import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { getCompanyInfo } from './search'
import { API, Company, GlobalState } from './types' // TODO move this to global type

export interface CompanySymbolReceiveAction { type: string, companySymbols: Company[] }
type ThunkResult<R> = ThunkAction<R, GlobalState, API, CompanySymbolReceiveAction>


const defaultCompany = {
  name: 'Apple Inc',
  symbol: 'aapl'
}

export const COMPANY_SYMBOLS_RECEIVED_ACTION = 'COMPANY_SYMBOLS_RECEIVED_ACTION'

const receiveCompanySymbolsAction = (companySymbols: Company[]): CompanySymbolReceiveAction => ({
  type: COMPANY_SYMBOLS_RECEIVED_ACTION,
  companySymbols
})

const getCompanySymbolsData = () => (dispatch: Dispatch<CompanySymbolReceiveAction>, _: any, api: API) => {
  api.getCompanySymbols().then((companySymbols: Company[]) => {
    return dispatch(receiveCompanySymbolsAction(companySymbols))
  })
}

export const bootstrap: () => ThunkResult<void> = () => (dispatch) => {
  dispatch(getCompanySymbolsData())
  dispatch(getCompanyInfo(defaultCompany))
}