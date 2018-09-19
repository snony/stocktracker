import React from 'react'
import { getKeyStats } from './../../api'

const numberFormat = number =>
  Number.isInteger(number)
    ? number.toLocaleString()
    : number.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })

class StatsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyStats: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.getStatsData()
    }
  }

  getStatsData = () => {
    const symbol = this.props.symbol
    getKeyStats(symbol).then(keyStats => this.setState({ keyStats: keyStats }))
  }

  render() {
    const { keyStats } = this.state
    return keyStats === null ? null : <Stats stats={keyStats} />
  }
}

const StatsLabel = ({ children }) => <span className="label label--grey">{children}: </span>

const StatsValue = ({ children }) => <span className="label label--newline">{children}</span>

const Stats = ({ stats }) => {
  const StatsMap = {
    'Previous Close': numberFormat(stats.previousClose),
    'Day Range': `${numberFormat(stats.dayLow)} - ${numberFormat(stats.dayHigh)}`,
    Volume: numberFormat(stats.volume),
    'Market Cap': numberFormat(stats.marketCap),
    'P/E Ratio': numberFormat(stats.peRatio),
    Open: numberFormat(stats.open),
    '52 Week Range': `${numberFormat(stats.week52Low)} - ${numberFormat(stats.week52High)}`,
    'Total Avg. Volume': numberFormat(stats.avgTotalVolume),
    'Earnings Per Share': numberFormat(stats.earningsPerShare),
    'Dividend & Yield': `${numberFormat(stats.dividendYield)}%`
  }

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

export default StatsContainer
