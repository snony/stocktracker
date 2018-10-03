import React from 'react'

import QuerySymbols from './querySymbols'
import SearchResults from './result'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Company } from '../types'
import './search.css'

interface SearchState {
  readonly searchValue: string
  readonly companies: Company[]
}

interface SearchProps {
  readonly getInfo: (company: Company) => void
  readonly companySymbols: Company[]
}

const initState: { searchValue: string; companies: Company[] } = {
  searchValue: 'Apple Inc. (AAPL)',
  companies: []
}

class Search extends React.PureComponent<SearchProps, SearchState> {
  public readonly state: SearchState = initState

  public render() {
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
        <SearchResults results={this.state.companies} onClickResult={this.onClickResult} />
      </div>
    )
  }

  private handleInputChange = ({ target: { value } }: { target: { value: string } }) => {
    const suggestedCompanies = !!value ? QuerySymbols(value, this.props.companySymbols) : []
    this.setState({ searchValue: value, companies: suggestedCompanies })
  }

  private onClickResult = (company: Company) => {
    const searchValue = `${company.name} (${company.symbol})`
    this.props.getInfo(company)
    this.setState({ searchValue, companies: [] })
  }
}

export default Search