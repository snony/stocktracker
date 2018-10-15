import { getCompanySymbols } from '__mock__/companySymbols.mock'
import QuerySymbols from 'search/querySymbols'

describe('QuerySymbols', () => {
  it('should return companies matching the search string', () => {
    const companies = getCompanySymbols(3)
    const searchString = getCompanySymbols(2)

    expect(QuerySymbols('aapl', companies)).toEqual(searchString)
  })
})
