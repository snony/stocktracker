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
