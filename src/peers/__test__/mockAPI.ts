import mockPeersData from './mockData'

export default {
  getCompanySymbols: jest.fn(() => {
    return new Promise(resolve => {
      resolve({})
    })
  }),
  getHistory: jest.fn(() => {
    return new Promise(resolve => {
      resolve({})
    })
  }),
  getNews: jest.fn(() => {
    return new Promise(resolve => {
      resolve({})
    })
  }),
  getKeyStats: jest.fn(() => {
    return new Promise(resolve => {
      resolve({})
    })
  }),
  getOverview: jest.fn(() => {
    return new Promise(resolve => {
      resolve({})
    })
  }),
  getPeers: jest.fn(() => {
    return new Promise(resolve => {
      resolve(mockPeersData.examplePeers)
    })
  })
}
