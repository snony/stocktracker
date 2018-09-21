const host = 'https://api.iextrading.com/1.0/'

const fetchAndUnpack = url => fetch(url).then(data => data.json())

export const getHistory = (symbol, dateFilter = 'ytd', priceFilter = 'close') => {
  const url = `${host}stock/${symbol}/chart/${dateFilter}?filter=date,${priceFilter}`
  return fetchAndUnpack(url)
}
export const getRefData = () => {
  const url = `${host}ref-data/symbols?filter=name,symbol`
  return fetchAndUnpack(url)
}

export const getNews = symbol => {
  const url = `${host}stock/${symbol}/news/last/5`
  return fetchAndUnpack(url)
}

export const getOverview = symbol => {
  const url = `${host}stock/${symbol}/company`
  return fetchAndUnpack(url)
}

export const getPeers = symbol => {
  const url = `${host}stock/${symbol}/peers`
  return fetchAndUnpack(url)
}

export const getStats = symbol => {
  const url = `${host}stock/${symbol}/stats`
  return fetchAndUnpack(url)
}

export const getPrevious = symbol => {
  const url = `${host}stock/${symbol}/previous`
  return fetchAndUnpack(url)
}
export const getOhlc = symbol => {
  const url = `${host}stock/${symbol}/ohlc`
  return fetchAndUnpack(url)
}
export const getQuote = symbol => {
  const url = `${host}stock/${symbol}/quote`
  return fetchAndUnpack(url)
}

const keyStatsServices = [getStats, getPrevious, getOhlc, getQuote]

const extractData = ([stats, previous, ohlc, quote]) => ({
  earningsPerShare: stats.latestEPS,
  dividendYield: stats.dividendYield,
  previousClose: previous.close,
  open: ohlc.open.price,
  close: ohlc.close.price,
  dayHigh: ohlc.high,
  dayLow: ohlc.low,
  volume: quote.latestVolume,
  avgTotalVolume: quote.avgTotalVolume,
  peRatio: quote.peRatio,
  marketCap: quote.marketCap,
  week52High: quote.week52High,
  week52Low: quote.week52Low
})

export const getKeyStats = symbol => {
  return Promise.all(keyStatsServices.map(service => service(symbol))).then(extractData)
}

const companyInfoServices = [getHistory, getPeers]
const extractCompanyInfo = ([history, peers]) => ({
  history,
  peers
})

export const getCompanyInfo = symbol => {
  return Promise.all(companyInfoServices.map(service => service(symbol))).then(extractCompanyInfo)
}

export default {
  getRefData,
  getNews,
  getOverview,
  getKeyStats,
  getCompanyInfo
}
