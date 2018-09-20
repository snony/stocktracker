import { connect } from 'react-redux'
import History from './history'
import { getHistory } from '../api'
import { GET_HISTORY_BY_FILTER } from '../redux'

const mapStateToProps = state => ({
  company: state.company,
  history: state.companyInfo.history,
  filters: state.filters
})

const mapDispatchToProps = dispatch => ({
  onClickFilterHistory: (symbol, dateFilter, priceFilter) => {
    getHistory(symbol, dateFilter, priceFilter).then(historyData => {
      return dispatch({
        type: GET_HISTORY_BY_FILTER,
        filters: {
          dateFilter,
          priceFilter
        },
        history: historyData
      })
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
