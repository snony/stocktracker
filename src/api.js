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

const keyStatsFuncs = [getStats, getPrevious, getOhlc, getQuote]

export const getKeyStats = symbol => {
    return Promise
        .all(keyStatsFuncs.map(func => func(symbol)))
        .then(keyStats => {
            return {
                earningsPerShare: keyStats[0].latestEPS,
                dividendYield: keyStats[0].dividendYield,
                previousClose: keyStats[1].close,
                open: keyStats[2].open.price,
                close: keyStats[2].close.price,
                dayRange: keyStats[2].high - keyStats[2].low,
                volume: keyStats[3].latestVolume,
                avgTotalVolume: keyStats[3].avgTotalVolume,
                peRatio: keyStats[3].peRatio,
                marketCap: keyStats[3].marketCap,
                weekRange52: keyStats[3].week52High - keyStats[3].week52Low,
            }
        })
}