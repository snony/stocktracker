import { CompanySymbolState } from 'bootstrapReducer'
import FetchStatus from 'fetchStatus'
import { Company } from 'types'

export const companySymbolsMock: Company[] = [
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Alphabet Inc', symbol: 'googl' },
  { name: 'Facebook Inc', symbol: 'fb' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' }
]
export const getCompanySymbols = (amount: number = 5) => companySymbolsMock.slice(0, amount)

export const mockCompanySymbols: CompanySymbolState = {
  companySymbols: getCompanySymbols(5),
  fetchStatus: FetchStatus.SUCCESS
}

