import { shallow } from 'enzyme'
import React from 'react'
import { StockTracker } from 'stockTracker'

describe('StockTracker Component', () => {
  it('should render correctly', () => {
    const stockTrackerWrapper = shallow(<StockTracker />)
    expect(stockTrackerWrapper).toMatchSnapshot()
  })
})
