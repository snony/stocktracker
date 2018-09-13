import GET_COMPANY from '../constants/actionConstant';

//const addCompanySymbol = symbol => {type:GET_COMPANY,symbol}

const mapStateToProps = state => {
    return {symbol: state.symbol};
}
export default mapStateToProps;