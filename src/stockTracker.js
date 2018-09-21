import React from 'react'

import SearchContainer from './search'
import HistoryContainer from './history'
import OverviewContainer from './overview'
import NewsContainer from './news'
import PeersContainer from './peers'
import KeyStatsContainer from './keystats'

import AdaptiveLogo from './logo'

const ComponentTitle = ({ title }) => <h3 className="component-title">{title}</h3>

export const StockTracker = () => (
  <div className="stock-tracker-container">
    <div className="stock-tracker-container__logo">
      <AdaptiveLogo />
    </div>
    <div className="stock-tracker-container__search">
      <SearchContainer />
    </div>
    <div className="stock-tracker-container__history">
      <HistoryContainer />
    </div>
    <div className="stock-tracker-container__news">
      <ComponentTitle title="News" />
      <NewsContainer />
    </div>
    <div className="stock-tracker-container__key-stats">
      <ComponentTitle title="Key Stats" />
      <KeyStatsContainer />
    </div>
    <div className="stock-tracker-overview">
      <ComponentTitle title="Overview" />
      <OverviewContainer />
    </div>
    <div className="stock-tracker-container__peers">
      <ComponentTitle title="Peers" />
      <PeersContainer />
    </div>
  </div>
)

export default StockTracker
