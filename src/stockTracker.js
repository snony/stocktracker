import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './redux/index'

import InputSearchContainer from './search'
import ChartContainer from './history'
import Overview from './overview'
import News from './news'
import Peers from './peers'
import Stats from './stats'

import AdaptiveLogo from './logo'

const ComponentTitle = ({ title }) => <h3 className="component-title">{title}</h3>

export class StockTracker extends React.Component {
  componentDidMount() {
    this.props.getCompanies()
  }

  render() {
    const { news, overview, peers, keystats } = this.props.companyInfo
    return (
      <div className="stock-tracker-container">
        <div className="stock-tracker-container__logo">
          <AdaptiveLogo />
        </div>
        <div className="stock-tracker-container__search">
          <InputSearchContainer />
        </div>
        <div className="stock-tracker-container__history">
          <ChartContainer />
        </div>
        <div className="stock-tracker-container__news">
          <ComponentTitle title="News" />
          <News news={news} />
        </div>
        <div className="stock-tracker-container__key-stats">
          <ComponentTitle title="Key Stats" />
          <Stats keystats={keystats} />
        </div>
        <div className="stock-tracker-overview">
          <ComponentTitle title="Overview" />
          <Overview overview={overview} />
        </div>
        <div className="stock-tracker-container__peers">
          <ComponentTitle title="Peers" />
          <Peers peers={peers} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockTracker)
