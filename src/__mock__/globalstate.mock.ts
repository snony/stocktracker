import { GlobalState } from "types"

import { companySymbolsMock, mockCompanySymbols } from "./companySymbols.mock"
import { mockHistoryState } from "./history.mock"
import { mockKeyStats } from "./keystats.mock"
import { mockNews } from "./news.mock"
import { mockOverviewData } from "./overview.mock"
import { mockPeers } from "./peers.mock"

export const mockGlobalState: GlobalState = {
  companySymbolsState: mockCompanySymbols,
  company: companySymbolsMock[0],
  history: mockHistoryState,
  news: mockNews,
  keystats: mockKeyStats,
  overview: mockOverviewData,
  peers: mockPeers
}