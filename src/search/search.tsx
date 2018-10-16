import './search.css'

import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FetchStatus from 'fetchStatus'
import QuerySymbols from './querySymbols'
import SearchResults from './result'
import { Company, SearchProps } from './types'
library.add(faSearch)

interface SearchState {
  readonly searchValue: string
  readonly companies: Company[]
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
        {this.props.fetchStatus === FetchStatus.SUCCESS && <SearchResults results={this.state.companies} onClickResult={this.onClickResult} />}
        {this.props.fetchStatus === FetchStatus.INITIAL && <div className="label label--small">...Loading Suggested companies</div>}
        {this.props.fetchStatus === FetchStatus.FAILED && <div className="label label--small">Cannot search Company: check connection</div>}
      </div>
    )
  }

  private handleInputChange = ({ target: { value } }: { target: { value: string } }) => {
    const suggestedCompanies = (!!value ? QuerySymbols(value, this.props.companySymbols) : []) as Company[]
    this.setState({ searchValue: value, companies: suggestedCompanies })
  }

  private onClickResult = (company: Company) => {
    const searchValue = `${company.name} (${company.symbol})`
    this.props.getInfo(company)
    this.setState({ searchValue, companies: [] })
  }
}

export default Search
