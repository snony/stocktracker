import { getRefData, getCompanyInfo, getHistory } from '../api'
import { GET_COMPANIES_DB, GET_COMPANY, GET_HISTORY_BY_FILTER } from './index'

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
    onClickFilterHistory: (symbol, dateFilter, priceFilter) => {
      getHistory(symbol, dateFilter, priceFilter).then(historyData => {
        console.log(historyData)
        return dispatch({
          type: GET_HISTORY_BY_FILTER,
          filters: {
            dateFilter,
            priceFilter
          },
          history: historyData
        })
      })
    }
  }
}

export default mapDispatchToProps
