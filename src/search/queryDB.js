import Fuse from 'fuse.js'

const options = {
  threshold: 0.6,
  location: 0,
  distance: 10,
  keys: ['symbol', 'name']
}

const QueryDB = (queryString, db) => {
  if (queryString === '') {
    return []
  }
  const fuse = new Fuse(db, options)
  const companyByNameOrSymbol = fuse.search(queryString)
  return companyByNameOrSymbol.length > 10
    ? companyByNameOrSymbol.slice(0, 10)
    : companyByNameOrSymbol
}

export default QueryDB
