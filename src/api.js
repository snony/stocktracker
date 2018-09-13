const host = 'https://api.iextrading.com/1.0/';

const fetchAndUnpack = url => fetch(url).then(data => data.json())

export const getStock = (symbol, dataType) => {
    const url = `${host}stock/${symbol}/${dataType}`;
    return fetchAndUnpack(url)
}

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

export const getKeyStats = symbol => {
    const statsUrl = `${host}stock/${symbol}/stats`;
    const previousUrl = `${host}stock/${symbol}/previous`;
    const ohlcUrl = `${host}stock/${symbol}/ohlc`;
    const quoteUrl = `${host}stock/${symbol}/quote`;

    let keyStats = {}

    return fetchAndUnpack(statsUrl)
        .then(stats => {
            keyStats = {
                ...keyStats,
                earningsPerShare: stats.latestEPS,
                dividendYield: stats.dividendYield,
            }
            return fetchAndUnpack(previousUrl)
        })
        .then(previous => {
            keyStats = {
                ...keyStats,
                previousClose: previous.close,
            }
            return fetchAndUnpack(ohlcUrl)
        })
        .then(ohlc => {
            keyStats = {
                ...keyStats,
                open: ohlc.open.price,
                close: ohlc.close.price,
                dayRange: ohlc.high - ohlc.low,
            }
            return fetchAndUnpack(quoteUrl)
        })
        .then(quote => {
            keyStats = {
                ...keyStats,
                volume: quote.latestVolume,
                avgTotalVolume: quote.avgTotalVolume,
                peRatio: quote.peRatio,
                marketCap: quote.marketCap,
                weekRange52: quote.week52High - quote.week52Low,
            }
            return fetchAndUnpack(previousUrl)
        })
        .then(() => {
            return keyStats
        });
}


export const getRefData = () =>{
  const url ='https://api.iextrading.com/1.0/ref-data/symbols?filter=name,symbol' ;
  return fetch(url)
  .then(data => { return data.json() })
  .then(res => { return res })
}
export default getStock;
