const host = 'https://api.iextrading.com/1.0/';

const fetchAndUnpack = url => fetch(url).then(data => data.json())

const getStock = (symbol, dataType) => {
  const url = `${host}stock/${symbol}/${dataType}`;
  return fetchAndUnpack(url)
}

export const getChart = (symbol, dateFilter, typeFilter) => {
  const url = `${host}stock/${symbol}/chart/${dateFilter}?filter=date,${typeFilter}`;
  return fetchAndUnpack(url)
}

export const getNews = (symbol) => {
  const url = `${host}stock/${symbol}/news/last/5`;
  return fetchAndUnpack(url)
}

export const getOverview = (symbol) => {
  const url = `${host}stock/${symbol}/company`;
  return fetchAndUnpack(url)
}

export const getPeers = (symbol) => {
  const url = `${host}stock/${symbol}/peers`;
  return fetchAndUnpack(url)
}

export default getStock;