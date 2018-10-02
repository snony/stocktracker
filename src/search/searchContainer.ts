import { connect } from 'react-redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { GET_COMPANY_ACTION } from '../companyReducer'
import { getHistoryData } from '../history'
import { getKeyStatsData } from '../keystats'
import { getNewsData } from '../news'
import { getOverviewData } from '../overview'
import { getPeersData } from '../peers'
import { API, GlobalState } from '../types'
import Search from './search'
import { Company, SearchContainerAction } from './types'


const mapStateToProps = (state: GlobalState) => ({
  companySymbols: state.companySymbols
})

export type ThunkResult<R> = ThunkAction<R, GlobalState, API, SearchContainerAction>

const getCompanyAction = (company: Company): SearchContainerAction => ({ type: GET_COMPANY_ACTION, company })

export const getCompanyInfo: (company: Company) => ThunkResult<void> = company => (dispatch) => {
  dispatch(getHistoryData(company.symbol))
  dispatch(getNewsData(company.symbol))
  dispatch(getKeyStatsData(company.symbol))
  dispatch(getOverviewData(company.symbol))
  dispatch(getPeersData(company.symbol))
  dispatch(getCompanyAction(company))
}

const mapDispatchToProps = (dispatch: ThunkDispatch<GlobalState, API, SearchContainerAction>) => ({
  getInfo: (company: Company) => dispatch(getCompanyInfo(company))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
