import { Company } from '../types'

export const mockCompanySymbols: Company[] = [
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

export const getCompanySymbols = (amount: number = 5) => mockCompanySymbols.slice(0, amount)
