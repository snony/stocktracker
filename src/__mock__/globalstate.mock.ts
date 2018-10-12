import { GlobalState } from "types"

import { mockCompanySymbols } from "./companySymbols.mock"
import { mockKeyStats } from "./keystats.mock"
import { mockNews } from "./news.mock"
import { mockOverviewData } from "./overview.mock"
import { mockPeers } from "./peers.mock"

export const mockGlobalState: GlobalState = {
  companySymbols: mockCompanySymbols,
  company: {} as any,
  history: {} as any,
  news: mockNews,
  keystats: mockKeyStats,
  overview: mockOverviewData,
  peers: mockPeers
}