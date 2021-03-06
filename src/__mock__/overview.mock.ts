import fetchStatus from 'fetchStatus'
import { initialState } from 'overview/overviewReducer'
import { OverviewState } from 'overview/types'

export const mockOverview = (overrides: Partial<OverviewState>): OverviewState => ({
  ...initialState,
  ...overrides
})

export const mockOverviewData = mockOverview({
  fetchStatus: fetchStatus.SUCCESS,
  companyName: 'Apple Inc.',
  symbol: 'AAPL',
  website: 'http://www.apple.com',
  description:
    'Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.'
})

export const mockFailedOverviewData = mockOverview({
  fetchStatus: fetchStatus.FAILED
})
