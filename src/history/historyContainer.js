import { connect } from 'react-redux'
import History from './history'
import { getHistory } from '../api'
import { HISTORY_RECIEVED_ACTION } from './historyActions'

const mapStateToProps = state => ({
  company: state.old.company,
  history: state.history.history,
  priceFilter: state.history.priceFilter,
  dateFilter: state.history.dateFilter
})

const mapDispatchToProps = dispatch => ({
  onClickFilterHistory: (symbol, dateFilter) => {
    getHistory(symbol, dateFilter, priceFilter).then(historyData => {
      return dispatch()
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
