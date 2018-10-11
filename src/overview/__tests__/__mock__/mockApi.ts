import { mockAaplOverviewData } from './mockData'

export const mockApi = {
  getOverview: jest.fn(() => Promise.resolve(mockAaplOverviewData))
}
