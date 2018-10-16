import styled, { css } from 'react-emotion'

const stockTrackerPadding = `1.5rem`

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

const SearchDiv = styled('div')`
  grid-area: search;
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

export const logo = css`
  fill: white;
`

export default {
  StockTrackerDiv,
  LogoDiv,
  SearchDiv,
  HistoryDiv,
  NewsDiv,
  KeyStatsDiv,
  OverviewDiv,
  PeersDiv,
  ComponentTitle
}
