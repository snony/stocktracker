import React from 'react'

const Result = ({ company, onSelect }) => {
  const click = () => onSelect(company)

  return (
    <li className="result-list" onClick={click}>
      {company.name} ({company.symbol})
    </li>
  )
}

class SearchResults extends React.Component {
  render() {
    const { results, onSelect } = this.props
    return (
      <ul>
        {results.map(company => (
          <Result key={company.symbol} company={company} onSelect={onSelect} />
        ))}
      </ul>
    )
  }
}

export default SearchResults
