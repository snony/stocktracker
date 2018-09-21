import { GET_COMPANY_SYMBOLS } from './redux'

const getCompanySymbolsData = () => (dispatch, _, api) => {
  api.getCompanySymbols().then(companySymbols => {
    return dispatch({ type: GET_COMPANY_SYMBOLS, companySymbols })
  })
}

export const bootstrap = () => dispatch => {
  dispatch(getCompanySymbolsData())
}
