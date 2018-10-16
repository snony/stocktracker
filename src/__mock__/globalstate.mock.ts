import { GlobalState } from "types"

import { mockCompanySymbols } from "./companySymbols.mock"
import { mockHistoryState } from "./history.mock"
import { mockFailedKeyStatsState, mockKeyStatsState } from "./keystats.mock"
import { mockNews } from "./news.mock"
import { mockOverviewData } from "./overview.mock"
import { mockPeers } from "./peers.mock"

export const mockGlobalState: GlobalState = {
  companySymbols: mockCompanySymbols,
  company: mockCompanySymbols[0],
  history: mockHistoryState,
  news: mockNews,
  keystats: mockKeyStatsState,
  overview: mockOverviewData,
  peers: mockPeers
}

export const mockFailedGlobalState = {
  // Add the rest
 
  keystats: mockFailedKeyStatsState
} as GlobalState 
