import History from 'histories'
import RootDiv from 'index.styles'
import KeyStats from 'keystats'
import AdaptiveLogo from 'logo'
import News from 'news'
import Overview from 'overview'
import Peers from 'peers'
import Quote from 'quote'
import * as React from 'react'
import Search from 'search'

export const StockTracker: React.SFC = () => (
  <RootDiv.StockTrackerDiv>
    <RootDiv.LogoDiv>
      <AdaptiveLogo />
    </RootDiv.LogoDiv>

    <RootDiv.CompanyDiv>
      <RootDiv.SearchDiv>
        <Search />
      </RootDiv.SearchDiv>
      <Quote />
    </RootDiv.CompanyDiv>

    <RootDiv.HistoryDiv>
      <History />
    </RootDiv.HistoryDiv>

    <RootDiv.NewsDiv>
      <RootDiv.ComponentTitle>News</RootDiv.ComponentTitle>
      <News />
    </RootDiv.NewsDiv>

    <RootDiv.KeyStatsDiv>
      <RootDiv.ComponentTitle>Key Stats</RootDiv.ComponentTitle>
      <KeyStats />
    </RootDiv.KeyStatsDiv>

    <RootDiv.OverviewDiv>
      <RootDiv.ComponentTitle>Overview</RootDiv.ComponentTitle>
      <Overview />
    </RootDiv.OverviewDiv>

    <RootDiv.PeersDiv>
      <RootDiv.ComponentTitle>Peers</RootDiv.ComponentTitle>
      <Peers />
    </RootDiv.PeersDiv>
  </RootDiv.StockTrackerDiv>
)

export default StockTracker
