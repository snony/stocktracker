import { Company } from '../../types'
import QuerySymbols from '../querySymbols'

describe('QuerySymbols', () => {
  it('should return companies matching the searchString', () => {
    const companies: Company[] = [
      { name: 'Apple Inc', symbol: 'aapl' },
      { name: 'Alphabet Inc', symbol: 'googl' },
      { name: 'Facebook Inc', symbol: 'fb' }
    ]
    expect(QuerySymbols('aapl', companies)).toEqual([
      { name: 'Apple Inc', symbol: 'aapl' },
      { name: 'Alphabet Inc', symbol: 'googl' }
    ])
  })
})
