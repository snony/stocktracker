import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { API, GlobalState } from 'types'

import History from './history'
import {
  ChangeFilterActions,
  getHistoryByDateFilter,
  getHistoryByPriceFilter
} from './historyActions'

export const mapStateToProps = (state: GlobalState) => ({
  company: state.company.symbol,
  history: state.history.history,
  priceFilter: state.history.priceFilter,
  dateFilter: state.history.dateFilter
})

type HistoryContainerStateProps = ReturnType<typeof mapStateToProps>

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<GlobalState, API, ChangeFilterActions>
) => ({
  onClickFilterHistoryByDate: (symbol: string, dateFilter: string) => {
    dispatch(getHistoryByDateFilter(symbol, dateFilter))
  },
  onClickFilterHistoryByPrice: (symbol: string, priceFilter: string) => {
    dispatch(getHistoryByPriceFilter(symbol, priceFilter))
  }
})

type HistoryContainerDispatchProps = ReturnType<typeof mapDispatchToProps>

export type HistoryContainerProps = HistoryContainerStateProps & HistoryContainerDispatchProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
