import Overview from 'overview/overview'
import React from 'react'
import renderer from 'react-test-renderer'

import { mockAaplOverviewData } from './__mock__/mockData'

describe('overview component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Overview overview={mockAaplOverviewData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
