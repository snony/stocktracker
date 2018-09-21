import { combineReducers } from 'redux'
import { GET_COMPANY, GET_COMPANIES_DB, GET_HISTORY_BY_FILTER } from './actionConstant'
import { news } from '../news'
import { keystats } from '../keystats'
import { overview } from '../overview'

const initialState = {
  company: null,
  history: [],
  peers: [],
  filters: {
    dateFilter: 'ytd',
    priceFilter: 'close'
  },
  companiesDB: null
}

const old = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      const { history, peers } = action.companyInfo
      return {
        ...state,
        company: action.company,
        history: history,
        peers: peers
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
  keystats,
  overview
})
