import fetchStatus from "fetchStatus"
import { KeyStats, KeyStatsState } from "keystats/types"

export const mockKeyStats: KeyStats = {
  previousClose: 10,
  dayHigh: 100,
  dayLow: 10,
  volume: 10000,
  marketCap: 100000000,
  peRatio: 10,
  open: 10,
  week52High: 100,
  week52Low: 10,
  avgTotalVolume: 10000,
  earningsPerShare: 10,
  dividendYield: 10
}

export const mockKeyStatsState: KeyStatsState = {
  keystats: mockKeyStats,
  fetchStatus: fetchStatus.SUCCESS
}

export const mockFailedKeyStatsState: KeyStatsState = {
  keystats: mockKeyStats,
  fetchStatus: fetchStatus.FAILED
}