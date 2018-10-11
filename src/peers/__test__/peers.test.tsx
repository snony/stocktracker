import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import mockPeersData from './mockData'

import Peers from '../peers'

describe('testing for peers component', () => {
  it('should render Peers with loading when peers state is empty', () => {
    const peers = mockPeersData.emptyPeers
    const wrapper = shallow(<Peers peers={peers} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render Peers with peers state data correctly', () => {
    const wrapper = shallow(<Peers peers={mockPeersData.examplePeers} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
