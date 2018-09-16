import { getRefData, getCompanyInfo } from '../api'
import { GET_COMPANIES_DB, GET_COMPANY } from './index'

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
    }
  }
}

export default mapDispatchToProps
