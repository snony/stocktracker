import { Company } from '../types'
import { getCompanySymbols as companySymbols } from './companySymbols.mock'
import { mockGlobalState } from './globalstate.mock'

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
  getCompanySymbols: jest.fn().mockResolvedValue(mockGlobalState.companySymbols),
  getHistory: jest.fn().mockResolvedValue(mockGlobalState.history),
  getNews: jest.fn().mockResolvedValue(mockGlobalState.news),
  getKeyStats: jest.fn().mockResolvedValue(mockGlobalState.keystats),
  getOverview:jest.fn().mockResolvedValue(mockGlobalState.overview),
  getPeers: jest.fn().mockResolvedValue(mockGlobalState.peers)
}
