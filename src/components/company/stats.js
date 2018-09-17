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

const StatsLabel = ({ children }) => <span className="label label--blue">{children}: </span>

const StatsValue = ({ children }) => <span className="label label--newline">{children}</span>

const Stats = ({ stats }) => (
  <div>
    <StatsLabel>Previous Close</StatsLabel>
    <StatsValue>{stats.previousClose}</StatsValue>
    <StatsLabel>Day Range</StatsLabel>
    <StatsValue>{stats.dayRange}</StatsValue>
    <StatsLabel>Volume</StatsLabel>
    <StatsValue>{stats.volume}</StatsValue>
    <StatsLabel>Market Cap</StatsLabel>
    <StatsValue>{stats.marketCap}</StatsValue>
    <StatsLabel>P/E Ratio</StatsLabel>
    <StatsValue>{stats.peRatio}</StatsValue>
    <StatsLabel>Open</StatsLabel>
    <StatsValue>{stats.open}</StatsValue>
    <StatsLabel>52 Week Range</StatsLabel>
    <StatsValue>{stats.weekRange52}</StatsValue>
    <StatsLabel>Total Avg. Volume</StatsLabel>
    <StatsValue>{stats.avgTotalVolume}</StatsValue>
    <StatsLabel>Earnings Per Share</StatsLabel>
    <StatsValue>{stats.earningsPerShare}</StatsValue>
    <StatsLabel>Dividend & Yield</StatsLabel>
    <StatsValue>{stats.dividendYield}</StatsValue>
  </div>
)

export default StatsContainer
