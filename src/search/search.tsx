import React from 'react'

import SearchResults from './result'
import QuerySymbols from './querySymbols'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './search.css'
import { Company, SearchProps, SearchState } from './types';



const defaultValue = 'Apple Inc. (AAPL)'
const suggestedCompanies: Company[] = []
const initState = {searchValue:defaultValue, suggestedCompanies}

class Search extends React.PureComponent<SearchProps, SearchState> {
  readonly state : SearchState = initState
  
  private handleInputChange = ({ target: { value } }:{target:{value:string}}) => {
    const suggestedCompanies = !!value ? QuerySymbols(value, this.props.companySymbols) : []
    this.setState({ searchValue:value, suggestedCompanies })
  }

  private onClickResult = (company:Company) => {
    const searchValue = `${company.name} (${company.symbol})`
    this.props.getInfo(company)
    this.setState({ searchValue, suggestedCompanies: [] })
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-container__input-wrapper">
          <span className="search-container__icon">
            <FontAwesomeIcon icon="search" size="lg" />
          </span>
          <input
            type="text"
            className="search-container__input"
            value={this.state.searchValue}
            onChange={this.handleInputChange}
          />
        </div>
        <SearchResults results={this.state.suggestedCompanies} onClickResult={this.onClickResult} />
      </div>
    )
  }
}

export default Search
