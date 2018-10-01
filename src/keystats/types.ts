import { extractData } from '../api'

export type KeyStats = ReturnType<typeof extractData> 

// export interface KeyStatsProps {
//   earningsPerShare: number,
//   dividendYield: number,
//   previousClose: number,
//   open: number,
//   close: number,
//   dayHigh: number,
//   dayLow: number,
//   volume: number,
//   avgTotalVolume: number,
//   peRatio: number,
//   marketCap: number,
//   week52High: number,
//   week52Low: number
// } 