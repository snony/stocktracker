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

const StatsLabel = ({ children }) => <span className="stats-label">{children}: </span>

const StatsValue = ({ children }) => <span className="stats-value">{children}</span>

const Stats = ({ stats }) => (
  <div>
    <StatsLabel>Previous Close</StatsLabel>
    <StatsValue>{stats.previousClose}</StatsValue>
    <br />
    <StatsLabel>Day Range</StatsLabel>
    <StatsValue>{stats.dayRange}</StatsValue>
    <br />
    <StatsLabel>Volume</StatsLabel>
    <StatsValue>{stats.volume}</StatsValue>
    <br />
    <StatsLabel>Market Cap</StatsLabel>
    <StatsValue>{stats.marketCap}</StatsValue>
    <br />
    <StatsLabel>P/E Ratio</StatsLabel>
    <StatsValue>{stats.peRatio}</StatsValue>
    <br />
    <StatsLabel>Open</StatsLabel>
    <StatsValue>{stats.open}</StatsValue>
    <br />
    <StatsLabel>52 Week Range</StatsLabel>
    <StatsValue>{stats.weekRange52}</StatsValue>
    <br />
    <StatsLabel>Total Avg. Volume</StatsLabel>
    <StatsValue>{stats.avgTotalVolume}</StatsValue>
    <br />
    <StatsLabel>Earnings Per Share</StatsLabel>
    <StatsValue>{stats.earningsPerShare}</StatsValue>
    <br />
    <StatsLabel>Dividend & Yield</StatsLabel>
    <StatsValue>{stats.dividendYield}</StatsValue>
    <br />
  </div>
)

export default StatsContainer
