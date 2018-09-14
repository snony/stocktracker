import React from 'react'
import InputSearchContainer from './components/search/form'
import {
  ChartContainer,
  NewsContainer,
  OverViewContainer,
  Peers,
  StatsContainer
} from './components/company/index'

const ComponentTitle = ({ title }) => <h3 className="component-title">{title}</h3>

class StockTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      symbol: ''
    }
  }

  onClickSuggestedResult = symbol => this.setState({ symbol })

  render() {
    return (
      <div className="stock-tracker">
        <h1> The Amazing StockTracker App In React-Redux</h1>
        <InputSearchContainer onClickSuggestedResult={this.onClickSuggestedResult} />
        <ComponentTitle title="Historical Data" />
        <ChartContainer symbol={this.state.symbol} />
        <ComponentTitle title="News" />
        <NewsContainer symbol={this.state.symbol} />
        <ComponentTitle title="Overview" />
        <OverViewContainer symbol={this.state.symbol} />
        <ComponentTitle title="Peers" />
        <Peers symbol={this.state.symbol} />
        <ComponentTitle title="Key Stats" />
        <StatsContainer symbol={this.state.symbol} />
      </div>
    )
  }
}

export default StockTracker
