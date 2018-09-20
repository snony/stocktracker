import { connect } from 'react-redux'

import { getRefData } from './api'
import { GET_COMPANIES_DB } from './redux/actionConstant'
import StockTracker from './stockTracker'

const mapDispatchToProps = dispatch => ({
  getCompanies: () => {
    getRefData().then(companiesDB => {
      return dispatch({ type: GET_COMPANIES_DB, companiesDB })
    })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(StockTracker)
