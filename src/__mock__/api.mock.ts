import { mockGlobalState } from './globalstate.mock'

export const mockApi = {
  getCompanySymbols: jest.fn().mockResolvedValue(mockGlobalState.companySymbols),
  getHistory: jest.fn().mockResolvedValue(mockGlobalState.history),
  getNews: jest.fn().mockResolvedValue(mockGlobalState.news),
  getKeyStats: jest.fn().mockResolvedValue(mockGlobalState.keystats),
  getOverview: jest.fn().mockResolvedValue(mockGlobalState.overview),
  getPeers: jest.fn().mockResolvedValue(mockGlobalState.peers)
}

export const mockFailedApi = {
  getCompanySymbols: jest.fn().mockRejectedValue('Error fetching data'),
  getHistory: jest.fn().mockRejectedValue('Error fetching data'),
  getNews: jest.fn().mockRejectedValue('Error fetching data'),
  getKeyStats: jest.fn().mockRejectedValue('Error fetching data'),
  getOverview: jest.fn().mockRejectedValue('Error fetching data'),
  getPeers: jest.fn().mockRejectedValue('Error fetching data')
}
