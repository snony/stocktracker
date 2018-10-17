import { connect } from 'react-redux'
import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { subscribeSymbolThunk } from 'quote/quoteActions'
import { GET_COMPANY_ACTION } from '../companyReducer'
import { getHistoryData } from '../history'
import { getKeyStatsData } from '../keystats'
import { getNewsData } from '../news'
import { getOverviewData } from '../overview'
import { getPeersData } from '../peers'
import { API, Company, GlobalState } from '../types'
import Search from './search'

export interface CompanyGetAction {
  type: typeof GET_COMPANY_ACTION
  company: Company
}

export const mapStateToProps = (state: GlobalState) => ({
  companySymbols: state.companySymbols
})

export const getCompanyAction: ActionCreator<CompanyGetAction> = (company: Company) => ({
  type: GET_COMPANY_ACTION,
  company
})

type ThunkResult = ThunkAction<void, GlobalState, API, CompanyGetAction>
export const getCompanyInfo: (company: Company) => ThunkResult = company => dispatch => {
  dispatch(subscribeSymbolThunk(company.symbol))
  dispatch(getHistoryData(company.symbol))
  dispatch(getNewsData(company.symbol))
  dispatch(getKeyStatsData(company.symbol))
  dispatch(getOverviewData(company.symbol))
  dispatch(getPeersData(company.symbol))
  dispatch(getCompanyAction(company))
}

export type ThunkDispatchContainerAction = ThunkDispatch<GlobalState, API, CompanyGetAction>
export const mapDispatchToProps = (dispatch: ThunkDispatchContainerAction) => ({
  getInfo: (company: Company) => dispatch(getCompanyInfo(company))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
