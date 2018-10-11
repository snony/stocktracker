import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import { StockTracker } from '../stockTracker'

configure({ adapter: new Adapter() })

describe('StockTracker Component', () => {
  it('should render correctly', () => {
    const stockTrackerWrapper = shallow(<StockTracker />)
    expect(stockTrackerWrapper).toMatchSnapshot()
  })
})
