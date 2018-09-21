import { GET_COMPANIES_DB } from './redux/'
import { onSymbolSelected } from './search'

const company = {
  name: 'Apple Inc',
  symbol: 'aapl'
}
const getRefDataThunk = () => (dispatch, _, api) => {
  api.getRefData().then(companiesDB => {
    return dispatch({ type: GET_COMPANIES_DB, companiesDB })
  })
}

export const bootstrap = () => dispatch => {
  dispatch(getRefDataThunk())
  dispatch(onSymbolSelected(company))
}
