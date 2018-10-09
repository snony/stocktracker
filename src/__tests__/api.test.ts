import { extractData, fetchAndUnpack } from 'api'
import { keyStatsInput, mockFetchData } from './mockData'

describe('api', () => {
  it('should fetch and unpack correctly', async () => {
    const fetchMock = require('fetch-mock')
    fetchMock.getOnce('*', {
      body: mockFetchData,
      headers: { 'content-type': 'application/json' }
    })
    const response = await fetchAndUnpack('test')
    expect(response).toEqual(mockFetchData)
  })

  it('should extract key stats data correctly', () => {
    const expectedOutput = {
      earningsPerShare: 1,
      dividendYield: 2,
      previousClose: 3,
      open: 4,
      dayHigh: 5,
      dayLow: 6,
      volume: 7,
      avgTotalVolume: 8,
      peRatio: 9,
      marketCap: 10,
      week52High: 11,
      week52Low: 12
    }
    expect(extractData(keyStatsInput)).toEqual(expectedOutput)
  })

  /**
   * Todo TL 09/10/18
   * Add tests for formatHistoryData method once it has been approved and merged
   */
})
