import { initialState } from 'overview/overviewReducer'
import { OverviewState } from 'overview/types'

export const mockOverviewData = (overrides: Partial<OverviewState>): OverviewState => ({
  ...initialState,
  ...overrides
})

export const mockAaplOverviewData = mockOverviewData({
  companyName: 'Apple Inc.',
  symbol: 'AAPL',
  website: 'http://www.apple.com',
  description:
    'Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.'
})
