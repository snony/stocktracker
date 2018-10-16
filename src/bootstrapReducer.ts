import { COMPANY_SYMBOLS_FETCH_FAIL_ACTION, COMPANY_SYMBOLS_RECEIVED_ACTION, CompanySymbolsAction } from 'bootstrapActions'
import FetchStatus from 'fetchStatus'
import { Reducer } from 'redux'
import { Company } from 'types'

export interface CompanySymbolState {
  readonly companySymbols: Company[]
  readonly fetchStatus: string
}
export const initialState: CompanySymbolState = { companySymbols: [], fetchStatus: FetchStatus.INITIAL }

const companySymbolsReducer: Reducer<CompanySymbolState, CompanySymbolsAction> = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_SYMBOLS_RECEIVED_ACTION:
      return { ...state, companySymbols: action.companySymbols, fetchStatus: FetchStatus.SUCCESS }
    case COMPANY_SYMBOLS_FETCH_FAIL_ACTION:
      return { ...state, fetchStatus: FetchStatus.FAILED }
    default:
      return state
  }
}
export default companySymbolsReducer