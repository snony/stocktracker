import { mockGlobalState } from '__mock__/globalstate.mock'
import { numberConvertor, numberFormat, statsMap } from 'keystats/util'

describe('tests for numberFormat tool', () => {
  describe('the input is an integer', () => {
    const int1 = 1
    const int2 = 1000
    it('should not format nummber and return a string', () => {
      expect(numberFormat(int1)).toBe('1')
      expect(numberFormat(int2)).toBe('1,000')
    })
  })

  describe('the input is not integer', () => {
    const num1 = 1.5
    const num2 = 1500.505
    it('should format nummber and return a string', () => {
      expect(numberFormat(num1)).toBe('1.50')
      expect(numberFormat(num2)).toBe('1,500.51')
    })
  })

  describe('the input is not a number', () => {
    it('should return 0 when input is undefined', () => {
      const input: undefined = undefined
      expect(numberFormat(input)).toBe('0')
    })

    it('should return 0 when input is undefined', () => {
      const input: null = null
      expect(numberFormat(input)).toBe('0')
    })

    it('should return 0 when input is not a number', () => {
      const input: any = 'testing'
      expect(numberFormat(input)).toBe('0')
    })
  })
})

describe('test for numberConvertor tool', () => {
  it('should return a new object with keystats values converted into correct format and in string', () => {
    const expectedObj = {
      avgTotalVolume: '10,000',
      dayHigh: '100',
      dayLow: '10',
      dividendYield: '10',
      earningsPerShare: '10',
      marketCap: '100,000,000',
      open: '10',
      peRatio: '10',
      previousClose: '10',
      volume: '10,000',
      week52High: '100',
      week52Low: '10'
    }

    const convertedObj = numberConvertor(mockGlobalState.keystats)

    expect(convertedObj).toEqual(expectedObj)
  })
})

describe('test for statsMap tool', () => {
  it('should return a new object to be ready for render in React Component', () => {
    const expectedObj = {
      '52 Week Range': '10 - 100',
      'Day Range': '10 - 100',
      'Dividend & Yield': '10%',
      'Earnings Per Share': '10',
      'Market Cap': '100,000,000',
      Open: '10',
      'P/E Ratio': '10',
      'Previous Close': '10',
      'Total Avg. Volume': '10,000',
      Volume: '10,000'
    }

    const convertedObj = numberConvertor(mockGlobalState.keystats)
    const mappedObj = statsMap(convertedObj)

    expect(mappedObj).toEqual(expectedObj)
  })
})
