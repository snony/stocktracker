import * as actions from 'history/historyActions'
import { filters } from 'history/historyConst'
import { mapDispatchToProps, mapStateToProps } from 'history/historyContainer'
import { GlobalState } from 'types'

import { mockChartData, mockGlobalState } from './__mock__/mockData'

describe('history container', () => {
  it('should map state to props correctly', () => {
    const expectedStateProps = {
      company: 'AAPL',
      history: mockChartData,
      dateFilter: filters.YTD,
      priceFilter: filters.CLOSE
    }

    expect(mapStateToProps(mockGlobalState as GlobalState)).toEqual(expectedStateProps)
  })

  describe('should map dispatch to props correctly', () => {
    const symbol = 'AAPL'
    const dateFilter = filters.YTD
    const priceFilter = filters.CLOSE

    const dispatch = jest.fn()

    it('should map onClickFilterHistoryByDate to props correctly', () => {
      const filterDateSpy = jest.spyOn(actions, 'getHistoryByDateFilter')

      mapDispatchToProps(dispatch).onClickFilterHistoryByDate(symbol, dateFilter)
      expect(filterDateSpy).toHaveBeenCalledWith(symbol, dateFilter)

      filterDateSpy.mockRestore()
    })

    it('should map onClickFilterHistoryByPrice to props correctly', () => {
      const filterPriceSpy = jest.spyOn(actions, 'getHistoryByPriceFilter')

      mapDispatchToProps(dispatch).onClickFilterHistoryByPrice(symbol, priceFilter)
      expect(filterPriceSpy).toHaveBeenCalledWith(symbol, priceFilter)

      filterPriceSpy.mockRestore()
    })

    it('should map dispatch to props correctly', () => {
      expect(dispatch).toHaveBeenCalledTimes(2)
    })
  })
})