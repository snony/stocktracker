import React from 'react'
import {
  CartesianGrid,
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { getChart } from './../../api'

const initialState = {
  priceFilter: 'close',
  dateFilter: 'ytd',
  history: []
}

class FilterButton extends React.Component {
  onClick = () => {
    const { onClick, type, value } = this.props
    onClick(type, value)
  }

  render() {
    const { value, selected } = this.props
    const label = value.toUpperCase()
    const buttonClass = `filter-button ${selected ? 'selected' : ''}`

    return (
      <button className={buttonClass} key={value} onClick={this.onClick}>
        {label}
      </button>
    )
  }
}

const priceFilters = ['close', 'open', 'high', 'low']
const dateFilters = ['ytd', '1d', '1m', '6m', '1y', '5y']

class ChartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.getChartData('both', '')
    }
  }

  getChartData = (type, value) => {
    const symbol = this.props.symbol
    const dateFilter =
      type === 'both' ? dateFilters[0] : type === 'date' ? value : this.state.dateFilter
    const priceFilter =
      type === 'both' ? priceFilters[0] : type === 'price' ? value : this.state.priceFilter

    getChart(symbol, dateFilter, priceFilter).then(chartData => {
      this.setState({
        priceFilter: priceFilter,
        dateFilter: dateFilter,
        history: chartData
      })
    })
  }

  renderPriceFilterButton = () =>
    priceFilters.map(filter => (
      <FilterButton
        key={filter}
        type="price"
        value={filter}
        selected={this.state.priceFilter === filter ? true : false}
        onClick={this.getChartData}
      />
    ))

  renderDateFilterButton = () =>
    dateFilters.map(filter => (
      <FilterButton
        key={filter}
        type="date"
        value={filter}
        selected={this.state.dateFilter === filter ? true : false}
        onClick={this.getChartData}
      />
    ))

  render() {
    const state = this.state
    const shouldDisplayData = state.history.length > 0
    return shouldDisplayData ? (
      <div>
        {this.renderPriceFilterButton()}
        <span className="whitespace" />
        {this.renderDateFilterButton()}
        {<DisplayChart priceFilter={state.priceFilter} history={state.history} />}
      </div>
    ) : null
  }
}

const tickStyle = {
  fill: 'white',
  opacity: 0.5,
  fontSize: 14
}

const DisplayChart = ({ priceFilter, history }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart data={history}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7fb3ff" stopOpacity={0.3} />
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

export default ChartContainer
