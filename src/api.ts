import { HistoryData } from 'historyData/types'

const host = 'https://api.iextrading.com/1.0'

export const fetchAndUnpack = async <T>(url: string): Promise<T> => {
  try {
    const data = await fetch(url)
    return await data.json()
  } catch {
    return Promise.reject('Error fetching data')
  }
}

export const getCompanySymbols = async () => {
  const url = `${host}/ref-data/symbols?filter=name,symbol`
  return await fetchAndUnpack(url)
}

export interface RawHistoryData {
  date: string
  minute?: string
  close?: number
  open?: number
  high?: number
  low?: number
  [key: string]: string | number
}

export const formatHistoryData = (history: RawHistoryData[]): HistoryData[] => {
  const dateType = history[0].minute ? 'minute' : 'date'
  const priceType = Object.keys(history[0])[0]
  return history.map(entry => ({ date: entry[dateType], price: Number(entry[priceType]) }))
}

export const getHistory = async (
  symbol: string,
  dateFilter: string = 'ytd',
  priceFilter: string = 'close'
) => {
  const url = `${host}/stock/${symbol}/chart/${dateFilter}?filter=${priceFilter},date,minute`
  const history = await fetchAndUnpack<HistoryData[]>(url)
  return formatHistoryData(history)
}

export const getNews = async (symbol: string) => {
  const url = `${host}/stock/${symbol}/news/last/5`
  return await fetchAndUnpack(url)
}

export const getOverview = async (symbol: string) => {
  const url = `${host}/stock/${symbol}/company`
  return await fetchAndUnpack(url)
}

export const getPeers = async (symbol: string) => {
  const url = `${host}/stock/${symbol}/peers`
  return await fetchAndUnpack(url)
}

interface StockData {
  [key: string]: number
}

interface KeyStatsData {
  quote: StockData
  stats: StockData
}

export const extractKeyStatsData = ({ quote, stats }: KeyStatsData) => ({
  earningsPerShare: stats.latestEPS,
  dividendYield: stats.dividendYield,
  previousClose: quote.previousClose,
  open: quote.open,
  dayHigh: quote.high,
  dayLow: quote.low,
  volume: quote.latestVolume,
  avgTotalVolume: quote.avgTotalVolume,
  peRatio: quote.peRatio,
  marketCap: quote.marketCap,
  week52High: quote.week52High,
  week52Low: quote.week52Low
})

export const getKeyStats = async (symbol: string) => {
  const url = `${host}/stock/${symbol}/batch?types=quote,stats`
  const keystats = await fetchAndUnpack<KeyStatsData>(url)
  return extractKeyStatsData(keystats)
}

export default {
  getCompanySymbols,
  getHistory,
  getNews,
  getKeyStats,
  getOverview,
  getPeers
}
