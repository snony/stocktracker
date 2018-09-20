import { GET_COMPANY, GET_COMPANIES_DB, GET_HISTORY_BY_FILTER } from './actionConstant'

const initialState = {
  company: null,
  history: [],
  news: [],
  overview: null,
  peers: [],
  keystats: null,
  filters: {
    dateFilter: 'ytd',
    priceFilter: 'close'
  },
  companiesDB: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      const { history, news, overview, peers, keystats } = action.companyInfo
      return {
        ...state,
        company: action.company,
        history: history,
        news: news,
        overview: overview,
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
