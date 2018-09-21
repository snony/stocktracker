import { connect } from 'react-redux'

import { GET_COMPANY } from '../redux'
import { getNewsData } from '../news/newsActions'
import { getOverviewData } from '../overview/overviewActions'
import Search from './search'

const mapStateToProps = state => ({
  companiesDB: state.old.companiesDB
})

const onSymbolSelected = company => (dispatch, _, api) => {
  api.getCompanyInfo(company.symbol).then(companyInfo => {
    return dispatch({ type: GET_COMPANY, company, companyInfo })
  })

  dispatch(getNewsData(company.symbol))
  dispatch(getOverviewData(company.symbol))
}

const mapDispatchToProps = dispatch => ({
  getInfo: company => dispatch(onSymbolSelected(company))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
