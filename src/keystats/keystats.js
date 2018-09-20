import React from 'react'

const numberFormat = number =>
  Number.isInteger(number)
    ? number.toLocaleString()
    : number.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })

const StatsLabel = ({ children }) => <span className="label label--small">{children}: </span>

const StatsValue = ({ children }) => <span className="label">{children}</span>

const KeyStats = ({ keystats }) => {
  const StatsMap =
    keystats === null
      ? {}
      : {
          'Previous Close': numberFormat(keystats.previousClose),
          'Day Range': `${numberFormat(keystats.dayLow)} - ${numberFormat(keystats.dayHigh)}`,
          Volume: numberFormat(keystats.volume),
          'Market Cap': numberFormat(keystats.marketCap),
          'P/E Ratio': numberFormat(keystats.peRatio),
          Open: numberFormat(keystats.open),
          '52 Week Range': `${numberFormat(keystats.week52Low)} - ${numberFormat(
            keystats.week52High
          )}`,
          'Total Avg. Volume': numberFormat(keystats.avgTotalVolume),
          'Earnings Per Share': numberFormat(keystats.earningsPerShare),
          'Dividend & Yield': `${numberFormat(keystats.dividendYield)}%`
        }

  return (
    <div className="keystats-container">
      {Object.entries(StatsMap).map(([label, value]) => {
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
