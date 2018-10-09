import { KeyStats } from './types'

export const numberFormat = (num: number) => (
  Number.isInteger(num)
    ? num.toLocaleString()
    : num.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })
)

interface ResultsObj {
  [key: string]: string
}

export const numberConvertor = (keystats: KeyStats) => {
  const result: ResultsObj = {}
  const keys = Object.keys(keystats)
  Object.values(keystats).map((key, i: number) => {
    result[keys[i]] = numberFormat(key)
  })

  return result
} 

export const statsMap = (keystats: ResultsObj) => ({
  'Previous Close': keystats.previousClose,
  'Day Range': `${keystats.dayLow} - ${keystats.dayHigh}`,
  'Volume': keystats.volume,
  'Market Cap': keystats.marketCap,
  'P/E Ratio': keystats.peRatio,
  'Open': keystats.open,
  '52 Week Range': `${keystats.week52Low} - ${keystats.week52High}`,
  'Total Avg. Volume': keystats.avgTotalVolume,
  'Earnings Per Share': keystats.earningsPerShare,
  'Dividend & Yield': `${keystats.dividendYield}%`
})
