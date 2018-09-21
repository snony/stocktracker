import { combineReducers } from 'redux'
import { GET_COMPANY, GET_COMPANIES_DB, GET_HISTORY_BY_FILTER } from './actionConstant'
import news from '../news/newsReducer'
import history from '../history/historyReducer'
const initialState = {
  company: null,
  overview: null,
  peers: [],
  keystats: null,
  companiesDB: null
}

const old = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      const { overview, peers, keystats } = action.companyInfo
      return {
        ...state,
        company: action.company,
        overview: overview,
        peers: peers,
        keystats: keystats
      }
    case GET_COMPANIES_DB:
      return { ...state, companiesDB: action.companiesDB }
    default:
      return state
  }
}

export default combineReducers({
  old,
  news,
  history
})
