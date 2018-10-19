import { mockGlobalState } from './globalstate.mock'

export const mockApi = {
  getCompanySymbols: jest.fn().mockResolvedValue(mockGlobalState.companySymbolsState),
  getHistory: jest.fn().mockResolvedValue(mockGlobalState.history),
  getNews: jest.fn().mockResolvedValue(mockGlobalState.news),
  getKeyStats: jest.fn().mockResolvedValue(mockGlobalState.keystats),
  getOverview: jest.fn().mockResolvedValue(mockGlobalState.overview),
  getPeers: jest.fn().mockResolvedValue(mockGlobalState.peers),
  getPreviousClose: jest.fn().mockResolvedValue('resolved')
}

export const mockFailedApi = {
  getCompanySymbols: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
  getHistory: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
  getNews: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
  getKeyStats: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
  getOverview: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
  getPeers: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data')),
  getPreviousClose: jest.fn().mockRejectedValueOnce(new Error('Cannot fetch data'))
}
