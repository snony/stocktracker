import { getRefData, getCompanyInfo, getChart } from '../api'
import { GET_COMPANIES_DB, GET_COMPANY, GET_CHART_BY_FILTER } from './index'


const mapDispatchToProps = dispatch => {
  return {
    getCompanies: () => {
      getRefData().then(companiesDB => {
        return dispatch({ type: GET_COMPANIES_DB, companiesDB })
      })
    },
    onClick: company => {
      getCompanyInfo(company.symbol).then(companyInfo => {
        return dispatch({ type: GET_COMPANY, company, companyInfo })
      })
    },
    onClickFilterChart : (symbol, dateFilter, priceFilter)=>{
      getChart(symbol,dateFilter, priceFilter).then(chartData => {
        return dispatch({
          type: GET_CHART_BY_FILTER,
          filters:{
            dateFilter,
            priceFilter
          },
          charts: chartData
        });
      })
    },  
  }
}

export default mapDispatchToProps
