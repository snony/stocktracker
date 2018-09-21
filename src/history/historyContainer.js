import { connect } from 'react-redux'
import History from './history'
import { getHistoryByPriceFilter, getHistoryByDateFilter } from './historyActions'

const mapStateToProps = state => ({
  company: state.old.company,
  history: state.history.history,
  priceFilter: state.history.priceFilter,
  dateFilter: state.history.dateFilter
})

const mapDispatchToProps = dispatch => ({
  onClickFilterHistoryByDate: (symbol, dateFilter) => {
    dispatch(getHistoryByDateFilter(symbol, dateFilter))
  },
  onClickFilterHistoryByPrice: (symbol, priceFilter) => {
    dispatch(getHistoryByPriceFilter(symbol, priceFilter))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
