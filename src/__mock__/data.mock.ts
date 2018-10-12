import { KeyStats } from "keystats/types";
import { listOfCompanySymbols } from "./companySymbols.mock";

export const mockFetchData = { data: { company: 'Apple Inc.', symbol: 'AAPL' } }

export const keyStatsInput = {
  quote: {
    previousClose: 3,
    open: 4,
    high: 5,
    low: 6,
    latestVolume: 7,
    avgTotalVolume: 8,
    peRatio: 9,
    marketCap: 10,
    week52High: 11,
    week52Low: 12
  },
  stats: {
    latestEPS: 1,
    dividendYield: 2
  }
}

export const historyInput = [
  {
    open: 135,
    date: '14/09/2018'
  },
  {
    open: 140,
    date: '15/09/2018'
  },
  {
    open: 145,
    date: '16/09/2018'
  }
]

export const historyInput1D = [
  {
    open: 135,
    date: '14/09/2018',
    minute: '13:00'
  },
  {
    open: 136,
    date: '14/09/2018',
    minute: '13:05'
  },
  {
    open: 137,
    date: '14/09/2018',
    minute: '13:10'
  }
]

export const mockKeyStats: KeyStats = {
  previousClose: 10,
  dayHigh: 100,
  dayLow: 10,
  volume: 10000,
  marketCap: 100000000,
  peRatio: 10,
  open: 10,
  week52High: 100,
  week52Low: 10,
  avgTotalVolume: 10000,
  earningsPerShare: 10,
  dividendYield: 10
}

export const mockPeers = ['peers1', 'peers2', 'peers3', 'peers4']

export const mockGlobalState = {
  companySymbols: listOfCompanySymbols,
  company: {} as any,
  history: {} as any,
  news: [] as any,
  keystats: mockKeyStats,
  overview: {} as any,
  peers: mockPeers
}

