import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import History, { HistoryChart } from 'history/history'
import React from 'react'
import renderer from 'react-test-renderer'

import {
  mockEmptyHistoryContainerProps,
  mockHistoryChartProps,
  mockHistoryContainerProps
} from './mockData'

Enzyme.configure({ adapter: new Adapter() })

const createNodeMock = () => {
  const doc = document.implementation.createHTMLDocument()
  return { parentElement: doc.body }
}

describe('history component', () => {
  it('should render history chart correctly', () => {
    const tree = renderer
      .create(<HistoryChart {...mockHistoryChartProps} />, { createNodeMock })
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const tree = renderer
      .create(<History {...mockHistoryContainerProps} />, { createNodeMock })
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with no historical data', () => {
    const wrapper = shallow(<History {...mockEmptyHistoryContainerProps} />)

    expect(wrapper.getElement()).toBeNull()
  })

  it('should render filter buttons correctly', () => {
    const wrapper = shallow(<History {...mockHistoryContainerProps} />)

    expect(wrapper.find('FilterButton[type="date"]').length).toBe(6)
    expect(wrapper.find('FilterButton[type="price"]').length).toBe(4)
  })

  it("should change filter button's selected attribute when filter is changed", () => {
    const wrapper = shallow(<History {...mockHistoryContainerProps} />)

    expect(wrapper.find('FilterButton[value="ytd"]').prop('selected')).toBeTruthy()
    expect(wrapper.find('FilterButton[value="1m"]').prop('selected')).toBeFalsy()
    wrapper.setProps({ dateFilter: '1m' })
    expect(wrapper.find('FilterButton[value="ytd"]').prop('selected')).toBeFalsy()
    expect(wrapper.find('FilterButton[value="1m"]').prop('selected')).toBeTruthy()

    expect(wrapper.find('FilterButton[value="open"]').prop('selected')).toBeTruthy()
    expect(wrapper.find('FilterButton[value="close"]').prop('selected')).toBeFalsy()
    wrapper.setProps({ priceFilter: 'close' })
    expect(wrapper.find('FilterButton[value="open"]').prop('selected')).toBeFalsy()
    expect(wrapper.find('FilterButton[value="close"]').prop('selected')).toBeTruthy()
  })
})
