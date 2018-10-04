import { KeyStats } from './types'

const numberFormat = (num: number) =>
  Number.isInteger(num)
    ? num.toLocaleString()
    : num.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })

export const StatsMap = (keystats: KeyStats) => ({
  'Previous Close': numberFormat(keystats.previousClose),
  'Day Range': `${numberFormat(keystats.dayLow)} - ${numberFormat(keystats.dayHigh)}`,
  Volume: numberFormat(keystats.volume),
  'Market Cap': numberFormat(keystats.marketCap),
  'P/E Ratio': numberFormat(keystats.peRatio),
  Open: numberFormat(keystats.open),
  '52 Week Range': `${numberFormat(keystats.week52Low)} - ${numberFormat(keystats.week52High)}`,
  'Total Avg. Volume': numberFormat(keystats.avgTotalVolume),
  'Earnings Per Share': numberFormat(keystats.earningsPerShare),
  'Dividend & Yield': `${numberFormat(keystats.dividendYield)}%`
})
