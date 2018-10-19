import { GET_COMPANY_ACTION } from 'companyReducer'
import { getHistoryData } from 'histories'
import { getKeyStatsData } from 'keystats'
import { getNewsData } from 'news'
import { getOverviewData } from 'overview'
import { getPeersData } from 'peers'
import { setSubscribeSymbol } from 'quote'
import { connect } from 'react-redux'
import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { API, Company, GlobalState } from 'types'

import Search from './search'

export interface CompanyGetAction {
  type: typeof GET_COMPANY_ACTION
  company: Company
}

export const mapStateToProps = (state: GlobalState) => ({
  companySymbols: state.companySymbolsState.companySymbols,
  fetchStatus: state.companySymbolsState.fetchStatus
})

export const getCompanyAction: ActionCreator<CompanyGetAction> = (company: Company) => ({
  type: GET_COMPANY_ACTION,
  company
})

type ThunkResult = ThunkAction<void, GlobalState, API, CompanyGetAction>
export const getCompanyInfo: (company: Company) => ThunkResult = company => dispatch => {
  dispatch(setSubscribeSymbol(company.symbol))
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
