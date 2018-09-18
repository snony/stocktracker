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
      <div className="stock-tracker-container">
        <div className="stock-tracker-container__search">
          <InputSearchContainer onClickSuggestedResult={this.onClickSuggestedResult} />
        </div>
        <div className="stock-tracker-container__history">
          <ChartContainer symbol={this.state.symbol} />
        </div>
        <div className="stock-tracker-container__news">
          <ComponentTitle title="News" />
          <NewsContainer symbol={this.state.symbol} />
        </div>
        <div className="stock-tracker-container__key-stats">
          <ComponentTitle title="Key Stats" />
          <StatsContainer symbol={this.state.symbol} />
        </div>
        <div className="stock-tracker-overview">
          <ComponentTitle title="Overview" />
          <OverViewContainer symbol={this.state.symbol} />
        </div>
        <div className="stock-tracker-container__peers">
          <ComponentTitle title="Peers" />
          <Peers symbol={this.state.symbol} />
        </div>
      </div>
    )
  }
}

export default StockTracker
