import * as React from 'react'

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import FilterButton from './filterButton'
import { dateFilters, filterType, priceFilters } from './historyConst'

interface HistoryProps {
  readonly company: string
  readonly history: object[]
  readonly priceFilter: string
  readonly dateFilter: string
  onClickFilterHistoryByDate(symbol: string, value: string): void
  onClickFilterHistoryByPrice(symbol: string, value: string): void
}

class History extends React.PureComponent<HistoryProps> {
  public render(): React.ReactNode {
    const { priceFilter, history }: { priceFilter: string; history: object[] } = this.props
    const shouldDisplayData: boolean = history.length > 0

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

  private readonly getHistoryData = (type: string, value: string): void => {
    const symbol: string = this.props.company

    if (type === filterType.DATE) {
      this.props.onClickFilterHistoryByDate(symbol, value)
    } else {
      this.props.onClickFilterHistoryByPrice(symbol, value)
    }
  }

  private readonly renderPriceFilterButton = () =>
    priceFilters.map(filter => (
      <FilterButton
        key={filter}
        type={filterType.PRICE}
        value={filter}
        selected={this.props.priceFilter === filter ? true : false}
        onClick={this.getHistoryData}
      />
    ))

  private readonly renderDateFilterButton = () =>
    dateFilters.map(filter => (
      <FilterButton
        key={filter}
        type={filterType.DATE}
        value={filter}
        selected={this.props.dateFilter === filter ? true : false}
        onClick={this.getHistoryData}
      />
    ))
}

const tickStyle = {
  fill: 'white',
  opacity: 0.5,
  fontSize: 14
}

interface HistoryChartProps {
  readonly priceFilter: string
  readonly history: object[]
}

const HistoryChart: React.SFC<HistoryChartProps> = ({ priceFilter, history }) => {
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
