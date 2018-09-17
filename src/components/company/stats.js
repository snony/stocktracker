import React from 'react'

const StatsLabel = ({ children }) => <span className="label label--grey">{children}: </span>

const StatsValue = ({ children }) => <span className="label label--newline">{children}</span>

const Stats = ({ keystats }) => {
  const StatsMap =
    keystats === null
      ? {}
      : {
          'Previous Close': keystats.previousClose,
          'Day Range': keystats.dayRange,
          Volume: keystats.volume,
          'Market Cap': keystats.marketCap,
          'P/E Ratio': keystats.peRatio,
          Open: keystats.open,
          '52 Week Range': keystats.weekRange52,
          'Total Avg. Volume': keystats.avgTotalVolume,
          'Earnings Per Share': keystats.earningsPerShare,
          'Dividend & Yield': keystats.dividendYield
        }
  //console.log(keystats);
  return (
    <div>
      {Object.entries(StatsMap).map(([label, value]) => {
        return (
          <div key={label}>
            <StatsLabel>{label}</StatsLabel>
            <StatsValue>{value}</StatsValue>
          </div>
        )
      })}
    </div>
  )
}
export default Stats
