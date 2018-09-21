import { connect } from 'react-redux'

import { GET_COMPANY } from '../redux'
import { getNewsData } from '../news'
import { getKeyStatsData } from '../keystats'
import { getOverviewData } from '../overview'
import { getPeersData } from '../peers'

import Search from './search'

const mapStateToProps = state => ({
  companiesDB: state.old.companiesDB
})

const onSymbolSelected = company => (dispatch, _, api) => {
  api.getCompanyInfo(company.symbol).then(companyInfo => {
    return dispatch({ type: GET_COMPANY, company, companyInfo })
  })

  dispatch(getNewsData(company.symbol))
  dispatch(getKeyStatsData(company.symbol))
  dispatch(getOverviewData(company.symbol))
  dispatch(getPeersData(company.symbol))
}

const mapDispatchToProps = dispatch => ({
  getInfo: company => dispatch(onSymbolSelected(company))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
