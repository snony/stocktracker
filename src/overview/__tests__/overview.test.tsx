import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import Overview from '../overview'
import { mockAaplOverviewData } from './mockData'

Enzyme.configure({ adapter: new Adapter() })

describe('overview component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Overview overview={mockAaplOverviewData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
