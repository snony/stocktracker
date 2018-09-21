import { connect } from 'react-redux'

import { getHistoryData } from '../history'
import { getNewsData } from '../news'
import { getKeyStatsData } from '../keystats'
import { getOverviewData } from '../overview'
import { getPeersData } from '../peers'

import Search from './search'
import { GET_COMPANY } from '../redux/actionConstant'

const mapStateToProps = state => ({
  companySymbols: state.old.companySymbols
})

const onSymbolSelected = company => (dispatch, _, api) => {
  dispatch({ type: GET_COMPANY, company })
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
