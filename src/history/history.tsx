import fetchStatus from 'fetchStatus'
import Label from 'label.styles'
import React, { PureComponent } from 'react'
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
import { HistoryChartDiv, HistoryFilterGroupDiv, HistoryFiltersDiv } from './history.styles'
import { dateFilters, filterType, priceFilters } from './historyConst'
import { HistoryContainerProps } from './historyContainer'
import { HistoryChartProps } from './types'

class History extends PureComponent<HistoryContainerProps> {
  public render() {
    const { history } = this.props

    switch (this.props.fetchStatus) {
      case fetchStatus.INITIAL:
        return (
          <Label small grey>
            Loading...
          </Label>
        )
      case fetchStatus.SUCCESS:
        return (
          <>
            <HistoryFiltersDiv>
              <HistoryFilterGroupDiv>{this.renderPriceFilterButton()}</HistoryFilterGroupDiv>
              <HistoryFilterGroupDiv>{this.renderDateFilterButton()}</HistoryFilterGroupDiv>
            </HistoryFiltersDiv>
            <HistoryChartDiv>
              <HistoryChart history={history} />
            </HistoryChartDiv>
          </>
        )
      case fetchStatus.FAILED:
        return (
          <Label small grey>
            Failed to fetch stock history
          </Label>
        )
      default:
        return null
    }
  }

  private readonly getHistoryData = (type: string, value: string) => {
    const symbol = this.props.company

    if (type === filterType.DATE) {
      this.props.onClickFilterHistoryByDate(symbol, value)
    } else {
      this.props.onClickFilterHistoryByPrice(symbol, value)
    }
  }

  private readonly renderPriceFilterButton = () =>
    priceFilters.map((filter: string) => (
      <FilterButton
        key={filter}
        type={filterType.PRICE}
        value={filter}
        selected={this.props.priceFilter === filter}
        onClick={this.getHistoryData}
      />
    ))

  private readonly renderDateFilterButton = () =>
    dateFilters.map((filter: string) => (
      <FilterButton
        key={filter}
        type={filterType.DATE}
        value={filter}
        selected={this.props.dateFilter === filter}
        onClick={this.getHistoryData}
      />
    ))
}

const tickStyle = {
  fill: 'white',
  opacity: 0.5,
  fontSize: 14
}

const yTickFormatter = (tick: number) =>
  tick.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })

export const HistoryChart: React.SFC<HistoryChartProps> = ({ history }) => (
  <ResponsiveContainer>
    <AreaChart data={history} margin={{ right: -7 }}>
      <defs>
        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#7fb3ff" stopOpacity={0.5} />
          <stop offset="95%" stopColor="#7fb3ff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#1b3d62" />
      <Area type="monotone" dot={false} dataKey="price" stroke="#beccdc" fill="url(#color)" />
      <XAxis dataKey="date" stroke="#002d6f" tick={tickStyle} interval="preserveStart" />
      <YAxis
        dataKey="price"
        domain={['auto', 'auto']}
        padding={{ top: 20, bottom: 20 }}
        tickCount={10}
        tickFormatter={yTickFormatter}
        stroke="#002d6f"
        tick={tickStyle}
        orientation="right"
      />
      <Tooltip />
    </AreaChart>
  </ResponsiveContainer>
)

export default History
