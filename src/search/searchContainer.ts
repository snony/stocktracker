import { connect } from 'react-redux'
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { GET_COMPANY_ACTION } from '../companyReducer'
import { getHistoryData } from '../history'
import { getKeyStatsData } from '../keystats'
import { getNewsData } from '../news'
import { getOverviewData } from '../overview'
import { getPeersData } from '../peers'
import { API, GlobalState } from '../types'
import { Company } from '../types'
import Search from './search'

export interface SearchContainerAction { type: string, company: Company }


const mapStateToProps = (state: GlobalState) => ({
  companySymbols: state.companySymbols
})

const getCompanyAction: ActionCreator<SearchContainerAction> = (company: Company) => ({ type: GET_COMPANY_ACTION, company })

type ThunkResult = ThunkAction<void, GlobalState, API, SearchContainerAction>
export const getCompanyInfo: (company: Company) => ThunkResult = company => (dispatch) => {
  dispatch(getHistoryData(company.symbol))
  dispatch(getNewsData(company.symbol))
  dispatch(getKeyStatsData(company.symbol))
  dispatch(getOverviewData(company.symbol))
  dispatch(getPeersData(company.symbol))
  dispatch(getCompanyAction(company))
}

type ThunkDispatchContainerAction = ThunkDispatch<GlobalState, API, SearchContainerAction>
const mapDispatchToProps = (dispatch: ThunkDispatchContainerAction) => ({
  getInfo: (company: Company) => dispatch(getCompanyInfo(company))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
