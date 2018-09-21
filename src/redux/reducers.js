import { combineReducers } from 'redux'
import { GET_COMPANY, GET_COMPANIES_DB, GET_HISTORY_BY_FILTER } from './actionConstant'
import news from '../news/newsReducer'
import peers from '../peers/peersReducer'
const initialState = {
  company: null,
  history: [],
  overview: null,
  peers: [],
  keystats: null,
  filters: {
    dateFilter: 'ytd',
    priceFilter: 'close'
  },
  companiesDB: null
}

const old = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      const { history, overview, peers, keystats } = action.companyInfo
      return {
        ...state,
        company: action.company,
        history: history,
        overview: overview,
        keystats: keystats
      }
    case GET_COMPANIES_DB:
      return { ...state, companiesDB: action.companiesDB }
    case GET_HISTORY_BY_FILTER:
      return {
        ...state,
        history: action.history,
        filters: action.filters
      }
    default:
      return state
  }
}

export default combineReducers({
  old,
  news,
  peers
})
