import { connect } from 'react-redux'

import { getCompanyInfo } from '../api'
import { GET_COMPANY } from '../redux'

import Search from './search'

const mapStateToProps = state => ({
  companiesDB: state.companiesDB
})

const mapDispatchToProps = dispatch => ({
  getInfo: company => {
    getCompanyInfo(company.symbol).then(companyInfo => {
      return dispatch({ type: GET_COMPANY, company, companyInfo })
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
