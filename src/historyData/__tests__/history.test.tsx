import { mockGlobalState } from '__mock__/globalstate.mock'
import { mount, shallow } from 'enzyme'
import fetchStatus from 'fetchStatus'
import History, { HistoryChart } from 'history/history'
import { HistoryContainerProps } from 'history/historyContainer'
import { initialState } from 'history/historyReducer'
import { HistoryChartProps } from 'history/types'
import React from 'react'
import renderer from 'react-test-renderer'

const historyContainerPropsCreator = (
  overrides: Partial<HistoryContainerProps>
): HistoryContainerProps => ({
  company: 'AAPL',
  onClickFilterHistoryByDate: jest.fn(),
  onClickFilterHistoryByPrice: jest.fn(),
  ...initialState,
  ...overrides
})

const mockHistoryContainerProps = historyContainerPropsCreator(mockGlobalState.history)

const createNodeMock = () => {
  const doc = document.implementation.createHTMLDocument()
  return { parentElement: doc.body }
}

describe('history component', () => {
  it('should render history chart correctly', () => {
    const mockHistoryChartProps: HistoryChartProps = {
      history: mockGlobalState.history.history
    }

    const tree = renderer
      .create(<HistoryChart {...mockHistoryChartProps} />, { createNodeMock })
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly before initial fetch', () => {
    const mockInitialHistoryContainerProps = historyContainerPropsCreator({})
    const tree = renderer
      .create(<History {...mockInitialHistoryContainerProps} />, { createNodeMock })
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const tree = renderer
      .create(<History {...mockHistoryContainerProps} />, { createNodeMock })
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly on data fetch failed', () => {
    const mockFailedHistoryContainerProps = historyContainerPropsCreator({
      fetchStatus: fetchStatus.FAILED
    })
    const tree = renderer
      .create(<History {...mockFailedHistoryContainerProps} />, { createNodeMock })
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render filter buttons correctly', () => {
    const wrapper = shallow(<History {...mockHistoryContainerProps} />)

    expect(wrapper.find('FilterButton[type="date"]')).toHaveLength(6)
    expect(wrapper.find('FilterButton[type="price"]')).toHaveLength(4)
  })

  describe("should change filter button's selected attribute when filter is changed", () => {
    it('date filter', () => {
      const wrapper = shallow(<History {...mockHistoryContainerProps} />)

      wrapper.setProps({ dateFilter: '1m' })
      expect(wrapper.find('FilterButton[value="1m"]').prop('selected')).toBeTruthy()
    })

    it('price filter', () => {
      const wrapper = shallow(<History {...mockHistoryContainerProps} />)

      wrapper.setProps({ priceFilter: 'close' })
      expect(wrapper.find('FilterButton[value="close"]').prop('selected')).toBeTruthy()
    })
  })

  it('should call onClickFilterHistoryBy[Date|Price] when a filter button is clicked', () => {
    const wrapper = mount(<History {...mockHistoryContainerProps} />)

    wrapper.find('FilterButton[value="1m"]').simulate('click')
    wrapper.find('FilterButton[value="close"]').simulate('click')

    expect(mockHistoryContainerProps.onClickFilterHistoryByDate).toHaveBeenCalledWith('AAPL', '1m')
    expect(mockHistoryContainerProps.onClickFilterHistoryByPrice).toHaveBeenCalledWith(
      'AAPL',
      'close'
    )
  })
})
