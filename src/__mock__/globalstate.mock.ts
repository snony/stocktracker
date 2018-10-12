import { GlobalState } from "types"

import { listOfCompanySymbols } from "./companySymbols.mock"
import { mockKeyStats } from "./keystats.mock"
import { mockOverviewData } from "./overview.mock"
import { mockPeers } from "./peers.mock"

export const mockGlobalState: GlobalState = {
  companySymbols: listOfCompanySymbols,
  company: {} as any,
  history: {} as any,
  news: [] as any,
  keystats: mockKeyStats,
  overview: mockOverviewData,
  peers: mockPeers
}