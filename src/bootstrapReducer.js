import { COMPANY_SYMBOLS_RECEIVED_ACTION } from './bootstrap'

const initialState = null

export default (state = initialState, { type, companySymbols }) => {
  switch (type) {
    case COMPANY_SYMBOLS_RECEIVED_ACTION:
      return companySymbols
    default:
      return state
  }
}
