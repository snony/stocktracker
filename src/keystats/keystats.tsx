import React from 'react'

import { KeyStatsContainerStateProps } from './keystatsContainer'
import { StatsLabel, StatsValue } from './keystatsLabel'
import { KeyStats } from './types'

const numberFormat = (num: number) => (
  Number.isInteger(num)
    ? num.toLocaleString()
    : num.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })
)

const KeyStats: React.SFC<KeyStatsContainerStateProps> = ({ keystats }) => {
  const StatsMap = (keystat: KeyStats) => ({
      'Previous Close': numberFormat(keystat.previousClose),
      'Day Range': `${numberFormat(keystat.dayLow)} - ${numberFormat(keystat.dayHigh)}`,
      'Volume': numberFormat(keystat.volume),
      'Market Cap': numberFormat(keystat.marketCap),
      'P/E Ratio': numberFormat(keystat.peRatio),
      'Open': numberFormat(keystat.open),
      '52 Week Range': `${numberFormat(keystat.week52Low)} - ${numberFormat(keystat.week52High)}`,
      'Total Avg. Volume': numberFormat(keystat.avgTotalVolume),
      'Earnings Per Share': numberFormat(keystat.earningsPerShare),
      'Dividend & Yield': `${numberFormat(keystat.dividendYield)}%`
  })

  return (
    <div className="keystats-container">
        {Object.entries(StatsMap(keystats)).map(([label, value]) => {
          return (
            <div className="keystats-container__stat" key={label}>
              <StatsLabel>{label}</StatsLabel>
              <StatsValue>{value}</StatsValue>
            </div>
          )
        })}
    </div>
  )
}
export default KeyStats
