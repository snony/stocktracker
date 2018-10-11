import { Company } from '../types'

const companySymbols: Company[] = [
  { name: 'Apple Inc', symbol: 'aapl' },
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
  { name: 'Apple Inc', symbol: 'aapl' },
  { name: 'Apple Inc', symbol: 'aapl' }
]

export const getCompanySymbols = (amount: number = 5) => companySymbols.slice(0, amount)
