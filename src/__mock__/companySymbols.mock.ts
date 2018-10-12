import { Company } from '../types'

export const listOfCompanySymbols: Company[] = [
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

export const getCompanySymbols = (amount: number = 5) => listOfCompanySymbols.slice(0, amount)
