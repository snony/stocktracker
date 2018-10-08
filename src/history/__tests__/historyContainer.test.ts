import * as actions from 'history/historyActions'
import { filters } from 'history/historyConst'
import { mapDispatchToProps, mapStateToProps } from 'history/historyContainer'
import { GlobalState } from 'types'

import { historyData, mockGlobalState } from './mockData'

test('placeholder', () => {
  expect(true).toBeTruthy()
})

describe('history container', () => {
  it('should map state to props correctly', () => {
    const expectedStateProps = {
      company: 'AAPL',
      history: historyData,
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

    spyOn(actions, 'getHistoryByDateFilter')
    spyOn(actions, 'getHistoryByPriceFilter')

    mapDispatchToProps(dispatch).onClickFilterHistoryByDate(symbol, dateFilter)
    expect(actions.getHistoryByDateFilter).toHaveBeenCalled()
    expect(actions.getHistoryByDateFilter).toHaveBeenCalledWith(symbol, dateFilter)

    mapDispatchToProps(dispatch).onClickFilterHistoryByPrice(symbol, priceFilter)
    expect(actions.getHistoryByPriceFilter).toHaveBeenCalled()
    expect(actions.getHistoryByPriceFilter).toHaveBeenCalledWith(symbol, priceFilter)

    expect(dispatch).toHaveBeenCalledTimes(2)
  })
})
