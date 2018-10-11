import { COMPANY_SYMBOLS_RECEIVED_ACTION, CompanySymbolsReceiveAction } from './bootstrap'
import { Company } from './types'

const initialState: Company[] = []

export default (state = initialState, action: CompanySymbolsReceiveAction) => {
  switch (action.type) {
    case COMPANY_SYMBOLS_RECEIVED_ACTION:
      return [...action.companySymbols]
    default:
      return state
  }
}