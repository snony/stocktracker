import Fuse from 'fuse.js'

import { Company } from '../types'

const options = {
  threshold: 0.6,
  location: 0,
  distance: 10,
  keys: ['symbol', 'name']
}

const QuerySymbols = (queryString: string, db: Company[]) => {
  if (queryString === '') {
    return []
  }
  const fuse = new Fuse(db, options)
  const companyByNameOrSymbol = fuse.search(queryString)
  return companyByNameOrSymbol.length > 10
    ? companyByNameOrSymbol.slice(0, 10)
    : companyByNameOrSymbol
}

export default QuerySymbols
