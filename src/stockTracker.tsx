import styled from 'styled'

import History from 'histories'
import KeyStats from 'keystats'
import AdaptiveLogo from 'logo'
import News from 'news'
import Overview from 'overview'
import Peers from 'peers'
import Quote from 'quote'
import * as React from 'react'
import Search from 'search'
import { stockTrackerPadding } from 'styles';

export const StockTracker: React.SFC = () => (
  <StockTrackerDiv>
    <LogoDiv>
      <AdaptiveLogo />
    </LogoDiv>

    <CompanyDiv>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <Quote />
    </CompanyDiv>

    <HistoryDiv>
      <History />
    </HistoryDiv>

    <NewsDiv>
      <ComponentTitle>News</ComponentTitle>
      <News />
    </NewsDiv>

    <KeyStatsDiv>
      <ComponentTitle>Key Stats</ComponentTitle>
      <KeyStats />
    </KeyStatsDiv>

    <OverviewDiv>
      <ComponentTitle>Overview</ComponentTitle>
      <Overview />
    </OverviewDiv>

    <PeersDiv>
      <ComponentTitle>Peers</ComponentTitle>
      <Peers />
    </PeersDiv>
  </StockTrackerDiv>
)

export default StockTracker

const StockTrackerDiv = styled('div')`
  min-width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  resize: both;
  margin: 0;
  padding: ${stockTrackerPadding};
  font-family: 'Lato', sans-serif;
  background-image: ${props => props.theme.bg};
  border-radius: 0.25rem;
  display: grid;
  gap: 1rem 1.5rem;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'logo logo' 'search search' 'history news' 'keystats overview' 'keystats peers';

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'search'
      'history'
      'keystats'
      'news'
      'overview'
      'peers';
  }
`

const LogoDiv = styled('div')`
  grid-area: logo;
  align-self: center;
`

const CompanyDiv = styled('div')`
  grid-area: search;
  display: flex;
  align-items: center;
  font-size: 1.9rem;
  font-weight: 100;
`

const SearchDiv = styled('div')`
  flex: 1 1 auto;
`

const HistoryDiv = styled('div')`
  grid-area: history;
`

const NewsDiv = styled('div')`
  grid-area: news;
`

const KeyStatsDiv = styled('div')`
  grid-area: keystats;
`

const OverviewDiv = styled('div')`
  grid-area: overview;
`

const PeersDiv = styled('div')`
  grid-area: peers;
  align-self: center;
`

const ComponentTitle = styled('h3')(
  props => `
    color: ${props.theme.primaryColour};
    margin-bottom: 0.9rem;
    border-bottom: ${props.theme.heading};
  `
)


