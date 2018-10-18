import * as React from 'react'
import { Li, Ul } from 'search/result.style'
import { Company } from 'types'

type CompanyOnSelect = (company: Company) => void
export interface SearchResultProps {
  readonly results: Company[]
  readonly onClickResult: CompanyOnSelect
}

export interface ResultProps {
  readonly company: Company
  readonly onClickResult: CompanyOnSelect
}

export const Result: React.SFC<ResultProps> = ({ company, onClickResult }) => {
  const click = () => onClickResult(company)

  return (
    <Li onClick={click}>
      {company.name} ({company.symbol})
    </Li>
  )
}

class SearchResults extends React.PureComponent<SearchResultProps> {
  public render() {
    return (
      <Ul>
        {this.props.results.map(company => (
          <Result key={company.symbol} company={company} onClickResult={this.props.onClickResult} />
        ))}
      </Ul>
    )
  }
}
export default SearchResults
