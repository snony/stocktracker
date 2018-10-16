import { extractKeyStatsData } from 'api'

export type KeyStats = ReturnType<typeof extractKeyStatsData>
export interface KeyStatsState {
  keystats: KeyStats,
  fetchStatus: string
}
