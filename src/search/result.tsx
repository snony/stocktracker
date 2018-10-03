import * as React from 'react'
import { Company } from '../types'
import './search.css'

type CompanyOnSelect = (company: Company) => void
interface SearchResultProps {
  readonly results: Company[]
  readonly onClickResult: CompanyOnSelect
}

interface ResultProps {
  readonly company: Company
  readonly onClickResult: CompanyOnSelect
}

const Result: React.SFC<ResultProps> = ({ company, onClickResult }) => {
  const click = () => onClickResult(company)

  return (
    <li onClick={click} className="search-container__result">
      {company.name} ({company.symbol})
    </li>
  )
}

class SearchResults extends React.PureComponent<SearchResultProps> {
  public render() {
    return (
      <ul className="search-container__results-list">
        {this.props.results.map(company => (
          <Result key={company.symbol} company={company} onClickResult={this.props.onClickResult} />
        ))}
      </ul>
    )
  }
}
export default SearchResults
