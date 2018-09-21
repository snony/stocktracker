import React from 'react'

import SearchResults from './result'
import QueryDB from './queryDB'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './search.css'

class Search extends React.Component {
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
    this.props.getInfo(company)
    this.setState({ value: searchValue, suggestedCompanies: [] })
  }

  render() {
    const suggestedCompanies = this.state.suggestedCompanies
    const searchValue = this.state.value
    return (
      <div className="search-container">
        <div className="search-container__input-wrapper">
          <span className="search-container__icon">
            <FontAwesomeIcon icon="search" size="lg" />
          </span>
          <input
            type="text"
            className="search-container__input"
            value={searchValue}
            onChange={this.handleInputChange}
          />
        </div>
        <SearchResults results={suggestedCompanies} onClickResult={this.onClickResult} />
      </div>
    )
  }
}

export default Search
