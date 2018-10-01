import * as React from 'react';
import './search.css'
import {Company, ClickResult} from './types'


interface SearchResultProps{
  readonly results: Company[];
  readonly onClickResult: ClickResult ;
}

interface ResultProps{
  readonly company:Company;
  readonly onClickResult: ClickResult ;
}

const Result: React.SFC<ResultProps> = ({company,onClickResult}) => {
  const click = () => onClickResult(company)

  return (
    <li onClick={click} className="search-container__result">
      {company.name} ({company.symbol})
    </li>
  )
}


class SearchResults extends React.PureComponent<SearchResultProps> {
  render() {
    const { results, onClickResult } = this.props
    return (
      <ul className="search-container__results-list">
        {results.map(company => (
          <Result key={company.symbol} company={company} onClickResult={onClickResult} />
        ))}
      </ul>
    )
  }
}
export default SearchResults