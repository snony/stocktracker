import * as actions from 'history/historyActions'
import { filters } from 'history/historyConst'
import { mapDispatchToProps, mapStateToProps } from 'history/historyContainer'
import { GlobalState } from 'types'

import { mockChartData, mockGlobalState } from './mockData'

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

  it('should map dispatch to props correctly', () => {
    const symbol = 'AAPL'
    const dateFilter = filters.YTD
    const priceFilter = filters.CLOSE

    const dispatch = jest.fn()
    const filterDateSpy = jest.spyOn(actions, 'getHistoryByDateFilter')
    const filterPriceSpy = jest.spyOn(actions, 'getHistoryByPriceFilter')

    mapDispatchToProps(dispatch).onClickFilterHistoryByDate(symbol, dateFilter)
    expect(filterDateSpy).toHaveBeenCalledWith(symbol, dateFilter)

    mapDispatchToProps(dispatch).onClickFilterHistoryByPrice(symbol, priceFilter)
    expect(filterPriceSpy).toHaveBeenCalledWith(symbol, priceFilter)

    expect(dispatch).toHaveBeenCalledTimes(2)

    filterDateSpy.mockRestore()
    filterPriceSpy.mockRestore()
  })
})
