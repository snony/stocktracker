import React from 'react'
import { getKeyStats } from './../../api'

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
    'Previous Close': stats.previousClose,
    'Day Range': stats.dayRange,
    Volume: stats.volume,
    'Market Cap': stats.marketCap,
    'P/E Ratio': stats.peRatio,
    Open: stats.open,
    '52 Week Range': stats.weekRange52,
    'Total Avg. Volume': stats.avgTotalVolume,
    'Earnings Per Share': stats.earningsPerShare,
    'Dividend & Yield': stats.dividendYield
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
