import React from 'react'

import {
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { dateFilters, priceFilters, filterType } from './historyConst'

class FilterButton extends React.Component {
  onClick = () => {
    const { onClick, type, value } = this.props
    onClick(type, value)
  }

  render() {
    const { value, selected } = this.props
    const label = value.toUpperCase()
    const buttonClass = `filter-button ${selected ? 'filter-button--selected' : ''}`

    return (
      <button className={buttonClass} key={value} onClick={this.onClick}>
        {label}
      </button>
    )
  }
}

class History extends React.Component {
  getHistoryData = (type, value) => {
    const { symbol } = this.props.company

    if (type === filterType.DATE) {
      this.props.onClickFilterHistoryByDate(symbol, value)
    } else {
      this.props.onClickFilterHistoryByPrice(symbol, value)
    }
  }

  renderPriceFilterButton = () =>
    priceFilters.map(filter => (
      <FilterButton
        key={filter}
        type={filterType.PRICE}
        value={filter}
        selected={this.props.priceFilter === filter ? true : false}
        onClick={this.getHistoryData}
      />
    ))

  renderDateFilterButton = () =>
    dateFilters.map(filter => (
      <FilterButton
        key={filter}
        type={filterType.DATE}
        value={filter}
        selected={this.props.dateFilter === filter ? true : false}
        onClick={this.getHistoryData}
      />
    ))

  render() {
    const { priceFilter, history } = this.props
    const shouldDisplayData = history.length > 0

    return shouldDisplayData ? (
      <div className="history-container">
        <div className="history-container__filters">
          <div className="history-container__filter-group">{this.renderPriceFilterButton()}</div>
          <div className="history-container__filter-group">{this.renderDateFilterButton()}</div>
        </div>
        <div className="history-container__chart">
          <HistoryChart priceFilter={priceFilter} history={history} />
        </div>
      </div>
    ) : null
  }
}

const tickStyle = {
  fill: 'white',
  opacity: 0.5,
  fontSize: 14
}

const HistoryChart = ({ priceFilter, history }) => {
  return (
    <ResponsiveContainer className="chart-container">
      <AreaChart data={history}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7fb3ff" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#7fb3ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#1b3d62" />
        <Area
          type="monotone"
          dot={false}
          dataKey={priceFilter}
          stroke="#beccdc"
          fill="url(#color)"
        />
        <XAxis dataKey="date" stroke="#002d6f" tick={tickStyle} interval="preserveStart" />
        <YAxis dataKey={priceFilter} stroke="#002d6f" tick={tickStyle} orientation="right" />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default History
