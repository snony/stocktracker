import Overview from 'overview/overview'
import React from 'react'
import renderer from 'react-test-renderer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('overview component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Overview overview={mockGlobalState.overview} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
