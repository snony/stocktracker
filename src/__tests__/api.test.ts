import * as api from 'api'

import {
  historyInput,
  historyInput1D,
  keyStatsInput,
  mockFetchData
} from '../__mock__/apiData.mock'

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
      const expectedUrl =
        'https://api.iextrading.com/1.0/stock/aapl/chart/ytd?filter=close,date,minute'

      const formatHistoryDataSpy = jest.spyOn(api, 'formatHistoryData').mockReturnValue({})

      await api.getHistory('aapl')
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)

      formatHistoryDataSpy.mockRestore()
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
      const expectedUrl = 'https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,stats'

      const extractKeyStatsDataSpy = jest.spyOn(api, 'extractKeyStatsData').mockReturnValue({})

      await api.getKeyStats('aapl')
      expect(mockFetchAndUnpack).toHaveBeenCalledWith(expectedUrl)

      extractKeyStatsDataSpy.mockRestore()
    })
  })

  describe('format data functions', () => {
    it('should format history data with 1d date filter correctly', () => {
      const expectedOutput = [
        {
          price: 135,
          date: '13:00'
        },
        {
          price: 136,
          date: '13:05'
        },
        {
          price: 137,
          date: '13:10'
        }
      ]

      expect(api.formatHistoryData(historyInput1D)).toEqual(expectedOutput)
    })

    it('should format history data with other date filters correctly', () => {
      const expectedOutput = [
        {
          price: 135,
          date: '14/09/2018'
        },
        {
          price: 140,
          date: '15/09/2018'
        },
        {
          price: 145,
          date: '16/09/2018'
        }
      ]

      expect(api.formatHistoryData(historyInput)).toEqual(expectedOutput)
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
      expect(api.extractKeyStatsData(keyStatsInput)).toEqual(expectedOutput)
    })
  })
})
