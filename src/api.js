const host = 'https://api.iextrading.com/1.0/';

const fetchAndUnpack = url => fetch(url).then(data => data.json())

export const getChart = (symbol, dateFilter, priceFilter) => {
    const url = `${host}stock/${symbol}/chart/${dateFilter}?filter=date,${priceFilter}`;
    return fetchAndUnpack(url)
}

export const getNews = symbol => {
    const url = `${host}stock/${symbol}/news/last/5`;
    return fetchAndUnpack(url)
}

export const getOverview = symbol => {
    const url = `${host}stock/${symbol}/company`;
    return fetchAndUnpack(url)
}

export const getPeers = symbol => {
    const url = `${host}stock/${symbol}/peers`;
    return fetchAndUnpack(url)
}

export const getStats = symbol => {
    const url = `${host}stock/${symbol}/stats`;
    return fetchAndUnpack(url)
}

export const getPrevious = symbol => {
    const url = `${host}stock/${symbol}/previous`;
    return fetchAndUnpack(url)
}
export const getOhlc = symbol => {
    const url = `${host}stock/${symbol}/ohlc`;
    return fetchAndUnpack(url)
}
export const getQuote = symbol => {
    const url = `${host}stock/${symbol}/quote`;
    return fetchAndUnpack(url)
}


export const getRefData = () =>{
  const url ='https://api.iextrading.com/1.0/ref-data/symbols?filter=name,symbol' ;
  return fetch(url)
  .then(data => { return data.json() })
  .then(res => { return res })
}

const keyStatsServices = [getStats, getPrevious, getOhlc, getQuote]


const extractData = ([stats, previous, ohlc, quote]) => ({
    earningsPerShare: stats.latestEPS,
    dividendYield: stats.dividendYield,
    previousClose: previous.close,
    open: ohlc.open.price,
    close: ohlc.close.price,
    dayRange: ohlc.high - ohlc.low,
    volume: quote.latestVolume,
    avgTotalVolume: quote.avgTotalVolume,
    peRatio: quote.peRatio,
    marketCap: quote.marketCap,
    weekRange52: quote.week52High - quote.week52Low,
})

export const getKeyStats = symbol => {
    return Promise
        .all(keyStatsServices.map(service => service(symbol)))
        .then(extractData)
}
