import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import React from 'react'
import peersData from './fixtures'

import Peers from '../peers'

Enzyme.configure({ 
  adapter: new Adapter() 
})

describe('testing for peers  component', () => {
  it('should render Peers with loading when peers state is empty', () => {
    const peers = peersData.emptyPeers
    const wrapper = shallow(<Peers peers={peers} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render Peers with peers state data correctly', () => {
    const wrapper = shallow(<Peers peers={peersData.examplePeers} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
