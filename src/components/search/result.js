import React from 'react'

const Result = ({ company, onClickResult }) => {
  const click = () => onClickResult(company)

  return (
    <li onClick={click}>
      {company.name} {company.symbol}
    </li>
  )
}

class SearchResults extends React.Component {
  render() {
    const { results, onClickResult } = this.props
    return (
      <ul>
        {results.map(company => (
          <Result key={company.symbol} company={company} onClickResult={onClickResult} />
        ))}
      </ul>
    )
  }
}

export default SearchResults
