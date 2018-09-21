export const GET_COMPANY_SYMBOLS_ACTION = 'GET_COMPANY_SYMBOLS_ACTION'

const getCompanySymbolsData = () => (dispatch, _, api) => {
  api.getCompanySymbols().then(companySymbols => {
    return dispatch({ type: GET_COMPANY_SYMBOLS_ACTION, companySymbols })
  })
}

export const bootstrap = () => dispatch => {
  dispatch(getCompanySymbolsData())
}
