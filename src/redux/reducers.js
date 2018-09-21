import { combineReducers } from 'redux'
import { GET_COMPANY, GET_COMPANIES_DB, GET_HISTORY_BY_FILTER } from './actionConstant'
import news from '../news/newsReducer'
import overview from '../overview/overviewReducer'
const initialState = {
  company: null,
  history: [],
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
      const { history, peers, keystats } = action.companyInfo
      return {
        ...state,
        company: action.company,
        history: history,
        peers: peers,
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
  overview
})
