import { GlobalState } from "types"

import { mockCompanySymbols } from "./companySymbols.mock"
import { mockHistoryState } from "./history.mock"
import { mockKeyStats } from "./keystats.mock"
import { mockNews } from "./news.mock"
import { mockOverviewData } from "./overview.mock"
import { mockFailedPeersState, mockPeersState } from "./peers.mock"

export const mockGlobalState: GlobalState = {
  companySymbols: mockCompanySymbols,
  company: mockCompanySymbols[0],
  history: mockHistoryState,
  news: mockNews,
  keystats: mockKeyStats,
  overview: mockOverviewData,
  peers: mockPeersState
}

export const mockFailedGlobalState = {
  // Add the rest
 
  peers: mockFailedPeersState
} as GlobalState