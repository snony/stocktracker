import { mockGlobalState } from '__mock__/globalstate.mock'
import fetchStatus from 'fetchStatus'
import * as actions from 'history/historyActions'
import { filters } from 'history/historyConst'
import { mapDispatchToProps, mapStateToProps } from 'history/historyContainer'

describe('history container', () => {
  it('should map state to props correctly', () => {
    const expectedStateProps = {
      fetchStatus: fetchStatus.SUCCESS,
      company: mockGlobalState.company.symbol,
      history: mockGlobalState.history.history,
      priceFilter: mockGlobalState.history.priceFilter,
      dateFilter: mockGlobalState.history.dateFilter
    }

    expect(mapStateToProps(mockGlobalState)).toEqual(expectedStateProps)
  })

  describe('should map dispatch to props correctly', () => {
    const symbol = 'AAPL'
    const dateFilter = filters.YTD
    const priceFilter = filters.CLOSE

    it('should map onClickFilterHistoryByDate to props correctly', () => {
      const dispatch = jest.fn()
      const filterDateSpy = jest.spyOn(actions, 'getHistoryByDateFilter')

      mapDispatchToProps(dispatch).onClickFilterHistoryByDate(symbol, dateFilter)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(filterDateSpy).toHaveBeenCalledWith(symbol, dateFilter)

      filterDateSpy.mockRestore()
    })

    it('should map onClickFilterHistoryByPrice to props correctly', () => {
      const dispatch = jest.fn()
      const filterPriceSpy = jest.spyOn(actions, 'getHistoryByPriceFilter')

      mapDispatchToProps(dispatch).onClickFilterHistoryByPrice(symbol, priceFilter)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(filterPriceSpy).toHaveBeenCalledWith(symbol, priceFilter)

      filterPriceSpy.mockRestore()
    })
  })
})
