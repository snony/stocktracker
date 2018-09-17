import React from 'react'

import './search.css'

const Result = ({ company, onSelect }) => {
  const click = () => onSelect(company)

  return (
    <li className="search-container__result" onClick={click}>
      {company.name} ({company.symbol})
    </li>
  )
}

class SearchResults extends React.Component {
  render() {
    const { results, onSelect } = this.props
    return (
      <ul className="search-container__results-list">
        {results.map(company => (
          <Result key={company.symbol} company={company} onSelect={onSelect} />
        ))}
      </ul>
    )
  }
}

export default SearchResults
