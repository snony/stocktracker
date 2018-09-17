import { GET_COMPANY, GET_COMPANIES_DB, GET_CHART_BY_FILTER } from './index'

const initialState = {
  company: null,
  companyInfo: {
    charts: [],
    news: [],
    overview: {},
    peers: [],
    keystats: {}
  },
  filters:{
    dateFilter: 'ytd',
    priceFilter: 'close',
  },
  companiesDB: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {...state, company: action.company, companyInfo: action.companyInfo }
    case GET_COMPANIES_DB:
      return {...state, companiesDB: action.companiesDB }
    case GET_CHART_BY_FILTER:
      return {...state, companyInfo:{...state.companyInfo, charts:action.charts}, filters:action.filters}
    default:
      return state
  }
}

export default rootReducer