import GET_COMPANY from './constants/actionConstant'


const initialState = {
    company: null,
    companyInfo: {
      news:[],
      charts:null,
      overview:{},
      peers:[],
      keystats:{},

    },
    dateFilter: '',
    typeFilter: ''
  };
  
  const rootReducer = (state = initialState, action) => {{
      switch (action.type) {
        case GET_COMPANY:
      
          return {company:action.company, companyInfo:action.companyInfo};
        default:
          return state;
      }
  }};
  
  export default rootReducer;