import { connect } from 'react-redux'

import { GET_COMPANY_ACTION } from '../companyReducer'
import { getHistoryData } from '../history'
import { getNewsData } from '../news'
import { getKeyStatsData } from '../keystats'
import { getOverviewData } from '../overview'
import { getPeersData } from '../peers'

import Search from './search'

const mapStateToProps = state => ({
  companySymbols: state.companySymbols
})

const onSymbolSelected = company => dispatch => {
  dispatch({ type: GET_COMPANY_ACTION, company })
  dispatch(getHistoryData(company.symbol))
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
