import { GET_COMPANY, GET_COMPANIES_DB } from './index'

const initialState = {
  company: null,
  companyInfo: {
    charts: [],
    news: [],
    overview: {},
    peers: [],
    keystats: {}
  },
  dateFilter: '',
  typeFilter: '',
  companiesDB: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return { ...state, company: action.company, companyInfo: action.companyInfo }
    case GET_COMPANIES_DB:
      return { ...state, companiesDB: action.companiesDB }
    default:
      return state
  }
}

export default rootReducer
// export default function rootReducer(state = initialState, action){
//   switch (action.type) {
//     case GET_COMPANY:
//       return {...state,company:action.company, companyInfo:action.companyInfo};
//     case GET_COMPANIES_DB:
//       return {...state, companiesDB:action.companiesDB};
//     default:
//       return state;
//   }
// }
