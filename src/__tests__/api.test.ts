import * as api from 'api'

import { keyStatsInput, mockFetchData } from './mockData'

describe('api', () => {
  it('should fetch and unpack correctly', async () => {
    const fetchMock = require('fetch-mock')
    fetchMock.getOnce('*', {
      body: mockFetchData,
      headers: { 'content-type': 'application/json' }
    })

    const response = await api.fetchAndUnpack('test')
    expect(response).toEqual(mockFetchData)

    fetchMock.restore()
  })

  describe('get data functions', () => {
    const fetchMock = require('fetch-mock')
    const mockFetchAndUnpack = jest.spyOn(api, 'fetchAndUnpack')

    beforeEach(() => {
      fetchMock.get('*', { body: {} })
    })

    afterEach(() => {
      fetchMock.restore()
    })

    it('should getCompanySymbols with the correct URL', async () => {
      const expectedUrl = 'https://api.iextrading.com/1.0/ref-data/symbols?filter=name,symbol'
      await api.getCompanySymbols()
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)
    })

    it('should getHistory with the correct URL', async () => {
      const expectedUrl = 'https://api.iextrading.com/1.0/stock/aapl/chart/ytd?filter=date,close'
      await api.getHistory('aapl')
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)
    })

    it('should getNews with the correct URL', async () => {
      const expectedUrl = 'https://api.iextrading.com/1.0/stock/aapl/news/last/5'
      await api.getNews('aapl')
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)
    })

    it('should getOverview with the correct URL', async () => {
      const expectedUrl = 'https://api.iextrading.com/1.0/stock/aapl/company'
      await api.getOverview('aapl')
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)
    })

    it('should getPeers with the correct URL', async () => {
      const expectedUrl = 'https://api.iextrading.com/1.0/stock/aapl/peers'
      await api.getPeers('aapl')
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)
    })

    it('should getKeyStats with the correct URL', async () => {
      // api.extractData = jest.fn(keystats => keystats)
      // const expectedUrl = 'https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,stats'
      // await api.getKeyStats('aapl')
      // expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)
      expect.anything()
    })
  })

  describe('format data functions', () => {
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
      expect(api.extractData(keyStatsInput)).toEqual(expectedOutput)
    })

    /**
     * Todo TL 09/10/18
     * Add tests for formatHistoryData method once it has been approved and merged
     */
  })
})
