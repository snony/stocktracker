import React from 'react'
import { CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { getChart } from './../../api'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/index'

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

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
    const { value } = this.props
    const label = capitalize(value)

    return (
      <button key={value} onClick={this.onClick}>
        {label}
      </button>
    )
  }
}

const priceFilters = ['close', 'open', 'high', 'low']
const dateFilters = ['ytd', '1d', '1m', '6m', '1y', '5y']

class ChartContainer extends React.Component {
   
  getChartData = (type, value) => {
    const symbol = this.props.company.symbol;

    const dateFilter =
      type === 'both' ? dateFilters[0] : type === 'date' ? value : this.props.filters.dateFilter
    const priceFilter =
      type === 'both' ? priceFilters[0] : type === 'price' ? value : this.props.filters.priceFilter
    
    this.props.onClickFilterChart(symbol, dateFilter, priceFilter);
  }

  renderPriceFilterButton = () =>
    priceFilters.map(filter => (
      <FilterButton key={filter} type="price" value={filter} onClick={this.getChartData} />
    ))

  renderDateFilterButton = () =>
    dateFilters.map(filter => (
      <FilterButton key={filter} type="date" value={filter} onClick={this.getChartData} />
    ))

  render() {
    const priceFilter = this.props.filters.priceFilter;
    const history = this.props.companyInfo.charts;
    const shouldDisplayData = history.length > 0
    return shouldDisplayData ? (
      <div>
        {this.renderPriceFilterButton()}
        {<span>&nbsp;&nbsp;&nbsp;</span>}
        {this.renderDateFilterButton()}
        {<DisplayChart priceFilter={priceFilter} history={history} />}
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}

const DisplayChart = ({ priceFilter, history }) => {
  const yAxisLabel = capitalize(priceFilter)
  return (
    <LineChart width={1000} height={600} data={history} style={{ margin: 5 }}>
      <Line type="monotone" dataKey={priceFilter} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date">
        <Label value="Date" dy={10} position="insideBottom" />
      </XAxis>
      <YAxis dataKey={priceFilter}>
        <Label value={yAxisLabel} dx={10} position="insideLeft" angle={-90} />
      </YAxis>
      <Tooltip />
    </LineChart>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)
