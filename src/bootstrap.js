export const COMPANY_SYMBOLS_RECEIVED_ACTION = 'COMPANY_SYMBOLS_RECEIVED_ACTION'

const companySymbolsReceivedAction = companySymbols => ({
  type: COMPANY_SYMBOLS_RECEIVED_ACTION,
  companySymbols
})

const getCompanySymbolsData = () => (dispatch, _, api) => {
  api.getCompanySymbols().then(companySymbols => {
    return dispatch(companySymbolsReceivedAction(companySymbols))
  })
}

export const bootstrap = () => dispatch => {
  dispatch(getCompanySymbolsData())
}
