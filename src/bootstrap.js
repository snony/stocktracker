import { GET_COMPANIES_DB } from './redux/'

const getRefDataThunk = () => (dispatch, _, api) => {
  api.getRefData().then(companiesDB => {
    return dispatch({ type: GET_COMPANIES_DB, companiesDB })
  })
}

export const bootstrap = () => dispatch => {
  dispatch(getRefDataThunk())
}
