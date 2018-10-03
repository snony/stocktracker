import { COMPANY_SYMBOLS_RECEIVED_ACTION } from './bootstrap'
import { CompanySymbolReceiveAction } from './bootstrap'
import { Company } from './types'

const initialState: Company[] = []

export default (state = initialState, action: CompanySymbolReceiveAction) => {
  switch (action.type) {
    case COMPANY_SYMBOLS_RECEIVED_ACTION:
      return [...action.companySymbols]
    default:
      return state
  }
}
