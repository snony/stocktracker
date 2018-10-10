import mockPeersData from './mockData'

export default {
  getCompanySymbols: jest.fn().mockResolvedValue({}),
  getHistory: jest.fn().mockResolvedValue({}),
  getNews: jest.fn().mockResolvedValue({}),
  getKeyStats: jest.fn().mockResolvedValue({}),
  getOverview:jest.fn().mockResolvedValue({}),
  getPeers: jest.fn().mockResolvedValue(mockPeersData.examplePeers)
}
