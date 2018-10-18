import FetchStatus from 'fetchStatus'
import Label from 'label.styles'
import React from 'react'
import { SearchIcon, SearchInputClass, SearchInputWrapper } from 'search/search.style'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div>
        <SearchInputWrapper>
          <SearchIcon>
            <FontAwesomeIcon icon="search" size="lg" />
          </SearchIcon>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.handleInputChange}
            className={SearchInputClass}
          />
        </SearchInputWrapper>
        {this.props.fetchStatus === FetchStatus.SUCCESS && (
          <SearchResults results={this.state.companies} onClickResult={this.onClickResult} />
        )}
        {this.props.fetchStatus === FetchStatus.INITIAL && (
          <Label small grey>
            ...Loading Suggested companies
          </Label>
        )}
        {this.props.fetchStatus === FetchStatus.FAILED && (
          <Label small grey>
            Cannot search Company: check connection
          </Label>
        )}
      </div>
    )
  }

  private handleInputChange = ({ target: { value } }: { target: { value: string } }) => {
    const suggestedCompanies = (!!value
      ? QuerySymbols(value, this.props.companySymbols)
      : []) as Company[]
    this.setState({ searchValue: value, companies: suggestedCompanies })
  }

  private onClickResult = (company: Company) => {
    const searchValue = `${company.name} (${company.symbol})`
    this.props.getInfo(company)
    this.setState({ searchValue, companies: [] })
  }
}

export default Search
