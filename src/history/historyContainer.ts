import { connect } from 'react-redux'
import { GlobalState } from 'types'
import History from './history'
import { getHistoryByDateFilter, getHistoryByPriceFilter } from './historyActions'

const mapStateToProps = (state: GlobalState) => ({
  company: state.company.symbol,
  history: state.history.history,
  priceFilter: state.history.priceFilter,
  dateFilter: state.history.dateFilter
})

export type HistoryContainerStateProps = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch: any) => ({
  onClickFilterHistoryByDate: (symbol: string, dateFilter: string) => {
    dispatch(getHistoryByDateFilter(symbol, dateFilter))
  },
  onClickFilterHistoryByPrice: (symbol: string, priceFilter: string) => {
    dispatch(getHistoryByPriceFilter(symbol, priceFilter))
  }
})

export type HistoryContainerDispatchProps = ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
