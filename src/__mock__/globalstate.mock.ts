import { GlobalState } from 'types'

import { companySymbolsMock, mockCompanySymbols } from './companySymbols.mock'
import { mockFailedHistoryState, mockHistoryState } from './history.mock'
import { mockFailedKeyStatsState, mockKeyStatsState } from './keystats.mock'
import { mockNews } from './news.mock'
import { mockFailedOverviewData, mockOverviewData } from './overview.mock'
import { mockFailedPeersState, mockPeersState } from './peers.mock'
import { mockQuote } from './quote.mock'
import { mockSymbolSubscription } from './symbolSubscription.mock'

export const mockGlobalState = {
  companySymbolsState: mockCompanySymbols,
  company: companySymbolsMock[0],
  history: mockHistoryState,
  news: mockNews,
  keystats: mockKeyStatsState,
  overview: mockOverviewData,
  peers: mockPeersState,
  symbol: mockSymbolSubscription,
  quote: mockQuote
} as GlobalState

export const mockFailedGlobalState = {
  history: mockFailedHistoryState,
  keystats: mockFailedKeyStatsState,
  overview: mockFailedOverviewData,
  peers: mockFailedPeersState
} as GlobalState
