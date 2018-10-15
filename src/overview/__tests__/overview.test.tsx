import { mockGlobalState } from '__mock__/globalstate.mock'
import fetchStatus from 'fetchStatus'
import Overview from 'overview/overview'
import React from 'react'
import renderer from 'react-test-renderer'

describe('overview component', () => {
  it('should render correctly before initial fetch', () => {
    const mockInitialState = {
      ...mockGlobalState.overview,
      fetchStatus: fetchStatus.INITIAL
    }
    const tree = renderer.create(<Overview overview={mockInitialState} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly on data fetch success', () => {
    const tree = renderer.create(<Overview overview={mockGlobalState.overview} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly on data fetch failed', () => {
    const mockFailedState = {
      ...mockGlobalState.overview,
      fetchStatus: fetchStatus.FAILED
    }
    const tree = renderer.create(<Overview overview={mockFailedState} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
