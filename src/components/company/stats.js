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

const StatsLabelText = ({ children }) => <span className="label label--blue">{children}: </span>

const StatsValueText = ({ children }) => <span className="label label--newline">{children}</span>

const Stats = ({ stats }) => {
  const StatsLabel = [
    'Previous Close',
    'Day Range',
    'Volume',
    'Market Cap',
    'P/E Ratio',
    'Open',
    '52 Week Range',
    'Total Avg. Volume',
    'Earnings Per Share',
    'Dividend & Yield'
  ]

  const StatsValue = [
    stats.previousClose,
    stats.dayRange,
    stats.volume,
    stats.marketCap,
    stats.peRatio,
    stats.open,
    stats.weekRange52,
    stats.avgTotalVolume,
    stats.earningsPerShare,
    stats.dividendYield
  ]

  return (
    <div>
      {StatsLabel.map((label, index) => {
        return (
          <div key={label}>
            <StatsLabelText>{label}</StatsLabelText>
            <StatsValueText>{StatsValue[index]}</StatsValueText>
          </div>
        )
      })}
    </div>
  )
}

export default StatsContainer
