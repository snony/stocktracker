import { GlobalState } from 'types'

import { mockCompanySymbols } from './companySymbols.mock'
import { mockFailedHistoryState, mockHistoryState } from './history.mock'
import { mockKeyStats } from './keystats.mock'
import { mockNews } from './news.mock'
import { mockOverviewData } from './overview.mock'
import { mockPeers } from './peers.mock'

export const mockGlobalState: GlobalState = {
  companySymbols: mockCompanySymbols,
  company: mockCompanySymbols[0],
  history: mockHistoryState,
  news: mockNews,
  keystats: mockKeyStats,
  overview: mockOverviewData,
  peers: mockPeers
}

export const mockFailedGlobalState: GlobalState = {
  // Add the rest
  history: mockFailedHistoryState
} as GlobalState
