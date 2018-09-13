import GET_COMPANY from '../constants/actionConstant'

const initialState = {
    symbol: '',
    dateFilter: '',
    typeFilter: ''
  };
  
  const rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_COMPANY:
          return {symbol:action.symbol};
        default:
          return state;
      }
  };
  
  export default rootReducer;