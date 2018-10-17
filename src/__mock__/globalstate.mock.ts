import { GlobalState } from 'types'

import { companySymbolsMock, mockCompanySymbols } from './companySymbols.mock'
import { mockHistoryState } from './history.mock'
import { mockKeyStats } from './keystats.mock'
import { mockNews } from './news.mock'
import { mockFailedOverviewData, mockOverviewData } from './overview.mock'
import { mockFailedPeersState, mockPeersState } from './peers.mock'

export const mockGlobalState: GlobalState = {
  companySymbolsState: mockCompanySymbols,
  company: companySymbolsMock[0],
  history: mockHistoryState,
  news: mockNews,
  keystats: mockKeyStats,
  overview: mockOverviewData,
  peers: mockPeersState
}

export const mockFailedGlobalState = {
  // Add the rest
  overview: mockFailedOverviewData,
  peers: mockFailedPeersState
} as GlobalState
