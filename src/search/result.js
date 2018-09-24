import React from 'react'
import './search.css'

const Result = ({ company, onClickResult }) => {
  const click = () => onClickResult(company)

  return (
    <li onClick={click} className="search-container__result">
      {company.name} ({company.symbol})
    </li>
  )
}

class SearchResults extends React.Component {
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
