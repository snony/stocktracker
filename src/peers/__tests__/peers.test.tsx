import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Peers from 'peers/peers'
import { initialState } from 'peers/peersReducer'
import React from 'react'

describe('Peers Component', () => {
  it('should render Peers with loading... when peers state is empty', () => {
    const wrapper = shallow(<Peers peers={initialState} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render Peers with peers state data correctly', () => {
    const wrapper = shallow(<Peers peers={mockGlobalState.peers} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render Peers with Error when peers state is error', () => {
    const wrapper = shallow(<Peers peers={mockFailedGlobalState.peers} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
