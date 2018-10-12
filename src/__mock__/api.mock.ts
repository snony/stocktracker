import { Company } from '../types'
import { getCompanySymbols as companySymbols } from './companySymbols.mock'
import { mockKeyStats, mockPeers } from './data.mock'

const mockFetch = (data: object) =>
  new Promise(resolve => {
    return resolve(data)
  })
export const getCompanySymbols = () => {
  const symbols: Company[] = companySymbols(25)

  return mockFetch(symbols)
}

export default { getCompanySymbols }

export const mockApi = {
  getCompanySymbols: jest.fn().mockResolvedValue({}),
  getHistory: jest.fn().mockResolvedValue({}),
  getNews: jest.fn().mockResolvedValue({}),
  getKeyStats: jest.fn().mockResolvedValue(mockKeyStats),
  getOverview:jest.fn().mockResolvedValue({}),
  getPeers: jest.fn().mockResolvedValue(mockPeers)
}
