import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/index'
import SearchResults from './result'
import QueryDB from './queryDB'

class InputSearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestedCompanies: []
    }
  }

  handleInputChange = ({ target: { value } }) => {
    const suggestedCompanies = !!value ? QueryDB(value, this.props.companiesDB) : []
    this.setState({ value, suggestedCompanies })
  }

  onClickResult = company => {
    const searchValue = company.name + ' ' + company.symbol
    this.props.onClick(company)
    this.setState({ value: searchValue, suggestedCompanies: [] })
  }

  render() {
    const suggestedCompanies = this.state.suggestedCompanies
    const searchValue = this.state.value
    return (
      <div>
        <input type="text" value={searchValue} onChange={this.handleInputChange} />
        <br />
        <SearchResults results={suggestedCompanies} onClickResult={this.onClickResult} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSearchContainer)
