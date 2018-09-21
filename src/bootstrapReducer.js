import { GET_COMPANY_SYMBOLS_ACTION } from './bootstrap'

const initialState = null

export default (state = initialState, { type, companySymbols }) => {
  switch (type) {
    case GET_COMPANY_SYMBOLS_ACTION:
      return companySymbols
    default:
      return state
  }
}
